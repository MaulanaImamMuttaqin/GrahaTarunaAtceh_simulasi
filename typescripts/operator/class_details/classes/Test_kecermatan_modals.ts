import { Modal } from "./Modals.js"

export class Test_kecermatan_modal extends Modal {
    test_is_auto: boolean = true
    modal_mode: number = 0

    set_modal_mode(mode: number): void {
        this.modal_mode = mode
    }



    toggle_test_mode(): void {
        this.test_is_auto = !this.test_is_auto
    }

}
