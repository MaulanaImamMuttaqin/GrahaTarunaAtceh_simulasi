import { $ } from "../../../utility/doms.js";
import { Render } from "../../../utility/render.js";
import Utility from "../../../utility/Utility.js";
export class Render_test_kepribadian {
    static test_detail(data) {
        Object.entries(data).forEach(([key, value], index) => {
            let el = $(`#detail_kepribadian_${key}`);
            if (el) {
                if (key === "duration") {
                    el.innerText = Utility.convertToHM(parseInt(value));
                    return;
                }
                if (key === "sorted") {
                    el.innerText = value === "0" ? "Teracak" : "Berurut";
                    return;
                }
                el.innerText = value;
            }
        });
    }
    // static toggle_test_form(): void {
    //     let mode_otomatis_button = $("#mode-otomatis") as HTMLSpanElement
    //     let mode_manual_button = $("#mode-manual") as HTMLSpanElement
    //     let add_test_kepribadian_form = $("#add_test_kepribadian_form") as HTMLFormElement
    //     let add_test_kepribadian_form_manual = $("#add_test_kepribadian_form_manual") as HTMLFormElement
    //     mode_manual_button.classList.toggle("hidden")
    //     mode_otomatis_button.classList.toggle("hidden")
    //     add_test_kepribadian_form.classList.toggle("hidden")
    //     add_test_kepribadian_form_manual.classList.toggle("hidden")
    // }
    static toggle_edit_mode(edit_mode, data) {
        var _a, _b;
        if (edit_mode) {
            let { hours, minutes } = Utility.getHourMinutes(parseInt(data.duration));
            $(`#detail_kepribadian_duration`).innerHTML =
                `<input value='${hours}' name="duration_hours" min="0" id="edit_duration" type='number' class='mr-2 h-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-xs w-[50px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' >
                    <span> : </span> 
                <input value='${minutes}' name="duration_minutes" min="0" max="59" id="edit_duration" type='number' class='ml-2 h-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-xs w-[50px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' >
                `;
            $(`#detail_kepribadian_test_start_at`).innerHTML = `<input name="test_start_at" id="edit_test_start_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${(_a = data.test_start_at) === null || _a === void 0 ? void 0 : _a.replace(" ", "T")}'>`;
            $(`#detail_kepribadian_test_end_at`).innerHTML = `<input name="test_end_at" id="edit_test_end_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${(_b = data.test_end_at) === null || _b === void 0 ? void 0 : _b.replace(" ", "T")}'>`;
            $("#upload_edited_test_kepribadian").classList.remove("hidden");
            $(`#detail_kepribadian_sorted`).innerHTML = `<select name="sorted" class="rounded-lg border border-gray-200 w-20 text-xs px-0 pl-2 text-black h-8" >
                                                            <option value="true" ${data.sorted === "1" && 'selected="selected"'}>Berurut</option>
                                                            <option value="false" ${data.sorted === "0" && 'selected="selected"'}>Teracak</option>
                                                        </select>`;
        }
        else {
            $("#upload_edited_test_kepribadian").classList.add("hidden");
            Render_test_kepribadian.test_detail(data);
        }
    }
    static show_question_editor(mode) {
        Render.showElement("#kepribadianDetailModal #question_editor", true);
        Render.showElement("#kepribadianDetailModal #file_question_editor", false);
        Render.showElement("#kepribadianDetailModal #single_question_editor", false);
        $("#kepribadianDetailModal #question_editor #single_upload").classList.add("bg-gray-300");
        $("#kepribadianDetailModal #question_editor #file_upload").classList.add("bg-gray-300");
        if (mode === "")
            return;
        $(`#kepribadianDetailModal #question_editor #${mode}_upload`).classList.remove("bg-gray-300");
        $(`#kepribadianDetailModal #question_editor #${mode}_upload`).classList.add("bg-gray-100");
        Render.showElement(`#kepribadianDetailModal #${mode}_question_editor`, true);
    }
}
