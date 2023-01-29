import { Modal } from "./Modals.js";
export class Test_result_modals extends Modal {
    constructor() {
        super(...arguments);
        this.result_showing_test = "";
        this.user_id = '';
        this.user_result_data = {};
    }
    set_result_show_test(test) {
        this.result_showing_test = test;
    }
    set_user_id(id) {
        this.user_id = id;
    }
    set_user_result_data(data) {
        this.user_result_data = data;
    }
}
