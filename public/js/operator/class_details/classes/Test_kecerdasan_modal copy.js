import { Modal } from "./Modals.js";
export class Test_kecerdasan_modals extends Modal {
    constructor() {
        super(...arguments);
        this.result_showing_mode = "";
    }
    set_result_show_mode(mode) {
        this.result_showing_mode = mode;
    }
}
