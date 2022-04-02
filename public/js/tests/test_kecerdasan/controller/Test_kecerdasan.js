// import { Render_test_kecerdasan } from "../../../operator/class_details/views/Render_test_kecerdasann";
import { Render } from "../../../utility/render.js";
import { Test_Kecerdasan } from "../classes/Test.js";
import { TesKecerdasanConfiguration } from "../const.js";
import { Render_Test } from "../view/Render_Test.js";
// import { tkm_configuration } from "../test_config";
let test_kecerdasan = new Test_Kecerdasan(TesKecerdasanConfiguration);
// console.log(TesKecerdasanConfiguration)
// console.log(test_kecerdasan.questions_list)
export class Test_kecerdasan {
    static start_test() {
        Render.showElement("#question_controller", true);
        Render.showElement("#options_soal", true);
        Render.showElement("#start_test_button", false);
        test_kecerdasan.startTest();
        console.log(test_kecerdasan.questions_list);
    }
    static next_question() {
        test_kecerdasan.nextQuestion();
    }
    static prev_question() {
        test_kecerdasan.prevQuestion();
    }
    static to_question(index) {
        if (!test_kecerdasan.test_is_started)
            return;
        test_kecerdasan.toQuestion(index);
    }
    static stop_test() {
        let confirm_stop = confirm("Yakin Anda ingin mengakiri Test ini?");
        if (!confirm_stop)
            return;
        test_kecerdasan.stopTest();
    }
    static choose_answer(answer, q_id) {
        test_kecerdasan.setAnswer(answer, q_id);
        test_kecerdasan.storeAnswers();
        console.log(test_kecerdasan.answers, test_kecerdasan.question_index);
        Render_Test.HighLightOptions(test_kecerdasan.questions_list[test_kecerdasan.question_index].options, test_kecerdasan.answers[test_kecerdasan.question_index]);
    }
}
