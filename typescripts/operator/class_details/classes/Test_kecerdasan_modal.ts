import { Modal } from "./Modals.js"

export class Test_kecerdasan_modals extends Modal {
    result_showing_mode: string = ""

    set_result_show_mode(mode: string): void {
        this.result_showing_mode = mode
    }
}