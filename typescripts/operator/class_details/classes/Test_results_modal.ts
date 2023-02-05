import { Modal } from "./Modals.js"

export class Test_result_modals extends Modal {
    result_showing_test: string = ""
    user_id: string = ''
    user_result_data: any = {}
    set_result_show_test(test: string): void {
        this.result_showing_test = test
    }
    set_user_id(id: string): void {
        this.user_id = id
    }
    set_user_result_data(data: any): void {
        this.user_result_data = data
    }
}