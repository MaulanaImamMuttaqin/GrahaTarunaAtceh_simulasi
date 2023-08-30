export class Modal {
    test_id: string = ""
    modal_data: any = {}
    edit_mode: boolean = false

    set_modal_data(data: any): void {
        this.modal_data = data
    }
    toggle_edit_mode(): void {
        this.edit_mode = !this.edit_mode
    }
    set_test_id(id: string): void {
        this.test_id = id
    }
}

