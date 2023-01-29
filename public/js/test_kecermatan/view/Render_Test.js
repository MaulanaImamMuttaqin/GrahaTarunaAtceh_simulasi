import { $ } from "../../utility/doms.js";
import { _ } from "../../utility/jml.js";
import { Render } from "../../utility/render.js";
import Utility from "../../utility/Utility.js";
import { Test_Controller } from "../controller/Test_Controller.js";
export class Render_test {
    static result(result) {
        let roundedResults = Utility.roundNumber(result, 2);
        Render.Text("#final_result", `${roundedResults}`);
    }
}

Render_test.render_number = (number) => {
    let parent = $("#soal");
    parent.innerHTML = "";
    let fragment = document.createDocumentFragment();
    number.split("").forEach((n, i) => {
        let div = _("div", { class: "numbers-container" }, [
            _("h1", { class: "numbers" }, n),
            _("h1", {}, String((i + 10).toString(36)))
        ]);
        fragment.appendChild(div);
    });
    parent.appendChild(fragment);
};

Render_test.render_choices = (number) => {
    let parent = $("#choices");
    parent.innerHTML = "";
    let fragment = document.createDocumentFragment();
    number.split("").forEach((n, i) => {
        let div = _("div", { class: "flex flex-col text-center font-semibold" }, [
            _("input", {
                class: "questionChoices hover:cursor-pointer hover:bg-blue-301 focus:ring-0",
                type: "radio",
                id: "answer",
                name: "answer",
                value: n,
                onclick: function () {
                    Test_Controller.choose_answer(n);
                }
            }, ""),
            _("p", { class: "" }, String((i + 10).toString(36)))
        ]);
        fragment.appendChild(div);
    });
    parent.appendChild(fragment);
};
