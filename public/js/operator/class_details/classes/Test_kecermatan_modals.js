import { Modal } from "./Modals.js";
export class Test_kecermatan_modal extends Modal {
    constructor() {
        super(...arguments);
        this.test_is_auto = true;
        this.modal_mode = 0;
    }
    set_modal_mode(mode) {
        this.modal_mode = mode;
    }
    toggle_test_mode() {
        this.test_is_auto = !this.test_is_auto;
    }
}
