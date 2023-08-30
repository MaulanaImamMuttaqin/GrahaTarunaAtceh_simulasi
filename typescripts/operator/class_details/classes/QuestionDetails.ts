import { Modal } from "./Modals.js"

export class QuestionDetails extends Modal {
    test_name: string = ""
    index: number = 0
    allow_edit: boolean = true;
    set_test_name(test_name: string) {
        this.test_name = test_name
    }
    set_question_highlighted(index: number) {
        this.index = index
    }
    set_allow_edit(allow: boolean): void {
        this.allow_edit = allow
    }
}