var _a;
import { $, $$ } from "../../../utility/doms.js";
import { _ } from "../../../utility/jml.js";
import { question_detail_modal } from "../controllers/QuestionsTestDetail.js";
export class Render_question_detail {
    constructor() {
        this.current_question = null;
    }
}
_a = Render_question_detail;
Render_question_detail.open_modal = (data, test_name, index) => {
    let parent_el = $(`#${test_name}DetailModal  #question_details_body ul`);
    parent_el.innerHTML = "";
    let fragment = document.createDocumentFragment();
    data.forEach((dat, index) => {
        let li = _("li", {
            class: "center py-2 px-5 border-b-2 border-gray-300 hover:cursor-pointer",
            onclick: function () {
                Render_question_detail.open_question(dat, test_name, index);
            }
        }, `Soal ${index + 1}`);
        fragment.appendChild(li);
    });
    parent_el.appendChild(fragment);
    _a.open_question(data[index], test_name, index);
};
Render_question_detail.open_question = (data, test_name, index) => {
    question_detail_modal.set_question_highlighted(index);
    let q_list = $$(`#${test_name}DetailModal  #question_details_body ul li`);
    q_list.forEach(el => {
        el.classList.remove("bg-gray-300");
    });
    if (q_list[index])
        q_list[index].classList.add("bg-gray-300");
    $$(`#${test_name}DetailModal #questions_details .editor_questions_input`).forEach((el, i) => {
        if (i === 0)
            el.innerHTML = data.question;
        else if (i === 1) {
            let input_el = el;
            input_el.value = data.answer.toUpperCase();
        }
        else if (i > 1)
            el.innerHTML = data.options[i - 2];
    });
};
