export class Modal {
    constructor() {
        this.test_id = "";
    }
    set_test_id(id) {
        this.test_id = id;
    }
    get_test_id() {
        return this.test_id;
    }
}
export class KecermatanModal extends Modal {
    constructor() {
        super(...arguments);
        this.test_auto = true;
    }
    toggle_test_mode() {
        this.test_auto = !this.test_auto;
    }
    get_test_mode() {
        return this.test_auto;
    }
}
