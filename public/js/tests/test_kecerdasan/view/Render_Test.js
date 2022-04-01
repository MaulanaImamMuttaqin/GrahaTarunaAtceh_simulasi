import { $ } from "../../../utility/doms.js";
import { _ } from "../../../utility/jml.js";
import { Test_kecerdasan } from "../controller/Test_kecerdasan.js";
export class Render_Test {
    static RenderNumberBlocksContainer(total_question) {
        const question_number_container = $("#question_number_container");
        question_number_container.innerHTML = "";
        let fragment = document.createDocumentFragment();
        for (let i = 0; i < total_question; i++) {
            let blocks = _("div", {
                class: "center px-2 py-1 soal-counter rounded-sm hover:cursor-pointer bg-white text-gray-500",
                onclick: function () {
                    Test_kecerdasan.to_question(i);
                }
            }, "");
            fragment.appendChild(blocks);
        }
        question_number_container.appendChild(fragment);
    }
    static RenderOptions(question, current_answer) {
        const parent = $("#options_soal");
        parent.innerHTML = "";
        let fragment = document.createDocumentFragment();
        question.options.forEach((o, i) => {
            let letter = String.fromCharCode(65 + i);
            let option = _("div", { class: "flex" }, [
                _("div", { class: "" }, _("button", {
                    class: `px-5 py-1 border border-gray-900 ${current_answer === letter && 'tkm-filled'}`,
                    onclick: function () {
                        Test_kecerdasan.choose_answer(letter, question.q_id);
                    }
                }, letter)),
                _("p", { class: "pl-2" }, o)
            ]);
            fragment.appendChild(option);
        });
        parent.appendChild(fragment);
    }
    static RerenderBlockNumber(answered, current) {
        const question_number_container = $("#question_number_container");
        question_number_container.childNodes.forEach((nodes, index) => {
            console.log("element");
            let node = nodes;
            let classes = "center px-2 py-1 soal-counter rounded-sm hover:cursor-pointer ";
            let color_status = (answered[index].answer.length > 0 && answered[index].answer != "F") ? " tkm-filled" : " tkm-not-filled";
            let status = current === index ? " tkm-highlight" : color_status;
            node.className = classes + status;
        });
    }
    static HighLightOptions(options, answer) {
        const el = $("#options_soal");
        el.childNodes.forEach((nodes, index) => {
            let buttonNode = nodes.childNodes[0].childNodes[0];
            let optionNode = nodes.childNodes[1];
            optionNode.innerText = options[index];
            buttonNode.classList.remove("tkm-filled");
            if (buttonNode.innerText === answer.answer) {
                buttonNode.classList.add("tkm-filled");
            }
        });
    }
}
