import { $ } from "../../../utility/doms.js";
import { _ } from "../../../utility/jml.js";
import { KecermatanDetail } from "../types.js";


export class Render_test_kecermatan {
    static test_detail(data: KecermatanDetail) {
        Object.entries(data).forEach(([key, value], index) => {
            let el = $(`#detail_kecermatan_${key}`) as HTMLDivElement
            if (el) {
                if (key === "mode") {
                    el.innerText = value == "1" ? "auto" : "manual"
                    return;
                }
                el.innerText = value
            }

        })
    }

    static toggle_test_form(): void {
        let mode_otomatis_button = $("#mode-otomatis") as HTMLSpanElement
        let mode_manual_button = $("#mode-manual") as HTMLSpanElement
        let add_test_kecermatan_form = $("#add_test_kecermatan_form") as HTMLFormElement
        let add_test_kecermatan_form_manual = $("#add_test_kecermatan_form_manual") as HTMLFormElement

        mode_manual_button.classList.toggle("hidden")
        mode_otomatis_button.classList.toggle("hidden")
        add_test_kecermatan_form.classList.toggle("hidden")
        add_test_kecermatan_form_manual.classList.toggle("hidden")
    }



    static toggle_edit_mode(edit_mode: boolean, data: KecermatanDetail) {
        if (edit_mode) {
            $("#detail_kecermatan_question_total").innerHTML = `<input name="question_total" id="edit_question_total" type='number' class='rounded-lg border border-gray-200 w-16 text-black h-full' value='${data.question_total}'>`
            $(`#detail_kecermatan_duration`).innerHTML = `<input name="duration" id="edit_duration" type='number' class='rounded-lg border border-gray-200 w-16 text-black h-full' value='${data.duration}'>`
            $(`#detail_kecermatan_test_start_at`).innerHTML = `<input name="test_start_at" id="edit_test_start_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${data.test_start_at.replace(" ", "T")}'>`
            $(`#detail_kecermatan_test_end_at`).innerHTML = `<input name="test_end_at" id="edit_test_end_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${data.test_end_at.replace(" ", "T")}'>`
            $("#upload_edited_test_kecermatan").classList.remove("hidden")
        } else {
            $("#upload_edited_test_kecermatan").classList.add("hidden")
            Render_test_kecermatan.test_detail(data)
        }
    }
}