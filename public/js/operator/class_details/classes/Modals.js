export class Modal {
    constructor() {
        this.test_id = "";
        this.modal_data = {};
        this.edit_mode = false;
    }
    set_modal_data(data) {
        this.modal_data = data;
    }
    toggle_edit_mode() {
        this.edit_mode = !this.edit_mode;
    }
    set_test_id(id) {
        this.test_id = id;
    }
}
