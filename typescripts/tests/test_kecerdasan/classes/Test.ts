import Utility from "../../../utility/Utility.js";
import { Render } from "../../../utility/render.js";
import { question_list_type, answer, Answers, Test_Kecerdasan_Cache, Test_Kecerdasan_Config } from "./Types.js";
import { Render_Test } from "../view/Render_Test.js";
import { Test_Kecerdasan_API } from "../model/Test_Kecerdasan_Api.js";
// import Utility from "./Utility.js";


export class Test_Kecerdasan {
    current_time: number
    duration: number
    result_test_id: string
    total_question: number
    test_cache: Test_Kecerdasan_Cache

    test_id: string

    test_is_started: boolean = false;
    question_index: number = 0;
    interval: number = 0;
    questions_list: Array<question_list_type>;
    answers: Answers = []

    constructor(config: Test_Kecerdasan_Config) {
        this.test_id = config.test_id
        this.current_time = parseInt(config.duration)
        this.duration = parseInt(config.duration)
        this.result_test_id = config.result_test_id
        this.questions_list = Utility.shuffleArray(config.questions_list)
        this.total_question = config.questions_list.length
        this.test_cache = (!this.getTestKecerdasanCache()) ? {
            is_start: false,
            is_finish: false,
            current_time: parseInt(config.duration),
            question_index: 0,
            questions_list: this.questions_list
        } : this.getTestKecerdasanCache()!

        if (!this.getTestKecerdasanCache()) {
            this.storeTestKecerdasanCache()
        }

        Render_Test.RenderNumberBlocksContainer(this.total_question,)
        Render.Text("#test_timer", Utility.convertHMS(this.duration, "verbose"))

        if (this.test_cache.is_start) this.continueTest()
        else {
            this.questions_list.forEach((q: question_list_type) => {
                this.answers.push({
                    q_id: q.q_id,
                    answer: ""
                })
            })
            this.storeAnswers()
        }

    }

    stopTest(): void {
        clearInterval(this.interval)
        Utility.storage("delete", "test_kecerdasan_cache")
    }

    startTest(): void {
        this.test_cache = {
            ...this.test_cache,
            is_start: true,
            is_finish: false
        }
        this.storeTestKecerdasanCache()
        if (!this.test_is_started) this.startTimer()

        this.RerenderContent()
    }

    finishTest(): void {
        clearInterval(this.interval)
        this.cleanCache()
        this.resetTimer()
        this.uploadResult()
        Render.showElement("#question_controller", false)
        Render.showElement("#test_finish_message", true)
        Render.showElement("#stop_test_button", false)
        Render.TextAll(".nomor_soal", "")
        Render.Text("#soal", "")
        Render.showElement("#options_soal", false)
        Render.showElementAll(".bars", true)
        Render.Text("#test_timer", Utility.convertHMS(this.duration, "verbose"))
    }
    continueTest(): void {
        this.question_index = this.test_cache.question_index
        this.answers = this.getAnswers()
        this.questions_list = this.test_cache.questions_list
        this.current_time = this.test_cache.current_time
        Render.Text("#timer", Utility.convertHMS(this.current_time, "number"))
        Render.showElement("#question_controller", true)
        Render.showElement("#options_soal", true)
        Render.showElement("#start_test_button", false)
        this.startTest()
    }

    storeAnswers(): void {
        Utility.storage("set", "answers", this.answers)
    }

    getAnswers(): Answers {
        return Utility.storage("get", "answers") || this.answers
    }

    storeTestKecerdasanCache(): void {
        Utility.storage("set", "test_kecerdasan_cache", this.test_cache)
    }

    getTestKecerdasanCache(): Test_Kecerdasan_Cache | null {
        return Utility.storage("get", "test_kecerdasan_cache") || null
    }
    nextQuestion(): void {
        this.question_index++
        this.RerenderContent()
    }

    prevQuestion(): void {
        this.question_index--
        this.RerenderContent()
    }

    toQuestion(q_n: number): void {
        this.question_index = q_n
        this.RerenderContent()
    }

    setAnswer(answer: string, q_id: string): void {

        this.answers.forEach((ans) => {
            if (ans.q_id === q_id) { this.answers[this.question_index].answer = answer }

        })
    }

