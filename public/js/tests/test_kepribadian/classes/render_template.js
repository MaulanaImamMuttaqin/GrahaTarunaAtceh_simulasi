import Utility from "../../../utility/Utility.js";
export class Render {
    static RenderNumberBlocksContainer(total_question) {
        const question_number_container = document.querySelector("#question_number_container");
        question_number_container.innerHTML = "";
        for (let i = 0; i < total_question; i++) {
            const div = document.createElement("div");
            div.className = "center px-2 py-1 soal-counter rounded-sm hover:cursor-pointer bg-white text-gray-500";
            question_number_container.append(div);
        }
    }
    static RenderTimer(innerText) {
        const test_timer = document.querySelector("#test_timer");
        test_timer.innerText = Utility.convertHMS(innerText, "verbose");
    }
    static RenderQuestionContainer(question) {
        const options = document.querySelector("#options_soal");
        options.innerHTML = "";
        question.options.forEach((q, i) => {
            const parentDiv = document.createElement("div");
            const buttonDiv = document.createElement("div");
            const button = document.createElement("button");
            const p = document.createElement("p");
            const letter = String.fromCharCode(65 + i);
            button.className = "px-5 py-1 border border-gray-900";
            button.innerText = letter;
            buttonDiv.append(button);
            p.className = "pl-2";
            parentDiv.className = "flex";
            parentDiv.append(buttonDiv);
            parentDiv.append(p);
            options.append(parentDiv);
        });
    }
    static RenderQuestion(question, current, answered) {
        const no_soal = document.querySelectorAll(".nomor_soal");
        const soal = document.querySelector("#soal");
        const options = document.querySelector("#options_soal");
        no_soal.forEach((n) => {
            n.innerHTML = String(current + 1);
        });
        soal.innerText = question.question;
        options.childNodes.forEach((nodes, index) => {
            let buttonNode = nodes.childNodes[0].childNodes[0];
            let optionNode = nodes.childNodes[1];
            optionNode.innerText = question.options[index];
            buttonNode.classList.remove("tkm-filled");
            if (buttonNode.innerText === answered[current]) {
                buttonNode.classList.add("tkm-filled");
            }
        });
    }
    static RerenderBlockNumber(answered, current) {
        const question_number_container = document.querySelector("#question_number_container");
        question_number_container.childNodes.forEach((nodes, index) => {
            let node = nodes;
            let classes = "center px-2 py-1 soal-counter rounded-sm hover:cursor-pointer ";
            let color_status = (answered[index].length > 0 && answered[index] != "F") ? " tkm-filled" : " tkm-not-filled";
            let status = current === index ? " tkm-highlight" : color_status;
            node.className = classes + status;
        });
    }
    static ShowBars(show) {
        const bars = document.querySelectorAll(".bars");
        bars.forEach((b) => {
            if (show) {
                b.classList.remove("hidden");
            }
            else {
                b.classList.add("hidden");
            }
        });
    }
    static ShowNavigationController(show) {
        var _a, _b, _c;
        if (show) {
            (_a = document.querySelector("#question_controller")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
            (_b = document.querySelector("#options_soal")) === null || _b === void 0 ? void 0 : _b.classList.remove("hidden");
            (_c = document.querySelector("#start_test_button")) === null || _c === void 0 ? void 0 : _c.classList.add("hidden");
        }
    }
    static ShowStopTestButton() {
        var _a;
        (_a = document.querySelector("#stop_test_button")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    }
    static RemoveStopTestButton() {
        var _a;
        (_a = document.querySelector("#stop_test_button")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    }
    static HideTestContent() {
        const no_soal = document.querySelectorAll(".nomor_soal");
        const soal = document.querySelector("#soal");
        const options = document.querySelector("#options_soal");
        no_soal.forEach((n) => {
            n.innerHTML = "";
        });
        soal.innerHTML = "";
        options.classList.add("hidden");
    }
}
