import { tkm_configuration } from "./test_config.js";
import Test from "./classes/Test.js";
let test = new Test(tkm_configuration);
let startButton = document.querySelector("#start_test_button");
let nextButton = document.querySelector("#next");
let prevButton = document.querySelector("#prev");
let numberBlocks = document.querySelector("#question_number_container");
let options;
startButton.onclick = function () {
    var _a;
    (_a = document.querySelector("#question_controller")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    startButton.classList.add("hidden");
    options = test.startTest();
    setEventForNumberBlocks(numberBlocks);
    setEventForQuestionOptions(options);
};
nextButton.onclick = function () {
    options = test.nextQuestion();
    setEventForNumberBlocks(numberBlocks);
    setEventForQuestionOptions(options);
};
prevButton.onclick = function () {
    options = test.prevQuestion();
    setEventForNumberBlocks(numberBlocks);
    setEventForQuestionOptions(options);
};
const setEventForNumberBlocks = (el) => {
    el.childNodes.forEach((nodes, index) => {
        nodes.addEventListener("click", function () {
            options = test.toQuestion(index);
            setEventForQuestionOptions(options);
            setEventForNumberBlocks(numberBlocks);
        });
    });
};
const setEventForQuestionOptions = (el) => {
    el.childNodes.forEach(function (nodes, index) {
        let button = nodes.childNodes[0].childNodes[0];
        let text = nodes.childNodes[1];
        button.onclick = function () {
            test.setAnsweredQuestion(button.innerText);
        };
    });
};
