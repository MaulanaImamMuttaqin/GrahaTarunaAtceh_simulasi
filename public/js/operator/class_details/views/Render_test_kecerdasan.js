import { $ } from "../../../utility/doms.js";
import { _ } from "../../../utility/jml.js";
import { Render } from "../../../utility/render.js";
import Utility from "../../../utility/Utility.js";
export class Render_test_kecerdasan {
    static test_detail(data) {
        console.log(data);
        Object.entries(data).forEach(([key, value], index) => {
            let el = $(`#kecerdasanDetailModal #detail_kecerdasan_${key}`);
            if (el) {
                if (key === "duration") {
                    el.innerText = Utility.convertToHM(parseInt(value));
                    return;
                }
                el.innerText = value;
            }
        });
    }
    static toggle_edit_mode(edit_mode, data) {
        var _a, _b;
        if (edit_mode) {
            $(`#detail_kecerdasan_duration`).innerHTML = `<input name="duration" id="edit_duration" type='time' class='rounded-lg border border-gray-200 w-24 text-black h-full' value='${Utility.convertToHM(parseInt(data.duration))}'>`;
            $(`#detail_kecerdasan_test_start_at`).innerHTML = `<input name="test_start_at" id="edit_test_start_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${(_a = data.test_start_at) === null || _a === void 0 ? void 0 : _a.replace(" ", "T")}'>`;
            $(`#detail_kecerdasan_test_end_at`).innerHTML = `<input name="test_end_at" id="edit_test_end_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${(_b = data.test_end_at) === null || _b === void 0 ? void 0 : _b.replace(" ", "T")}'>`;
            $("#upload_edited_test_kecerdasan").classList.remove("hidden");
        }
        else {
            $("#upload_edited_test_kecerdasan").classList.add("hidden");
            Render_test_kecerdasan.test_detail(data);
        }
    }
    static show_question_editor(mode) {
        Render.showElement("#kecerdasanDetailModal #question_editor", true);
        Render.showElement("#kecerdasanDetailModal #batch_question_editor", false);
        Render.showElement("#kecerdasanDetailModal #single_question_editor", false);
        $("#kecerdasanDetailModal #question_editor #single_upload").classList.add("bg-gray-300");
        $("#kecerdasanDetailModal #question_editor #batch_upload").classList.add("bg-gray-300");
        if (mode === "")
            return;
        $(`#kecerdasanDetailModal #question_editor #${mode}_upload`).classList.remove("bg-gray-300");
        $(`#kecerdasanDetailModal #question_editor #${mode}_upload`).classList.add("bg-gray-100");
        Render.showElement(`#kecerdasanDetailModal #${mode}_question_editor`, true);
    }
    static render_new_options() {
        let parent = $(".kecerdasan_options");
        let child = _("div", { class: "flex gap-2 items-center" }, 
        // [
        // _("span", {}, letter),
        _("div", { class: "editor_questions_input kecerdasan_options_input w-full py-2 px-1 border border-gray-300 shadow-lg text-gray-700 rounded-lg" }, "")
        // ]
        );
        parent.appendChild(child);
    }
}
