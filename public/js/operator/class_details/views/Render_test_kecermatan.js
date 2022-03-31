import { $ } from "../../../utility/doms.js";
export class Render_test_kecermatan {
    static test_detail(data) {
        Object.entries(data).forEach(([key, value], index) => {
            let el = $(`#detail_kecermatan_${key}`);
            if (el) {
                if (key === "mode") {
                    el.innerText = value == "1" ? "auto" : "manual";
                    return;
                }
                el.innerText = value;
            }
        });
    }
    static toggle_test_form() {
        let mode_otomatis_button = $("#mode-otomatis");
        let mode_manual_button = $("#mode-manual");
        let add_test_kecermatan_form = $("#add_test_kecermatan_form");
        let add_test_kecermatan_form_manual = $("#add_test_kecermatan_form_manual");
        mode_manual_button.classList.toggle("hidden");
        mode_otomatis_button.classList.toggle("hidden");
        add_test_kecermatan_form.classList.toggle("hidden");
        add_test_kecermatan_form_manual.classList.toggle("hidden");
    }
    static toggle_edit_mode(edit_mode, data) {
        if (edit_mode) {
            $("#detail_kecermatan_question_total").innerHTML = `<input name="question_total" id="edit_question_total" type='number' class='rounded-lg border border-gray-200 w-16 text-black h-full' value='${data.question_total}'>`;
            $(`#detail_kecermatan_duration`).innerHTML = `<input name="duration" id="edit_duration" type='number' class='rounded-lg border border-gray-200 w-16 text-black h-full' value='${data.duration}'>`;
            $(`#detail_kecermatan_test_start_at`).innerHTML = `<input name="test_start_at" id="edit_test_start_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${data.test_start_at.replace(" ", "T")}'>`;
            $(`#detail_kecermatan_test_end_at`).innerHTML = `<input name="test_end_at" id="edit_test_end_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${data.test_end_at.replace(" ", "T")}'>`;
            $("#upload_edited_test_kecermatan").classList.remove("hidden");
        }
        else {
            $("#upload_edited_test_kecermatan").classList.add("hidden");
            Render_test_kecermatan.test_detail(data);
        }
    }
}
