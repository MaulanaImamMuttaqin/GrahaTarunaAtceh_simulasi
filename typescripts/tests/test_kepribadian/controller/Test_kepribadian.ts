// import { Render_test_kepribadian } from "../../../operator/class_details/views/Render_test_kepribadiann";
import { Render } from "../../../utility/render.js";
import Utility from "../../../utility/Utility.js";
import { Test_Kepribadian } from "../classes/Test.js";
import { TesKepribadianConfiguration } from "../const.js";
import { Render_Test } from "../view/Render_Test.js";
// import { tkm_configuration } from "../test_config";



let test_kepribadian = new Test_Kepribadian(TesKepribadianConfiguration)

console.log(TesKepribadianConfiguration)
// console.log(test_kepribadian.questions_list)
export class Test_kepribadian {
    static start_test(): void {
        Render.showElement("#question_controller", true)
        Render.showElement("#options_soal", true)
        Render.showElement("#start_test_button", false)
        test_kepribadian.startTest()
        console.log(test_kepribadian.questions_list)
    }

    static next_question(): void {
        test_kepribadian.nextQuestion()
    }
    static prev_question(): void {
        test_kepribadian.prevQuestion()
    }
    static to_question(index: number) {
        if (!test_kepribadian.test_is_started) return;
        test_kepribadian.toQuestion(index)
    }
    static stop_test(): void {
        let confirm_stop = confirm("Yakin Anda ingin mengakiri Test ini?")

        if (!confirm_stop) return;
        test_kepribadian.stopTest()

    }

    static choose_answer(answer: string, q_id: string): void {
        test_kepribadian.setAnswer(answer, q_id)
        test_kepribadian.storeAnswers()
        console.log(test_kepribadian.answers, test_kepribadian.question_index)
        Render_Test.HighLightOptions(test_kepribadian.questions_list[test_kepribadian.question_index].options, test_kepribadian.answers[test_kepribadian.question_index])
    }

}