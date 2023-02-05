import { Render } from "../../../utility/render.js"
import Utility from "../../../utility/Utility.js"
import { classID } from "../const.js"
import { Test_list_API } from "../models/Test_list_API.js"
import { Render_test_list } from "../views/Render_test_list.js"


export class Test_List {

    static open_new_test_form_modal = (): void => {
        Render.showModal("addNewTest", true)
    }

    static toggle_detail_dropdown = (id: number): void => {
        Render_test_list.toggle_test_detail(`test_detail_drop_down_${id}`)
    }

    static delete_test = async (test_id: string): Promise<void> => {
        let confirm_delete = confirm("Yakin Menghapus Test Ini?");
        if (confirm_delete) {
            let data = await Test_list_API.delete_tes(test_id)
            Render.showMessage(true, data.message)
            Render_test_list.render_class_test_list(data.html)
        }
    }

    static add_new_test = async (form: HTMLFormElement): Promise<void> => {
        let uid = Utility.GenerateID(9);
        let formData = new FormData(form)
        formData.append("test_id", uid)
        formData.append("class_id", classID)

        let data = await Test_list_API.add_test(formData)

        if (data.list.length !== 0) Render_test_list.render_class_test_list(data.html)
        Render.showMessage(true, data.message)
        Render.resetFormValue("#add_new_test_form")
        Render.showModal("addNewTest", false)
    }

    static copy_test_id_to_clipboard = (id: string): void => {
        Utility.copyToClipboard(id)
        Render.Text("#tooltip_copy_id_button", "berhasil di salin")
    }

    static id_copied = (): void => {
        Render.Text("#tooltip_copy_id_button", "Salin ID Tes")
    }

}