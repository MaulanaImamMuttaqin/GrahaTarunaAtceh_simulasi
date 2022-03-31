import { $ } from "../../../utility/doms.js";
import Utility from "../../../utility/Utility.js";
export class Render_test_kecerdasan {
    static test_detail(data) {
        Object.entries(data).forEach(([key, value], index) => {
            let el = $(`#detail_kecerdasan_${key}`);
            if (el) {
                if (key === "duration") {
                    el.innerText = Utility.convertToHM(parseInt(value));
                    return;
                }
                el.innerText = value;
            }
        });
    }
    // static toggle_test_form(): void {
    //     let mode_otomatis_button = $("#mode-otomatis") as HTMLSpanElement
    //     let mode_manual_button = $("#mode-manual") as HTMLSpanElement
    //     let add_test_kecermatan_form = $("#add_test_kecermatan_form") as HTMLFormElement
    //     let add_test_kecermatan_form_manual = $("#add_test_kecermatan_form_manual") as HTMLFormElement
    //     mode_manual_button.classList.toggle("hidden")
    //     mode_otomatis_button.classList.toggle("hidden")
    //     add_test_kecermatan_form.classList.toggle("hidden")
    //     add_test_kecermatan_form_manual.classList.toggle("hidden")
    // }
    static toggle_edit_mode(edit_mode, data) {
        if (edit_mode) {
            $(`#detail_kecerdasan_duration`).innerHTML = `<input name="duration" id="edit_duration" type='time' class='rounded-lg border border-gray-200 w-24 text-black h-full' value='${Utility.convertToHM(parseInt(data.duration))}'>`;
            $(`#detail_kecerdasan_test_start_at`).innerHTML = `<input name="test_start_at" id="edit_test_start_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${data.test_start_at.replace(" ", "T")}'>`;
            $(`#detail_kecerdasan_test_end_at`).innerHTML = `<input name="test_end_at" id="edit_test_end_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${data.test_end_at.replace(" ", "T")}'>`;
            $("#upload_edited_test_kecerdasan").classList.remove("hidden");
        }
        else {
            $("#upload_edited_test_kecerdasan").classList.add("hidden");
            Render_test_kecerdasan.test_detail(data);
        }
    }
}
