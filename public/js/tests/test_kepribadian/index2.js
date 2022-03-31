"use strict";
// import { tkm_configuration } from "./test_config.js";
// import Test from "./classes/Test.js"
// import { Render } from "./classes/render_template.js";
// let test = new Test(tkm_configuration)
// let startButton = document.querySelector("#start_test_button") as HTMLButtonElement;
// let stopButton = document.querySelector("#stop_test_button") as HTMLButtonElement;
// let nextButton = document.querySelector("#next") as HTMLButtonElement;
// let prevButton = document.querySelector("#prev") as HTMLButtonElement;
// let numberBlocks = document.querySelector("#question_number_container") as HTMLDivElement;
// let options = document.querySelector("#options_soal") as HTMLDivElement;
// startButton.onclick = function () {
//     Render.ShowNavigationController(true)
//     test.startTest()
//     setEventForNumberBlocks(numberBlocks)
//     setEventForQuestionOptions(options)
// }
// nextButton.onclick = function () {
//     test.nextQuestion()
// }
// prevButton.onclick = function () {
//     test.prevQuestion()
// }
// stopButton.onclick = function () {
//     let confirm_stop = confirm("Yakin Anda ingin mengakiri Test ini?")
//     if (confirm_stop) {
//         test.stopTest()
//         Render.HideTestContent()
//         Render.ShowBars(true);
//         Render.RenderTimer(test.duration)
//         alert(`
//             test telah berakhir
//             Berikut Jawaban Anda
//             ${test.getAnswer()}
//         `)
//     }
// }
// const setEventForNumberBlocks = (el: HTMLDivElement): void => {
//     el.childNodes.forEach((nodes, index) => {
//         nodes.addEventListener("click", function () {
//             test.toQuestion(index)
//         })
//     })
// }
// const setEventForQuestionOptions = (el: HTMLDivElement): void => {
//     el.childNodes.forEach(function (nodes, index) {
//         let button = nodes.childNodes[0].childNodes[0] as HTMLButtonElement;
//         let text = nodes.childNodes[1] as HTMLParagraphElement
//         button.onclick = function () {
//             test.setAnsweredQuestion(button.innerText)
//             Render.RenderQuestion(test.question_list[test.current_question], test.current_question, test.answered)
//         }
//     })
// }
