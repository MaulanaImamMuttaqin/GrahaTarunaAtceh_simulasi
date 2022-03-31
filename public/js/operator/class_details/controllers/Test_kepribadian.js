var _a;
import { $ } from "../../../utility/doms.js";
import { ReadXLSX } from "../../../utility/read_xlsx.js";
import { Render } from "../../../utility/render.js";
import Utility from "../../../utility/Utility.js";
import { Modal } from "../classes/Modals.js";
import { classID } from "../const.js";
import { Test_Kepribadian_API } from "../models/Test_kepribadian_API.js";
import { Render_test_kepribadian } from "../views/Render_test_kepribadiann.js";
import { Render_test_list } from "../views/Render_test_list.js";
// import { Render_test_kepribadian } from "../views/Render_test_kepribadian.js";
let file_question_upload = $("#fileQuestionKepribadianUpload");
export let read_xlsx_kepribadian_question = new ReadXLSX(file_question_upload);
export const testKepribadian = new Modal();
export class Test_kepribadian {
}
_a = Test_kepribadian;
Test_kepribadian.open_modal = async (test_id, status) => {
    testKepribadian.set_test_id(test_id);
    if (status == 0) {
        Render.showModal("addKepribadianModal", true);
    }
    else {
        let data = await Test_Kepribadian_API.get_test(test_id);
        testKepribadian.set_modal_data(data);
        Render.showModal("kepribadianDetailModal", true);
        Render.Text("#test_id", test_id);
        Render_test_kepribadian.test_detail(data);
    }
};
Test_kepribadian.close_modal = () => {
    testKepribadian.toggle_edit_mode();
    Render.showElement("#upload_edited_test_kepribadian", false);
    Render.showModal("kepribadianDetailModal", false);
};
// static toggle_test_mode = (): void => {
//     Render_test_kepribadian.toggle_test_form()
// }
Test_kepribadian.read_question_file = () => {
    if (read_xlsx_kepribadian_question.getData().length > 0) {
        let data = read_xlsx_kepribadian_question.getData();
        let new_data = data.map((d, i) => {
            let pilihan = [
                d.a,
                d.b,
                d.c,
                d.d,
                d.e
            ];
            delete d.a, d.b, d.c, d.d, d.e;
            return {
                question: d.soal,
                q_id: d.no,
                options: pilihan,
                answer: d.jawaban
            };
        });
        read_xlsx_kepribadian_question.setNewData(new_data);
        console.log(read_xlsx_kepribadian_question.getNewData());
        Render.Text("#fileQuestionKepribadianUpload_result small", "data berhasil di import");
    }
    else {
        alert("silahkan import file excel terlebih dahulu");
    }
};
Test_kepribadian.add_test_kepribadian = async (form) => {
    let formData = new FormData(form);
    let duration = String(formData.get("duration"));
    let seconds = Utility.convertToSecond(duration);
    formData.delete("duration");
    formData.append("duration", String(seconds));
    formData.append("class_id", classID);
    formData.append("test_id", testKepribadian.test_id);
    formData.append("questions_list", JSON.stringify(read_xlsx_kepribadian_question.getNewData()));
    let data = await Test_Kepribadian_API.add_test(formData);
    Render.showMessage(true, data.message);
    Render.resetFormValue("#add_test_kepribadian_form");
    Render_test_list.render_class_test_list(data.html);
    Render.showModal("addKepribadianModal", false);
};
Test_kepribadian.delete_test = async () => {
    let confim_delete = confirm("Yakin Hapus Tes ini");
    if (confim_delete) {
        let id = testKepribadian.test_id;
        let formData = new FormData();
        formData.append("test_id", id);
        let data = await Test_Kepribadian_API.delete_test(formData);
        Render.showMessage(true, data.message);
        Render.showModal("kepribadianDetailModal", false);
        Render_test_list.render_class_test_list(data.html);
    }
};
Test_kepribadian.edit = () => {
    testKepribadian.toggle_edit_mode();
    console.log(testKepribadian.modal_data);
    Render_test_kepribadian.toggle_edit_mode(testKepribadian.edit_mode, testKepribadian.modal_data);
};
Test_kepribadian.upload_edit = async (form) => {
    testKepribadian.toggle_edit_mode();
    let formData = new FormData(form);
    let duration = String(formData.get("duration"));
    let seconds = Utility.convertToSecond(duration);
    formData.delete("duration");
    formData.append("duration", String(seconds));
    formData.append("test_id", testKepribadian.test_id);
    let data = await Test_Kepribadian_API.update_test(formData);
    Render.showElement("#upload_edited_test_kepribadian", false);
    Render.showModal("kepribadianDetailModal", false);
    Render.showMessage(true, data.message);
};
