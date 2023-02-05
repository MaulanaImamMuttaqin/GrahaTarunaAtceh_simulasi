import { $ } from "../../../utility/doms.js";
import { ReadXLSX } from "../../../utility/xlsx.js";
import { Render } from "../../../utility/render.js";
import Utility from "../../../utility/Utility.js";
import { Test_kecermatan_modal } from "../classes/Test_kecermatan_modals.js";
import { classID } from "../const.js";
import { Test_Kecermatan_API } from "../models/Test_kecermatan_API.js";
import { Render_test_kecermatan } from "../views/Render_test_kecermatan.js";
import { Render_test_list } from "../views/Render_test_list.js";


let file_question_upload = $("#fileQuestionUpload") as HTMLInputElement
export let readxlsxQuestion = new ReadXLSX(file_question_upload);
export const testKecermatanModal = new Test_kecermatan_modal();

export class Test_kecermatan {

    static open_modal = async (test_id: string, status: number): Promise<void> => {
        testKecermatanModal.set_test_id(test_id)
        testKecermatanModal.set_modal_mode(status)
        if (status == 0) {
            Render.showModal("addKecermatanModal", true)
        } else {
            let data = await Test_Kecermatan_API.get_test(test_id)
            console.log(data)
            testKecermatanModal.set_modal_data(data)
            Render.showModal("kecermatanDetailModal", true)
            Render.Text("#test_id", test_id)
            Render_test_kecermatan.test_detail(data)
        }

    }

    static close_modal = (): void => {
        testKecermatanModal.toggle_edit_mode()
        Render.showElement("#upload_edited_test_kecermatan", false)
        Render.showModal("kecermatanDetailModal", false)
    }

    static toggle_test_mode = (): void => {
        testKecermatanModal.toggle_test_mode()
        Render_test_kecermatan.toggle_test_form()
    }

    static read_question_file = (): void => {
        if (readxlsxQuestion.getData().length > 0) {
            let data = readxlsxQuestion.getData()
            let new_data = data.map((d) => d.soal)
            readxlsxQuestion.setNewData(new_data)
            Render.Text("#fileQuestionUpload_result small", new_data.join(", "))
        } else {
            alert("silahkan import file excel terlebih dahulu")
        }
    }

    static add_test_kecermatan = async (form: HTMLFormElement): Promise<void> => {
        let formData = new FormData(form)
        formData.append("class_id", classID)
        formData.append("test_id", testKecermatanModal.test_id)
        formData.append('mode', String(testKecermatanModal.test_is_auto))
        let data = await Test_Kecermatan_API.add_test(formData)
        Render.showMessage(true, data.message)
        Render.resetFormValue("#add_test_kecermatan_form")
        Render_test_list.render_class_test_list(data.html)
        Render.showModal("addKecermatanModal", false)
    }

    static add_test_kecermatan_manual = async (form: HTMLFormElement): Promise<void> => {
        let formData = new FormData(form)
        formData.append("questions_list", JSON.stringify(readxlsxQuestion.getNewData()))
        formData.append("class_id", classID)
        formData.append("test_id", testKecermatanModal.test_id)
        formData.append("digit", "0")
        formData.append('mode', String(testKecermatanModal.test_is_auto))
        let data = await Test_Kecermatan_API.add_test(formData)
        Render.showMessage(true, data.message)
        Render.resetFormValue("#add_test_kecermatan_form_manual")
        Render_test_list.render_class_test_list(data.html)
        Render.showModal("addKecermatanModal", false)
    }

    static delete_test = async (): Promise<void> => {
        let confim_delete = confirm("Yakin Hapus Tes ini");
        if (confim_delete) {
            let id = testKecermatanModal.test_id
            let formData = new FormData()
            formData.append("test_id", id)
            formData.append("class_id", classID)
            let data = await Test_Kecermatan_API.delete_test(formData)
            Render.showMessage(true, data.message)
            Render.showModal("kecermatanDetailModal", false)
            Render_test_list.render_class_test_list(data.html)

        }
    }

    static edit = (): void => {
        testKecermatanModal.toggle_edit_mode()
        console.log(testKecermatanModal.modal_data)
        Render_test_kecermatan.toggle_edit_mode(testKecermatanModal.edit_mode, testKecermatanModal.modal_data)
    }

    static upload_edit = async (form: HTMLFormElement): Promise<void> => {
        testKecermatanModal.toggle_edit_mode()
        let formData = new FormData(form)
        formData.append("test_id", testKecermatanModal.test_id)
        let data = await Test_Kecermatan_API.update_test(formData)
        Render.showElement("#upload_edited_test_kecermatan", false)
        Render.showModal("kecermatanDetailModal", false)
        Render.showMessage(true, data.message)

    }



}