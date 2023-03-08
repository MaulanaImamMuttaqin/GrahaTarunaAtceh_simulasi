var _a;
import { $, $$ } from "../../../utility/doms.js";
import { ReadXLSX } from "../../../utility/xlsx.js";
import { Render } from "../../../utility/render.js";
import { TinyMCE } from "../../../utility/tinymce.js";
import Utility from "../../../utility/Utility.js";
import { Test_kepribadian_modals } from "../classes/Test_kepribadian_modal.js";
import { classID } from "../const.js";
import { Test_Kepribadian_API } from "../models/Test_kepribadian_API.js";
import { Render_test_kepribadian } from "../views/Render_test_kepribadian.js";
import { Render_test_list } from "../views/Render_test_list.js";
import { QuestionTestDetail } from "./QuestionsTestDetail.js";
// import { Render_test_kepribadian } from "../views/Render_test_kepribadian.js";
let file_question_upload = $("#fileQuestionKepribadianUpload");
export let read_xlsx_kepribadian_question = new ReadXLSX(file_question_upload);
export const testKepribadian = new Test_kepribadian_modals();
const editor = new TinyMCE('#kepribadianDetailModal .editor_questions_input', true);
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
    QuestionTestDetail.closeModal('kepribadian');
};
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
                q_id: Utility.GenerateID(5),
                options: pilihan,
                answer: d.jawaban
            };
        });
        read_xlsx_kepribadian_question.setNewData(new_data);
        console.log(read_xlsx_kepribadian_question.getNewData());
        Render.showElement("#submit_question_kepribadian_file_button", true);
        Render.Text("#fileQuestionKepribadianUpload_result small", "data berhasil di import");
    }
    else {
        alert("silahkan import file excel terlebih dahulu");
    }
};
Test_kepribadian.add_test_kepribadian = async (form) => {
    let formData = new FormData(form);
    let hours = parseInt(String(formData.get("duration_hours"))) * 3600;
    let seconds = parseInt(String(formData.get("duration_minutes"))) * 60;
    let seconds_total = hours + seconds;
    formData.delete("duration");
    formData.append("duration", String(seconds_total));
    formData.append("class_id", classID);
    formData.append("test_id", testKepribadian.test_id);
    // formData.append("questions_list", JSON.stringify(read_xlsx_kepribadian_question.getNewData()))
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
        formData.append("class_id", classID);
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
    let hours = parseInt(String(formData.get("duration_hours"))) * 3600;
    let seconds = parseInt(String(formData.get("duration_minutes"))) * 60;
    let seconds_total = hours + seconds;
    formData.delete("duration");
    formData.append("duration", String(seconds_total));
    formData.append("test_id", testKepribadian.test_id);
    let data = await Test_Kepribadian_API.update_test(formData);
    Render.showElement("#upload_edited_test_kepribadian", false);
    Render.showModal("kepribadianDetailModal", false);
    Render.showMessage(true, data.message);
};
Test_kepribadian.open_question_editor = (mode) => {
    let test_end_at = Math.round(new Date(testKepribadian.modal_data.test_end_at).getTime() / 1000);
    let test_start_at = Math.round(new Date(testKepribadian.modal_data.test_start_at).getTime() / 1000);
    let now = Math.round(Date.now() / 1000);
    console.log(test_start_at, now, test_end_at);
    let test_is_start = ((test_start_at < now) && (now < test_end_at)) ? true : false;
    if (test_is_start)
        return alert("Anda tidak boleh mengedit test ketika test sedang berjalan");
    testKepribadian.set_result_show_mode(mode);
    Render_test_kepribadian.show_question_editor(mode);
    Render.showElement(`#kepribadianDetailModal #questions_details`, false);
};
Test_kepribadian.close_question_editor = () => {
    Render.showElement("#kepribadianDetailModal #question_editor", false);
    Render.showElement(`#kepribadianDetailModal #questions_details`, false);
};
Test_kepribadian.clear_kepribadian_question_input = () => {
    Render.TextAll("#kepribadianDetailModal .editor_questions_input", "");
};
Test_kepribadian.upload_kepribadian_question = async () => {
    let question = $$("#kepribadianDetailModal #single_question_editor .editor_questions_input");
    let val = {
        q_id: Utility.GenerateID(5),
        options: [],
        options_score: []
    };
    try {
        question.forEach((q, i) => {
            if (i === 0) {
                console.log(q.innerHTML);
                if (!q.hasChildNodes())
                    throw "Pertanyaan Tidak Boleh Kosong";
                val.question = q.innerHTML;
            }
            else if (i === 1) {
                if (q.value == "0" || q.value == "")
                    throw "Nilai tidak boleh kosong atau 0";
                val.max_value = q.value;
            }
            else if (i > 1) {
                if (!q.hasChildNodes())
                    throw "Opsi tidak boleh kosong";
                val.options.push(q.innerHTML);
                let score_el = q.nextElementSibling.getElementsByClassName("options_score")[0];
                if (score_el.value == "")
                    throw "Nilai Opsi tidak boleh kosong atau 0";
                if (parseInt(score_el.value) < 0 || parseInt(score_el.value) > 100)
                    throw "Nilai Opsi Tidak Lebih dari 100 atau kecil dari 0";
                val.options_score.push(score_el.value);
            }
        });
        let formData = new FormData();
        formData.append('test_id', testKepribadian.test_id);
        formData.append('data', JSON.stringify([val]));
        for (const data of formData.values()) {
            console.log(data);
        }
        const data = await Test_Kepribadian_API.upload_question(formData);
        console.log(data);
        $$("#kepribadianDetailModal .editor_questions_input").forEach(el => {
            if (el.tagName.toLocaleLowerCase() === "select")
                return;
            el.innerHTML = "";
        });
        testKepribadian.set_modal_data(data.data);
        Render_test_kepribadian.test_detail(data.data);
        Render.showMessages(`q_add_kepribadian_modal_message`, 'Pertanyaan berhasil di tambah', true);
    }
    catch (error) {
        alert(error);
    }
};
// static add_kepribadian_question_options = (): void => {
//     // question_editor.increment()
//     // Render_test_kepribadian.render_new_options(Utility.numToLetter(question_editor.total_options))
//     Render_test_kepribadian.render_new_options()
//     editor.init()
// }
Test_kepribadian.remove_kepribadian_question_options = () => {
    // question_editor.decrement()
    let el = $("#kepribadianDetailModal .kepribadian_options");
    console.log(el);
    // console.log(el.childNodes[el.childNodes.length-1])
    console.log(el.lastChild);
    el.removeChild(el.lastChild);
};
Test_kepribadian.upload_file_question = async () => {
    let formData = new FormData();
    formData.append('test_id', testKepribadian.test_id);
    formData.append('data', JSON.stringify(read_xlsx_kepribadian_question.getNewData()));
    const data = await Test_Kepribadian_API.upload_question(formData);
    $$("#kepribadianDetailModal .editor_questions_input").forEach(el => {
        if (el.tagName.toLocaleLowerCase() === "select")
            return;
        el.innerHTML = "";
    });
    testKepribadian.set_modal_data(data.data);
    Render_test_kepribadian.test_detail(data.data);
    Render.showMessages(`q_add_kepribadian_modal_message`, 'Pertanyaan berhasil di tambah', true);
    Render.showElement("#fileQuestionKepribadianUpload_result small", false);
    Render.resetFormValue("#kepribadian_question_upload_file");
    Render.showElement("#submit_question_kepribadian_file_button", false);
};
Test_kepribadian.test_is_start = () => {
    let test_end_at = Math.round(new Date(testKepribadian.modal_data.test_end_at).getTime() / 1000);
    let test_start_at = Math.round(new Date(testKepribadian.modal_data.test_start_at).getTime() / 1000);
    let now = Math.round(Date.now() / 1000);
    console.log(test_start_at, now, test_end_at);
    return ((test_start_at < now) && (now < test_end_at)) ? true : false;
};
