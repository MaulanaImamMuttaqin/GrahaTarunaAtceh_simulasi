import { $ } from "../../../utility/doms.js"
import { _ } from "../../../utility/jml.js";
import { Render } from "../../../utility/render.js";
import Utility from "../../../utility/Utility.js";
import { Test_Controller } from "../controller/Test_Controller.js";

export class Render_test {
    static render_number = (number: string): void => {
        let parent = $("#soal") as HTMLDivElement;
        parent.innerHTML = ""
        let fragment = document.createDocumentFragment();
        number.split("").forEach((n: string, i: number) => {
            let div =
                _("div", { class: "numbers-container" },
                    [
                        _("h1", { class: "numbers" }, n),
                        _("h1", {}, String((i + 10).toString(36)))
                    ]
                )
            fragment.appendChild(div)
        })

        parent.appendChild(fragment)
    }

    static render_choices = (number: string): void => {
        let parent = $("#choices") as HTMLDivElement;
        parent.innerHTML = ""
        let fragment = document.createDocumentFragment();
        number.split("").forEach((n: string, i: number) => {
            // let div =
            //     _("div", { class: "flex flex-col text-center font-semibold" },
            //         [
            //             _("p", { class: "" }, String((i + 10).toString(36))),
            //             _("input", {
            //                 class: "questionChoices hover:cursor-pointer hover:bg-blue-300 focus:ring-0",
            //                 type: "radio",
            //                 id: "answer",
            //                 name: "answer",
            //                 value: n,
            //                 onclick: function () {
            //                     Test_Controller.choose_answer(n)
            //                 }
            //             }, "")
            //         ]
            //     )
            let div =
                _("div", {},
                    [
                        _("label", {
                            class: "flex w-[80px] overflow-hidden bg-blue-400 hover:bg-blue-500 text-white transition-colors hover:cursor-pointer duration-400 rounded-lg border border-gray-300 mr-2",
                            for: "o_" + n
                        },
                            [
                                _("span", { class: "w-1/6 border-right border-white bg-blue-500 center px-3" }, String((i + 10).toString(36))),
                                _("span", { class: "w-5/6 text-center my-1 center" }, n)
                            ]
                        ),
                        _("input", {
                            class: "questionChoices hidden",
                            type: "radio",
                            id: "o_" + n,
                            name: "answer",
                            value: n,
                            onclick: function () {
                                Test_Controller.choose_answer(n)
                            }
                        }, "")
                    ])
            fragment.appendChild(div)
        })

        parent.appendChild(fragment)
    }

    static result(result: number): void {
        let roundedResults = Utility.roundNumber(result, 2)
        Render.Text("#final_result", `${roundedResults}`)
    }
}