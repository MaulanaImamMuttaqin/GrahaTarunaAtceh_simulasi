import { $, $$ } from "../../../utility/doms.js"
import { _ } from "../../../utility/jml.js"
import { answer, Answers, question_list_type } from "../classes/Types.js";
import { Test_kecerdasan } from "../controller/Test_kecerdasan.js";


export class Render_Test {
    static RenderNumberBlocksContainer(total_question: number): void {
        const question_number_container = $("#question_number_container") as HTMLDivElement;
        question_number_container.innerHTML = ""
        let fragment = document.createDocumentFragment()

        for (let i = 0; i < total_question; i++) {
            let blocks =
                _("div", {
                    class: "center px-2 py-1 soal-counter rounded-sm hover:cursor-pointer bg-white text-gray-500",
                    onclick: function () {
                        Test_kecerdasan.to_question(i)
                    }
                }, "")
            fragment.appendChild(blocks)
        }
        question_number_container.appendChild(fragment)
    }

    static RenderOptions(question: question_list_type, current_answer: string) {
        const parent = $("#options_soal") as HTMLDivElement
        parent.innerHTML = ""

        let fragment = document.createDocumentFragment()
        question.options.forEach((o: string, i: number) => {
            let letter = String.fromCharCode(65 + i)
            let option =
                _("div", {
                    class: "flex hover:cursor-pointer",
                    onclick: function () {
                        Test_kecerdasan.choose_answer(letter, question.q_id)
                    }
                },
                    [
                        _("div", { class: "" },
                            _("button", {
                                class: `px-5 py-1 border border-gray-900 ${current_answer === letter && 'tkm-filled'}`
                            }, letter)
                        ),
                        _("p", { class: "pl-2" }, `/*html*/${o}`)
                    ]
                )
            fragment.appendChild(option)
        })

        parent.appendChild(fragment)
    }
    static RerenderBlockNumber(answered: Answers, current: number): void {

        const question_number_container = $("#question_number_container") as HTMLDivElement;

        question_number_container.childNodes.forEach((nodes, index) => {

            let node = nodes as HTMLDivElement
            let classes = "center px-2 py-1 soal-counter rounded-sm hover:cursor-pointer ";
            let color_status = (answered[index].answer.length > 0 && answered[index].answer != "F") ? " tkm-filled" : " tkm-not-filled";
            let status = current === index ? " tkm-highlight" : color_status;
            node.className = classes + status
        })

    }


    static HighLightOptions(options: Array<string>, answer: answer): void {
        const el = $("#options_soal") as HTMLDivElement
        el.childNodes.forEach((nodes, index) => {
            let buttonNode = nodes.childNodes[0].childNodes[0] as HTMLButtonElement;
            let optionNode = nodes.childNodes[1] as HTMLParagraphElement;
            optionNode.innerHTML = options[index];
            buttonNode.classList.remove("tkm-filled")
            if (buttonNode.innerText === answer.answer) {
                buttonNode.classList.add("tkm-filled")
            }
        })

    }
}