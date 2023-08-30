import Utility from "../../../utility/Utility.js";
import { question_list_type } from "./Types.js";

export class Render {

    static RenderNumberBlocksContainer(total_question: number): void {
        const question_number_container = document.querySelector("#question_number_container") as HTMLDivElement;
        question_number_container.innerHTML = ""
        for (let i = 0; i < total_question; i++) {
            const div = document.createElement("div");
            div.className = "center px-2 py-1 soal-counter rounded-sm hover:cursor-pointer bg-white text-gray-500";
            question_number_container.append(div)
        }
    }

    static RenderTimer(innerText: number): void {
        const test_timer = document.querySelector("#test_timer") as HTMLDivElement
        test_timer.innerText = Utility.convertHMS(innerText, "verbose")
    }

    static RenderQuestionContainer(question: question_list_type): void {
        const options = document.querySelector("#options_soal") as HTMLDivElement;
        options.innerHTML = ""
        question.options.forEach((q, i) => {
            const parentDiv = document.createElement("div");
            const buttonDiv = document.createElement("div");
            const button = document.createElement("button");
            const p = document.createElement("p");
            const letter = String.fromCharCode(65 + i)
            button.className = "px-5 py-1 border border-gray-900"
            button.innerText = letter

            buttonDiv.append(button)

            p.className = "pl-2"

            parentDiv.className = "flex"
            parentDiv.append(buttonDiv)
            parentDiv.append(p)
            options.append(parentDiv)
        })

    }

    static RenderQuestion(question: question_list_type, current: number, answered: string[]): void {

        const no_soal = document.querySelectorAll(".nomor_soal");
        const soal = document.querySelector("#soal") as HTMLDivElement;
        const options = document.querySelector("#options_soal") as HTMLDivElement;

        no_soal.forEach((n) => {
            n.innerHTML = String(current + 1)
        })
        soal.innerText = question.question;
        options.childNodes.forEach((nodes, index) => {
            let buttonNode = nodes.childNodes[0].childNodes[0] as HTMLButtonElement;
            let optionNode = nodes.childNodes[1] as HTMLParagraphElement;
            optionNode.innerText = question.options[index];
            buttonNode.classList.remove("tkm-filled")
            if (buttonNode.innerText === answered[current]) {
                buttonNode.classList.add("tkm-filled")
            }
        })
    }

    static RerenderBlockNumber(answered: string[], current: number): void {

        const question_number_container = document.querySelector("#question_number_container") as HTMLDivElement;
        question_number_container.childNodes.forEach((nodes, index) => {

            let node = nodes as HTMLDivElement
            let classes = "center px-2 py-1 soal-counter rounded-sm hover:cursor-pointer ";
            let color_status = (answered[index].length > 0 && answered[index] != "F") ? " tkm-filled" : " tkm-not-filled";
            let status = current === index ? " tkm-highlight" : color_status;
            node.className = classes + status
        })
    }

    static ShowBars(show: boolean) {
        const bars = document.querySelectorAll(".bars")

        bars.forEach((b) => {
            if (show) {
                b.classList.remove("hidden")
            } else {
                b.classList.add("hidden")
            }
        })
    }

    static ShowNavigationController(show: boolean) {
        if (show) {
            document.querySelector("#question_controller")?.classList.remove("hidden")
            document.querySelector("#options_soal")?.classList.remove("hidden")
            document.querySelector("#start_test_button")?.classList.add("hidden")
        }
    }

    static ShowStopTestButton() {
        document.querySelector("#stop_test_button")?.classList.remove("hidden")
    }

    static RemoveStopTestButton() {
        document.querySelector("#stop_test_button")?.classList.add("hidden")
    }

    static HideTestContent() {
        const no_soal = document.querySelectorAll(".nomor_soal");
        const soal = document.querySelector("#soal") as HTMLDivElement;
        const options = document.querySelector("#options_soal") as HTMLDivElement;

        no_soal.forEach((n) => {
            n.innerHTML = ""
        })
        soal.innerHTML = ""
        options.classList.add("hidden")
    }


}