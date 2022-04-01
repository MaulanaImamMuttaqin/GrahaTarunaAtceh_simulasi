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
// import { Render_test_kecerdasan} from "../views/Render_test_kecerdasan.js";
// let file_question_upload = $("#fileQuestionKecerdasanUpload") as HTMLInputElement
// export let read_xlsx_kecerdasan_question = new ReadXLSX(file_question_upload);
export const testKecerdasan = new Test_kecerdasan_modals();
const editor = new TinyMCE('.editor_questions_input', true);
// const question_editor = new QuestionEditor();
console.log($(".tox"));
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
Test_kecerdasan.open_question_editor = (mode) => {
    testKecerdasan.set_result_show_mode(mode);
    Render_test_kecerdasan.show_question_editor(mode);
};
Test_kecerdasan.close_question_editor = () => {
    Render.showElement("#question_editor", false);
};
Test_kecerdasan.clear_kecerdasan_question_input = () => {
    Render.TextAll(".editor_questions_input", "");
};
Test_kecerdasan.upload_kecerdasan_question = () => {
    let question = $$(".editor_questions_input");
    let val = {
        q_id: Utility.GenerateID(5),
        options: []
    };
    question.forEach((q, i) => {
        if (i === 0)
            val.question = q.innerHTML;
        if (i === 1)
            val.answer = q.innerHTML;
        if (i > 1)
            val.options.push(q.innerHTML);
    });
    console.log(val);
    Render.TextAll(".editor_questions_input", "");
};
Test_kecerdasan.add_kecerdasan_question_options = () => {
    // question_editor.increment()
    // Render_test_kecerdasan.render_new_options(Utility.numToLetter(question_editor.total_options))
    Render_test_kecerdasan.render_new_options();
    editor.init();
};
Test_kecerdasan.remove_kecerdasan_question_options = () => {
    // question_editor.decrement()
    let el = $(".kecerdasan_options");
    console.log(el);
    // console.log(el.childNodes[el.childNodes.length-1])
    console.log(el.lastChild);
    el.removeChild(el.lastChild);
};