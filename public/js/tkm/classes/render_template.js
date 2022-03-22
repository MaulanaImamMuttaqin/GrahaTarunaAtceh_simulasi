import Utility from "./Utility.js";
export class RenderTemplate {
    static RenderQuestionNumberBlocks(total_question, value, current) {
        const question_number_container = document.querySelector("#question_number_container");
        question_number_container.innerHTML = "";
        for (let i = 0; i < total_question; i++) {
            const div = document.createElement("div");
            let classname = "center px-2 py-1 soal-counter rounded-sm text-white hover:cursor-pointer";
            let colorStatus = (value[i].length > 0 && value[i] != "F") ? " bg-green-800" : " bg-white text-gray-500";
            div.className = (i === current) ? classname + " bg-yellow-300" : classname + colorStatus;
            question_number_container.append(div);
        }
    }
    static RenderTimer(innerText) {
        const test_timer = document.querySelector("#test_timer");
        test_timer.innerText = Utility.convertHMS(innerText);
    }
    static RenderCurrentQuestionNumber(question, question_no, answer) {
        const no_soal = document.querySelectorAll(".nomor_soal");
        const soal = document.querySelector("#soal");
        const options = document.querySelector("#options_soal");
        options.innerHTML = "";
        no_soal.forEach((n) => {
            n.innerHTML = String(question_no + 1);
        });
        soal.innerText = question.question;
        question.options.forEach((q, i) => {
            const parentDiv = document.createElement("div");
            const buttonDiv = document.createElement("div");
            const button = document.createElement("button");
            const p = document.createElement("p");
            const letter = String.fromCharCode(65 + i);
            button.className = "px-5 py-1 border border-gray-900 bg-gray-300 focus:bg-green-800";
            button.innerText = letter;
            buttonDiv.append(button);
            p.className = "pl-2";
            p.innerText = q;
            parentDiv.className = "flex";
            parentDiv.append(buttonDiv);
            parentDiv.append(p);
            options.append(parentDiv);
        });
        return options;
    }
}
