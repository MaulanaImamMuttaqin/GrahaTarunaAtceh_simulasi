var _a;
import { Render } from "../../../utility/render.js";
import Utility from "../../../utility/Utility.js";
import { Modal } from "../classes/Modals.js";
import { classID } from "../const.js";
import { Test_Kecerdasan_API } from "../models/Test_kecerdasan_API.js";
import { Render_test_kecerdasan } from "../views/Render_test_kecerdasan.js";
import { Render_test_list } from "../views/Render_test_list.js";
// import { Render_test_kecerdasan} from "../views/Render_test_kecerdasan.js";
// let file_question_upload = $("#fileQuestionKecerdasanUpload") as HTMLInputElement
// export let read_xlsx_kecerdasan_question = new ReadXLSX(file_question_upload);
export const testKecerdasan = new Modal();
export class Test_kecerdasan {
}
_a = Test_kecerdasan;
Test_kecerdasan.open_modal = async (test_id, status) => {
    console.log(status);
    testKecerdasan.set_test_id(test_id);
    if (!(status == 1)) {
        Render.showModal("addKecerdasanModal", true);
    }
    else {
        console.log("detail");
        let data = await Test_Kecerdasan_API.get_test(test_id);
        testKecerdasan.set_modal_data(data);
        Render.showModal("kecerdasanDetailModal", true);
        Render.Text("#test_id", test_id);
        Render_test_kecerdasan.test_detail(data);
    }
};
Test_kecerdasan.close_modal = () => {
    testKecerdasan.toggle_edit_mode();
    Render.showElement("#upload_edited_test_kecerdasan", false);
    Render.showModal("kecerdasanDetailModal", false);
};
// static toggle_test_mode = (): void => {
//     Render_test_kecerdasan.toggle_test_form()
// }
// static read_question_file = (): void => {
//     if (read_xlsx_kecerdasan_question.getData().length > 0) {
//         let data = read_xlsx_kecerdasan_question.getData()
//         let new_data: Array<questionTypes> = data.map((d, i) => {
//             let pilihan = [
//                 d.a,
//                 d.b,
//                 d.c,
//                 d.d,
//                 d.e
//             ]
//             delete d.a, d.b, d.c, d.d, d.e
//             return {
//                 question: d.soal,
//                 q_id: d.no,
//                 options: pilihan,
//                 answer: d.jawaban
//             }
//         })
//         read_xlsx_kecerdasan_question.setNewData(new_data)
//         console.log(read_xlsx_kecerdasan_question.getNewData())
//         Render.Text("#fileQuestionKecerdasanUpload_result small", "data berhasil di import")
//     } else {
//         alert("silahkan import file excel terlebih dahulu")
//     }
// }
Test_kecerdasan.add_test_kecerdasan = async (form) => {
    let formData = new FormData(form);
    let duration = String(formData.get("duration"));
    let seconds = Utility.convertToSecond(duration);
    formData.delete("duration");
    formData.append("duration", String(seconds));
    formData.append("class_id", classID);
    formData.append("test_id", testKecerdasan.test_id);
    // formData.append("questions_list", JSON.stringify(read_xlsx_kecerdasan_question.getNewData()))
    for (const data of formData.values()) {
        console.log(data);
    }
    let data = await Test_Kecerdasan_API.add_test(formData);
    Render.showMessage(true, data.message);
    Render.resetFormValue("#add_test_kecerdasan_form");
    Render_test_list.render_class_test_list(data.html);
    Render.showModal("addKecerdasanModal", false);
};
Test_kecerdasan.delete_test = async () => {
    let confim_delete = confirm("Yakin Hapus Tes ini");
    if (confim_delete) {
        let id = testKecerdasan.test_id;
        let formData = new FormData();
        formData.append("test_id", id);
        let data = await Test_Kecerdasan_API.delete_test(formData);
        Render.showMessage(true, data.message);
        Render.showModal("kecerdasanDetailModal", false);
        Render_test_list.render_class_test_list(data.html);
    }
};
Test_kecerdasan.edit = () => {
    testKecerdasan.toggle_edit_mode();
    Render_test_kecerdasan.toggle_edit_mode(testKecerdasan.edit_mode, testKecerdasan.modal_data);
};
Test_kecerdasan.upload_edit = async (form) => {
    testKecerdasan.toggle_edit_mode();
    let formData = new FormData(form);
    let duration = String(formData.get("duration"));
    let seconds = Utility.convertToSecond(duration);
    formData.delete("duration");
    formData.append("duration", String(seconds));
    formData.append("test_id", testKecerdasan.test_id);
    let data = await Test_Kecerdasan_API.update_test(formData);
    Render.showElement("#upload_edited_test_kecerdasan", false);
    Render.showModal("kecerdasanDetailModal", false);
    Render.showMessage(true, data.message);
};
