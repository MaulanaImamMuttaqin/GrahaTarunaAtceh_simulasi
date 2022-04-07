var _a;
import { $, $$ } from "../../../utility/doms.js";
import { Render } from "../../../utility/render.js";
import { TinyMCE } from "../../../utility/tinymce.js";
import Utility from "../../../utility/Utility.js";
import { Test_kecerdasan_modals } from "../classes/Test_kecerdasan_modal.js";
import { classID } from "../const.js";
import { Test_Kecerdasan_API } from "../models/Test_kecerdasan_API.js";
import { Render_test_kecerdasan } from "../views/Render_test_kecerdasan.js";
import { Render_test_list } from "../views/Render_test_list.js";
import { QuestionTestDetail } from "./QuestionsTestDetail.js";
// import { Render_test_kecerdasan} from "../views/Render_test_kecerdasan.js";
// let file_question_upload = $("#fileQuestionKecerdasanUpload") as HTMLInputElement
// export let read_xlsx_kecerdasan_question = new ReadXLSX(file_question_upload);
export const testKecerdasan = new Test_kecerdasan_modals();
const editor = new TinyMCE('#kecerdasanDetailModal .editor_questions_input', true);
// const question_editor = new QuestionEditor();
console.log($(".tox"));
export class Test_kecerdasan {
}
_a = Test_kecerdasan;
Test_kecerdasan.open_modal = async (test_id, status) => {
    testKecerdasan.set_test_id(test_id);
    if (!(status == 1)) {
        Render.showModal("addKecerdasanModal", true);
    }
    else {
        let data = await Test_Kecerdasan_API.get_test(test_id);
        testKecerdasan.set_modal_data(data);
        console.log(data);
        if (Test_kecerdasan.test_is_start())
            Test_kecerdasan.close_question_editor();
        Render.showModal("kecerdasanDetailModal", true);
        Render.Text("#test_id", test_id);
        Render_test_kecerdasan.test_detail(data);
    }
};
Test_kecerdasan.close_modal = () => {
    testKecerdasan.toggle_edit_mode();
    Render.showElement("#upload_edited_test_kecerdasan", false);
    Render.showModal("kecerdasanDetailModal", false);
    QuestionTestDetail.closeModal('kecerdasan');
};
Test_kecerdasan.add_test_kecerdasan = async (form) => {
    let formData = new FormData(form);
    let hours = parseInt(String(formData.get("duration_hours"))) * 3600;
    let seconds = parseInt(String(formData.get("duration_minutes"))) * 60;
    let seconds_total = hours + seconds;
    formData.delete("duration");
    formData.append("duration", String(seconds_total));
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
        formData.append("class_id", classID);
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
    let hours = parseInt(String(formData.get("duration_hours"))) * 3600;
    let seconds = parseInt(String(formData.get("duration_minutes"))) * 60;
    let seconds_total = hours + seconds;
    formData.delete("duration");
    formData.append("duration", String(seconds_total));
    formData.append("test_id", testKecerdasan.test_id);
    let data = await Test_Kecerdasan_API.update_test(formData);
    Render.showElement("#upload_edited_test_kecerdasan", false);
    Render.showModal("kecerdasanDetailModal", false);
    Render.showMessage(true, data.message);
};
Test_kecerdasan.open_question_editor = (mode) => {
    let test_end_at = Math.round(new Date(testKecerdasan.modal_data.test_end_at).getTime() / 1000);
    let test_start_at = Math.round(new Date(testKecerdasan.modal_data.test_start_at).getTime() / 1000);
    let now = Math.round(Date.now() / 1000);
    console.log(test_start_at, now, test_end_at);
    let test_is_start = ((test_start_at < now) && (now < test_end_at)) ? true : false;
    if (test_is_start)
        return alert("Anda tidak boleh mengedit test ketika test sedang berjalan");
    testKecerdasan.set_result_show_mode(mode);
    Render_test_kecerdasan.show_question_editor(mode);
    console.log(testKecerdasan.test_id);
    Render.showElement(`#kecerdasanDetailModal #questions_details`, false);
};
Test_kecerdasan.close_question_editor = () => {
    Render.showElement("#kecerdasanDetailModal #question_editor", false);
    Render.showElement(`#kecerdasanDetailModal #questions_details`, false);
};
Test_kecerdasan.clear_kecerdasan_question_input = () => {
    Render.TextAll("#kecerdasanDetailModal .editor_questions_input", "");
};
Test_kecerdasan.upload_kecerdasan_question = async () => {
    let question = $$("#kecerdasanDetailModal #single_question_editor .editor_questions_input");
    console.log(question);
    let val = {
        q_id: Utility.GenerateID(5),
        options: []
    };
    question.forEach((q, i) => {
        if (i === 0)
            val.question = q.innerHTML;
        else if (i === 1)
            val.answer = q.value;
        else if (i > 1)
            val.options.push(q.innerHTML);
    });
    let formData = new FormData();
    formData.append('test_id', testKecerdasan.test_id);
    formData.append('data', JSON.stringify(val));
    for (const data of formData.values()) {
        console.log(data);
    }
    const data = await Test_Kecerdasan_API.upload_question(formData);
    console.log(data.data);
    $$("#kecerdasanDetailModal .editor_questions_input").forEach(el => {
        if (el.tagName.toLocaleLowerCase() === "select")
            return;
        el.innerHTML = "";
    });
    testKecerdasan.set_modal_data(data.data);
    Render_test_kecerdasan.test_detail(data.data);
    Render.showMessages(`q_add_kecerdasan_modal_message`, 'Pertanyaan berhasil di tambah', true);
};
Test_kecerdasan.add_kecerdasan_question_options = () => {
    // question_editor.increment()
    // Render_test_kecerdasan.render_new_options(Utility.numToLetter(question_editor.total_options))
    Render_test_kecerdasan.render_new_options();
    editor.init();
};
Test_kecerdasan.remove_kecerdasan_question_options = () => {
    // question_editor.decrement()
    let el = $("#kecerdasanDetailModal .kecerdasan_options");
    console.log(el);
    // console.log(el.childNodes[el.childNodes.length-1])
    console.log(el.lastChild);
    el.removeChild(el.lastChild);
};
Test_kecerdasan.test_is_start = () => {
    let test_end_at = Math.round(new Date(testKecerdasan.modal_data.test_end_at).getTime() / 1000);
    let test_start_at = Math.round(new Date(testKecerdasan.modal_data.test_start_at).getTime() / 1000);
    let now = Math.round(Date.now() / 1000);
    console.log(test_start_at, now, test_end_at);
    return ((test_start_at < now) && (now < test_end_at)) ? true : false;
};
