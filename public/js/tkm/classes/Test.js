import { Render } from "./render_template.js";
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
        this.RerenderContent();
    }
    stopTest() {
        this.stopTimer();
    }
    nextQuestion() {
        this.current_question++;
        this.RerenderContent();
    }
    prevQuestion() {
        this.current_question--;
        this.RerenderContent();
    }
    toQuestion(q_n) {
        this.current_question = q_n;
        this.RerenderContent();
    }
    setAnsweredQuestion(value) {
        this.answered[this.current_question] = value;
    }
    getAnswer() {
        return this.answered;
    }
    RerenderContent() {
        if (this.current_question < 0) {
            this.current_question++;
        }
        else if (this.current_question > this.total_question - 1) {
            this.current_question--;
        }
        if (this.current_question === this.total_question - 1) {
            Render.ShowStopTestButton();
        }
        else {
            Render.RemoveStopTestButton();
        }
        Render.RenderQuestion(this.question_list[this.current_question], this.current_question, this.answered);
        Render.RerenderBlockNumber(this.answered, this.current_question);
        Render.ShowBars(false);
    }
    renderTestConfiguration() {
        Render.RenderNumberBlocksContainer(this.total_question);
        Render.RenderQuestionContainer(this.question_list[this.current_question]);
        Render.RenderTimer(this.duration);
    }
    startTimer() {
        this.interval = setInterval(() => {
            --this.current_time;
            Render.RenderTimer(this.current_time);
        }, 1000);
    }
    stopTimer() {
        clearInterval(this.interval);
    }
}
