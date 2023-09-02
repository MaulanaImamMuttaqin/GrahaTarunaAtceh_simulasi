import { $ } from "../../../utility/doms.js";
import { Render } from "../../../utility/render.js";
import { Test } from "../classes/Test.js";
import { TestConfiguration } from "../const.js";
let test = new Test(TestConfiguration);
export class Test_Controller {
}
Test_Controller.start_test = () => {
    test.startTest();
    Render.showElement("#soal", true);
    Render.showElement("#start-test", false);
    Render.showElement("#pertanyaan", true);
};
Test_Controller.choose_answer = (val) => {
    let current_number = test.current_question;
    let current_input_el = $(`[value = '${val}']`);
    if (!current_number.includes(val))
        test.answerCorrect();
    else
        test.anwerWrongly();
    test.incrementQuestionAnswered();
    test.setQuestionStability();
    test.storeScore(test.score);
    current_input_el.checked = false;
    if (test.score.detail[test.question_index].total >= 40) {
        test.setNewNumber();
        return;
    }
    test.setQuestion();
};
