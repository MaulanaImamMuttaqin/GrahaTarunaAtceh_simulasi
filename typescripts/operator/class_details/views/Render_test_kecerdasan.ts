import { $ } from "../../../utility/doms.js";
import { _ } from "../../../utility/jml.js";
import { Render } from "../../../utility/render.js";
import Utility from "../../../utility/Utility.js";
import { KecerdasanDetail, KecermatanDetail } from "../types.js";


export class Render_test_kecerdasan {
    static test_detail(data: KecerdasanDetail) {
        Object.entries(data).forEach(([key, value], index) => {
            let el = $(`#kecerdasanDetailModal #detail_kecerdasan_${key}`) as HTMLDivElement
            if (el) {
                if (key === "duration") {
                    el.innerText = Utility.convertToHM(parseInt(value))
                    return;
                }
                el.innerText = value


            }

        })

    }





    static toggle_edit_mode(edit_mode: boolean, data: KecerdasanDetail) {
        if (edit_mode) {
            let { hours, minutes } = Utility.getHourMinutes(parseInt(data.duration))
            $(`#detail_kecerdasan_duration`).innerHTML =
                `<input value='${hours}' name="duration_hours" min="0" id="edit_duration" type='number' class='mr-2 h-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-xs w-[50px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' >
                    <span> : </span> 
                <input value='${minutes}' name="duration_minutes" min="0" max="59" id="edit_duration" type='number' class='ml-2 h-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-xs w-[50px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' >
                `
            $(`#detail_kecerdasan_test_start_at`).innerHTML = `<input name="test_start_at" id="edit_test_start_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${data.test_start_at?.replace(" ", "T")}'>`
            $(`#detail_kecerdasan_test_end_at`).innerHTML = `<input name="test_end_at" id="edit_test_end_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${data.test_end_at?.replace(" ", "T")}'>`
            $("#upload_edited_test_kecerdasan").classList.remove("hidden")
        } else {
            $("#upload_edited_test_kecerdasan").classList.add("hidden")
            Render_test_kecerdasan.test_detail(data)
        }
    }

    static show_question_editor(mode: string): void {
        Render.showElement("#kecerdasanDetailModal #question_editor", true)
        Render.showElement("#kecerdasanDetailModal #batch_question_editor", false)
        Render.showElement("#kecerdasanDetailModal #single_question_editor", false)

        $("#kecerdasanDetailModal #question_editor #single_upload").classList.add("bg-gray-300")
        $("#kecerdasanDetailModal #question_editor #batch_upload").classList.add("bg-gray-300")

        if (mode === "") return;
        $(`#kecerdasanDetailModal #question_editor #${mode}_upload`).classList.remove("bg-gray-300")
        $(`#kecerdasanDetailModal #question_editor #${mode}_upload`).classList.add("bg-gray-100")
        Render.showElement(`#kecerdasanDetailModal #${mode}_question_editor`, true)
    }

    static render_new_options(): void {
        let parent = $(".kecerdasan_options") as HTMLDivElement

        let child =
            _("div", { class: "flex gap-2 items-center" },
                // [
                // _("span", {}, letter),
                _("div", { class: "editor_questions_input kecerdasan_options_input w-full py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg" }, "")
                // ]
            )

        parent.appendChild(child)
    }
}