    cleanCache(): void {
        Utility.storage("delete", "answers")
        Utility.storage("delete", "test_kecerdasan_cache")
    }
    private RerenderContent() {
        console.log("re rendering", this.answers, this.question_index)
        if (this.question_index < 0) {
            this.question_index++
        } else if (this.question_index > this.total_question - 1) {
            this.question_index--
        }
        if (this.question_index === this.total_question - 1) {
            Render.showElement("#stop_test_button", true)
        } else {
            Render.showElement("#stop_test_button", false)
        }
        Render.html("#soal", this.questions_list[this.question_index].question)
        Render.TextAll(".nomor_soal", String(this.question_index + 1))
        console.log(this.answers, this.question_index)
        Render_Test.RenderOptions(this.questions_list[this.question_index], this.answers[this.question_index].answer)
        Render_Test.RerenderBlockNumber(this.answers, this.question_index)
        Render.showElementAll(".bars", false);
    }

    private startTimer(): void {
        this.test_is_started = true
        this.interval = setInterval(() => {
            --this.current_time;
            // console.log(this.current_time)
            this.test_cache = {
                ...this.test_cache,
                current_time: this.current_time,
                question_index: this.question_index
            }
            this.storeTestKecerdasanCache()
            if (this.current_time <= 0) {
                this.finishTest()
            }
            Render.Text("#test_timer", Utility.convertHMS(this.current_time, "verbose"))

        }, 1000)
    }

    private async uploadResult(): Promise<void> {
        console.log(this.answers)
        let formData = new FormData()
        formData.append('test_id', this.test_id)
        formData.append('result_test_id', this.result_test_id)
        formData.append('result', JSON.stringify(this.answers))
        let data = await Test_Kecerdasan_API.submit_result(formData)
        console.log(data)
    }
    private resetTimer(): void {
        this.current_time = this.duration
    }
}

// export default class Test {
//     duration: number;
//     total_question: number;
//     question_list: { question: string, options: string[] }[];
//     current_time: number;
//     answered: string[];


//     current_question: number = 0;
//     isStart: boolean = false;
//     interval: number = 0;


//     constructor(config: Configuration) {
//         this.current_time = config.duration
//         this.duration = config.duration;
//         this.total_question = config.total_question;
//         this.question_list = config.question_list;
//         this.answered = [...Array(config.total_question)].map(() => "")
//         this.renderTestConfiguration()
//     }

//     startTest(): void {
//         this.isStart = true;
//         this.startTimer();
//         this.RerenderContent()
//     }

//     stopTest(): void {
//         this.stopTimer()
//     }


//     nextQuestion(): void {
//         this.current_question++
//         this.RerenderContent()
//     }

//     prevQuestion(): void {
//         this.current_question--
//         this.RerenderContent()
//     }

//     toQuestion(q_n: number): void {
//         this.current_question = q_n
//         this.RerenderContent()
//     }

//     setAnsweredQuestion(value: string) {
//         this.answered[this.current_question] = value
//     }

//     getAnswer(): string[] {
//         return this.answered
//     }

//     private RerenderContent() {
//         if (this.current_question < 0) {
//             this.current_question++
//         } else if (this.current_question > this.total_question - 1) {
//             this.current_question--
//         }
//         if (this.current_question === this.total_question - 1) {
//             Render.ShowStopTestButton()
//         } else {
//             Render.RemoveStopTestButton()
//         }
//         Render.RenderQuestion(this.question_list[this.current_question], this.current_question, this.answered)
//         Render.RerenderBlockNumber(this.answered, this.current_question)
//         Render.ShowBars(false);
//     }

//     private renderTestConfiguration(): void {
//         Render.RenderNumberBlocksContainer(this.total_question)
//         Render.RenderQuestionContainer(this.question_list[this.current_question])
//         Render.RenderTimer(this.duration)
//     }

//     private startTimer(): void {
//         this.interval = setInterval(() => {
//             --this.current_time;

//             Render.RenderTimer(this.current_time)
//             if(this.current_time<= 0){
//                 this.stopTest()
//             }
//         }, 1000)
//     }
//     private stopTimer(): void {
//         clearInterval(this.interval)
//     }
// }