var _a;
import { $$ } from "../../../utility/doms.js";
import { Render } from "../../../utility/render.js";
import { QuestionDetails } from "../classes/QuestionDetails.js";
import { Question_detail_API } from "../models/Question_details_API.js";
import { Render_question_detail } from "../views/Render_question_detail.js";
import { Render_test_kecerdasan } from "../views/Render_test_kecerdasan.js";
import { Render_test_kepribadian } from "../views/Render_test_kepribadian.js";
import { testKecerdasan } from "./Test_kecerdasan.js";
import { testKecermatanModal } from "./Test_kecermatan.js";
import { testKepribadian } from "./Test_kepribadian.js";
export let question_detail_modal = new QuestionDetails();
export class QuestionTestDetail {
}
_a = QuestionTestDetail;
QuestionTestDetail.openModal = (test_name) => {
    question_detail_modal.set_test_name(test_name);
    let test_end_at = 0;
    let test_start_at = 0;
    let now = Math.round(Date.now() / 1000);
    switch (test_name) {
        case "kecerdasan":
            console.log(testKecerdasan.modal_data);
            question_detail_modal.set_test_id(testKecerdasan.test_id);
            question_detail_modal.set_modal_data(JSON.parse(testKecerdasan.modal_data.questions_list));
            test_end_at = Math.round(new Date(testKecerdasan.modal_data.test_end_at).getTime() / 1000);
            test_start_at = Math.round(new Date(testKecerdasan.modal_data.test_start_at).getTime() / 1000);
            break;
        case "kepribadian":
            question_detail_modal.set_test_id(testKepribadian.test_id);
            question_detail_modal.set_modal_data(JSON.parse(testKepribadian.modal_data.questions_list));
            test_end_at = Math.round(new Date(testKecermatanModal.modal_data.test_end_at).getTime() / 1000);
            test_start_at = Math.round(new Date(testKecermatanModal.modal_data.test_start_at).getTime() / 1000);
            break;
        default:
            return;
    }
    let test_is_start = ((test_start_at < now) && (now < test_end_at)) ? true : false;
    if (test_is_start)
        question_detail_modal.set_allow_edit(false);
    else
        question_detail_modal.set_allow_edit(true);
    if (question_detail_modal.modal_data.length === 0)
        return alert('tidak ada soal yang akan ditampilkan');
    Render.showElement(`#${test_name}DetailModal #questions_details`, true);
    Render.showElement(`#${test_name}DetailModal #question_editor`, false);
    console.log(question_detail_modal.index);
    Render_question_detail.open_modal(question_detail_modal.modal_data, test_name, question_detail_modal.index);
};
QuestionTestDetail.closeModal = (test_name) => {
    Render.showElement(`#${test_name}DetailModal #questions_details`, false);
};
QuestionTestDetail.update_question = async () => {
    console.log(question_detail_modal.allow_edit);
    if (!question_detail_modal.allow_edit)
        QuestionTestDetail.openModal(question_detail_modal.test_name);
    if (!question_detail_modal.allow_edit)
        return alert("Anda tidak boleh mengedit test ketika test sedang berlansung");
    let q_i = $$(`#${question_detail_modal.test_name}DetailModal #questions_details .editor_questions_input`);
    let question_input = Array.from(q_i);
    let old_data = question_detail_modal.modal_data[question_detail_modal.index];
    let new_data = {
        q_id: old_data.q_id,
        options: question_input.slice(2).map(q => {
            return q.innerHTML;
        }),
        question: question_input[0].innerHTML,
        answer: question_input[1].value,
    };
    let json_new_data = JSON.stringify(new_data);
    let json_old_data = JSON.stringify(old_data);
    if (json_new_data === json_old_data)
        return alert("tidak ada perubahan data dari sebelumnya");
    question_detail_modal.modal_data[question_detail_modal.index] = new_data;
    let formData = new FormData();
    formData.append('test_id', question_detail_modal.test_id);
    formData.append('data', JSON.stringify(question_detail_modal.modal_data));
    formData.append('test_name', question_detail_modal.test_name);
    const data = await Question_detail_API.update_data(formData);
    console.log(data);
    if (question_detail_modal.test_name === "kecerdasan")
        testKecerdasan.modal_data.questions_list = data.data.questions_list;
    else
        testKepribadian.modal_data.questions_list = data.data.questions_list;
    Render.showMessages(`${question_detail_modal.test_name}_q_list_modal_message`, data.message, true);
    QuestionTestDetail.openModal(question_detail_modal.test_name);
};
QuestionTestDetail.delete_question = async () => {
    let confirm_delete = confirm("Yakin hapus pertanyaan ini?");
    if (!confirm_delete)
        return;
    question_detail_modal.modal_data.splice(question_detail_modal.index, 1);
    let formData = new FormData();
    formData.append('test_id', question_detail_modal.test_id);
    formData.append('data', JSON.stringify(question_detail_modal.modal_data));
    formData.append('test_name', question_detail_modal.test_name);
    const data = await Question_detail_API.update_data(formData);
    console.log(data.data);
    if (question_detail_modal.test_name === "kecerdasan") {
        testKecerdasan.modal_data = Object.assign(Object.assign({}, testKecerdasan.modal_data), data.data);
        Render_test_kecerdasan.test_detail(data.data);
    }
    else {
        testKepribadian.modal_data = Object.assign(Object.assign({}, testKepribadian.modal_data), data.data);
        Render_test_kepribadian.test_detail(data.data);
    }
    Render.showMessages(`${question_detail_modal.test_name}_q_list_modal_message`, 'Pertanyaan berhasil di hapus', true);
    question_detail_modal.set_question_highlighted(question_detail_modal.index - 1);
    QuestionTestDetail.openModal(question_detail_modal.test_name);
};
