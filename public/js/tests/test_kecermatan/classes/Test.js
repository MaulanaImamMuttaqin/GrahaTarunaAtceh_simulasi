import { Render } from "../../../utility/render.js";
import Utility from "../../../utility/Utility.js";
import { question_list } from "../const.js";
import { Test_API } from "../model/Test_Api.js";
import { Render_test } from "../view/Render_Test.js";
export class Test {
    constructor(config) {
        this.numbers_list = [];
        this.test_is_started = false;
        this.question_index = 0;
        this.interval = 0;
        this.current_question = [""];
        this.current_number = "";
        this.index_num_removed = [];
        this.score = {
            overall: {
                total: 0,
                correct: 0,
                wrong: 0
            },
            detail: []
        };
        this.current_time = parseInt(config.duration);
        this.duration = parseInt(config.duration);
        this.number_digits = config.auto ? parseInt(config.number_digits) : question_list[0].split("").length;
        this.question_total = parseInt(config.question_total);
        this.numbers_list =
            config.auto ?
                this.generateNumbers(this.number_digits, this.question_total) :
                Utility.shuffleArray(question_list)
                    .splice(this.question_total, question_list.length - this.question_total);
        this.result_test_id = config.result_test_id;
        this.test_cache = (!this.getTestCache()) ? {
            is_start: false,
            is_finish: false,
            current_time: parseInt(config.duration),
            question_index: 0,
            numbers_list: this.numbers_list
        } : this.getTestCache();
        if (!this.getTestCache()) {
            this.storeTestCache();
        }
        if (this.test_cache.is_start)
            this.continueTest();
        else {
            this.numbers_list.forEach((q) => {
                var _a;
                (_a = this.score.detail) === null || _a === void 0 ? void 0 : _a.push({
                    question_number: q,
                    total: 0,
                    wrong: 0,
                    correct: 0,
                    tot_diff: null,
                    stability: null
                });
            });
            this.storeScore(this.score);
        }
    }
    continueTest() {
        this.question_index = this.test_cache.question_index;
        this.score = this.getScore();
        this.numbers_list = this.test_cache.numbers_list;
        this.current_time = this.test_cache.current_time;
        Render.Text("#timer", Utility.convertHMS(this.current_time, "number"));
        Render.showElement("#pertanyaan", true);
        Render.showElement("#soal", true);
        Render.showElement("#start-test", false);
        this.startTest();
    }
    startTest() {
        this.test_cache = Object.assign(Object.assign({}, this.test_cache), { is_start: true, is_finish: false });
        this.storeTestCache();
        if (!this.test_is_started)
            this.startTimer();
        Render_test.render_number(this.numbers_list[this.question_index]);
        Render_test.render_choices(this.numbers_list[this.question_index]);
        this.setQuestion();
    }
    stopTest() {
        var _a;
        clearInterval(this.interval);
        // this.test_cache = {
        //     is_start: false,
        //     is_finish: false,
        //     current_time: this.duration,
        //     question_index: 0,
        //     numbers_list: this.numbers_list
        // }
        // this.storeTestCache()
        this.cleanCache();
        this.calculateTestResult();
        Render.showElement("#message", true);
        Render.showElement("#pertanyaan", false);
        Render.showElement("#soal", false);
        Render.showModal("resultModal", true);
        Render_test.result((_a = this.score.test_final_score) === null || _a === void 0 ? void 0 : _a.final_result);
        this.uploadTestResult();
    }
    async uploadTestResult() {
        let formData = new FormData();
        formData.append('result_test_id', this.result_test_id);
        formData.append('result', JSON.stringify(this.score));
        let data = await Test_API.submit_result(formData);
    }
    calculateTestResult() {
        let tot_diff_total = this.score.detail.reduce((total, each) => {
            return total + each.tot_diff;
        }, 0);
        let total_ketahanan = this.score.detail.reduce((total, each) => {
            return total + each.stability;
        }, 0);
        let ketahanan = total_ketahanan / (this.score.detail.length - 1);
        let ketahanan_final = ketahanan * 0.3;
        let ketelitian = 100 - (this.score.overall.wrong * 5);
        let ketelitian_final = ketelitian * 0.35;
        let kecepatan = (this.score.overall.total / (40 * this.score.detail.length)) * 100;
        let kecepatan_final = kecepatan * 0.35;
        let final_result = ketahanan_final + ketelitian_final + kecepatan_final;
        this.score["test_final_score"] = {
            ketahanan,
            ketelitian,
            kecepatan,
            kecepatan_final,
            ketelitian_final,
            ketahanan_final,
            final_result
        };
        this.score.overall.tot_diff_total = tot_diff_total;
        this.score.overall.total_ketahanan = total_ketahanan;
    }
    setNewNumber() {
        this.resetTimer();
        if (!(this.question_index >= this.question_total - 1)) {
            this.question_index++;
            this.setQuestion();
            Render_test.render_number(this.numbers_list[this.question_index]);
            Render_test.render_choices(this.numbers_list[this.question_index]);
        }
        else {
            this.stopTest();
        }
    }
    answerCorrect() {
        this.score.detail[this.question_index].correct++;
        this.score.overall.correct++;
    }
    anwerWrongly() {
        this.score.detail[this.question_index].wrong++;
        this.score.overall.wrong++;
    }
    incrementQuestionAnswered() {
        this.score.detail[this.question_index].total++;
        this.score.overall.total++;
    }
    setQuestionStability() {
        if (!(this.question_index > 0))
            return;
        let tot_diff = this.score.detail[this.question_index - 1].total - this.score.detail[this.question_index].total;
        this.score.detail[this.question_index].tot_diff = tot_diff;
        this.score.detail[this.question_index].stability = 100 - (Math.abs(tot_diff) * 5);
    }
    setQuestion() {
        this.current_question = this.shuffleChar(this.numbers_list[this.question_index]).split("");
        Render.Text(".question", this.current_question.join(""));
    }
    storeScore(data) {
        Utility.storage("set", "score", data);
    }
    getScore() {
        return Utility.storage("get", "score") || this.score;
    }
    storeTestCache() {
        Utility.storage("set", "test_cache", this.test_cache);
    }
    getTestCache() {
        return Utility.storage("get", "test_cache") || null;
    }
    cleanCache() {
        Utility.storage("delete", "test_cache");
        Utility.storage("delete", "score");
    }
    shuffleChar(string) {
        var a = string.split(""), n = a.length, rand;
        if (this.index_num_removed.length >= (n / 2))
            this.index_num_removed = [];
        do {
            rand = Math.floor(Math.random() * n);
        } while (this.index_num_removed.includes(rand));
        this.index_num_removed.push(rand);
        a.splice(rand, 1);
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }
    startTimer() {
        this.test_is_started = true;
        this.interval = setInterval(() => {
            --this.current_time;
            this.test_cache = Object.assign(Object.assign({}, this.test_cache), { current_time: this.current_time, question_index: this.question_index });
            this.storeTestCache();
            if (this.current_time <= 0) {
                this.setNewNumber();
            }
            Render.Text("#timer", Utility.convertHMS(this.current_time, "number"));
        }, 1000);
    }
    resetTimer() {
        this.current_time = this.duration;
    }
    generateNumbers(digits, total) {
        let n = [];
        while (n.length < total) {
            let number = [];
            while (number.length < digits) {
                let number_digits = String(Math.floor(Math.random() * 10));
                if (!number.includes(number_digits))
                    number.push(number_digits);
            }
            n.push(number.join(""));
        }
        return n;
    }
}
