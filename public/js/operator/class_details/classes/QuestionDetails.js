import { Modal } from "./Modals.js";
export class QuestionDetails extends Modal {
    constructor() {
        super(...arguments);
        this.test_name = "";
        this.index = 0;
        this.allow_edit = true;
    }
    set_test_name(test_name) {
        this.test_name = test_name;
    }
    set_question_highlighted(index) {
        this.index = index;
    }
    set_allow_edit(allow) {
        this.allow_edit = allow;
    }
}
