import { classID } from "../const.js";
import { ApiDetail } from "./ApiDetail.js";
import { RenderDetail } from "./RenderDetail.js";
export class Modal {
    constructor() {
        this.test_id = "";
        this.modal_data = {};
    }
    set_modal_data(data) {
        this.modal_data = data;
    }
    set_test_id(id) {
        this.test_id = id;
    }
}
export class TestResultModal extends Modal {
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
export class KecermatanModal extends Modal {
    constructor() {
        super(...arguments);
        this.test_is_auto = true;
        this.edit_mode = false;
        this.modal_mode = 0;
    }
    set_modal_mode(mode) {
        this.modal_mode = mode;
    }
    toggle_edit_mode() {
        this.edit_mode = !this.edit_mode;
    }
    toggle_test_mode() {
        this.test_is_auto = !this.test_is_auto;
    }
    async show_modal() {
        if (this.modal_mode == 0) {
            RenderDetail.ShowModal("addKecermatanModal", true);
        }
        else {
            let data = await ApiDetail.getTestKecermatanDetail(classID, this.test_id);
            this.set_modal_data(data);
            RenderDetail.ShowModal("kecermatanDetailModal", true);
            RenderDetail.RenderTestID(this.test_id);
            RenderDetail.RenderTestKecermatanDetail(this.modal_data);
        }
    }
}
