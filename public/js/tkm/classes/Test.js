import { RenderTemplate } from "./render_template.js";
// import Utility from "./Utility.js";
export default class Test {
    constructor(config) {
        this.current_question = 0;
        this.isStart = false;
        this.interval = 0;
        this.current_time = config.duration;
        this.duration = config.duration;
        this.total_question = config.total_question;
        this.question_list = config.question_list;
        this.answered = [...Array(config.total_question)].map(() => "");
        this.renderTestConfiguration();
    }
    startTest() {
        this.isStart = true;
        this.startTimer();
        return this.RenderQuestion();
    }
    nextQuestion() {
        this.current_question++;
        this.RenderNumberBlocks();
        return this.RenderQuestion();
    }
    prevQuestion() {
        this.current_question--;
        this.RenderNumberBlocks();
        return this.RenderQuestion();
    }
    toQuestion(q_n) {
        this.current_question = q_n;
        this.RenderNumberBlocks();
        return this.RenderQuestion();
    }
    setAnsweredQuestion(value) {
        this.answered[this.current_question] = value;
    }
    RenderQuestion() {
        return RenderTemplate.RenderCurrentQuestionNumber(this.question_list[this.current_question], this.current_question, this.answered[this.current_question]);
    }
    RenderNumberBlocks() {
        RenderTemplate.RenderQuestionNumberBlocks(this.total_question, this.answered, this.current_question);
    }
    renderTestConfiguration() {
        this.RenderNumberBlocks();
        RenderTemplate.RenderTimer(this.duration);
    }
    startTimer() {
        this.interval = setInterval(() => {
            --this.current_time;
            RenderTemplate.RenderTimer(this.current_time);
        }, 1000);
    }
}
