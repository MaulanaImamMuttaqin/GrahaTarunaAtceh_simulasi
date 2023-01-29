import { $, crel } from "../../../utility/doms.js";
import { _ } from "../../../utility/jml.js";
import { openTestModal } from "../test_list.js";
export class RenderDetail {
    static RenderClassParticipantList(el_id, datas) {
        let table = document.querySelector(`#${el_id}`);
        table.innerHTML = "";
        datas.forEach((data, index) => {
            let tr = crel("tr");
            tr.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700";
            Object.entries(data).forEach(([key, values], i) => {
                let td = crel("td");
                td.className = "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400";
                td.innerText = i === 0 ? String(index + 1) : values;
                tr.appendChild(td);
            });
            if (el_id === "class_participant_list") {
                let td = crel("td");
                let button = crel("button");
                let i = crel("i");
                td.className = "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400";
                button.className = "text-white bg-red-500 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center";
                i.className = "fa-solid fa-trash-can";
                button.setAttribute("onclick", `deleteParticipantClass('${data.user_id}')`);
                button.append(i);
                td.append(button);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        });
    }
    static RenderParticipantsTestResult(data) {
        let tbody = $("#participant_test_result_tbody");
        tbody.innerHTML = '';
        let fragment = document.createDocumentFragment();
        data.forEach((d, i) => {
            let tr = _("tr", { class: "bg-white border-b dark:bg-gray-800 dark:border-gray-700" }, [
                _("td", { class: "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, String(i + 1)),
                ...Object.entries(d).map(([key, value], index) => {
                    if (key === "id")
                        return;
                    return _("td", { class: "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, value ? value : "N/A");
                }),
                _("td", { class: "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, _("button", {
                    class: "text-gray-100 font-bold bg-blue-500 hover:bg-blue-400  rounded-lg text-sm px-4 py-2 text-center",
                    onclick: function () {
                        openTestModal(d.id);
                    }
                }, "detail"))
            ]);
            fragment.appendChild(tr);
        });
        tbody.appendChild(fragment);
    }
    static RenderClassTestList(htmlElement) {
        let table = document.querySelector(`#test_list_body`);
        table.innerHTML = htmlElement;
    }
    static ResetFormValue(id) {
        let form_element = document.querySelector("#" + id);
        form_element.reset();
    }
    static ShowModal(id, show) {
        // @ts-ignore
        toggleModal(id, show);
    }
    static ShowClassParticipantModal(show) {
        // @ts-ignore
        toggleModal("classParticipantModal", show);
    }
    static ShowNewTestModal(show) {
        // @ts-ignore
        toggleModal("addNewTest", show);
    }
    static ShowElement(id, show) {
        if (show)
            $("#" + id).classList.remove("hidden");
        else
            $("#" + id).classList.add("hidden");
    }
    static RenderTestID(test_id) {
        let id_el = document.querySelector("#test_id");
        if (id_el)
            id_el.innerHTML = test_id;
    }
    static ToggleTestDetail(id) {
        let test_detail_rows = document.querySelectorAll(".test_detail");
        test_detail_rows.forEach(element => {
            if (!element.classList.contains("hidden")) {
                element.classList.add("hidden");
            }
            else if (element.id === id) {
                element.classList.remove("hidden");
            }
        });
        // test_detail_row.classList.toggle("hidden")
    }
    static CloseKecermatanModal() {
        $("#upload_edited_test_kecermatan").classList.add("hidden");
        RenderDetail.ShowModal("kecermatanDetailModal", false);
    }
    static ToggleTestKecermatanForm() {
        let mode_otomatis_button = document.querySelector("#mode-otomatis");
        let mode_manual_button = document.querySelector("#mode-manual");
        let add_test_kecermatan_form = document.querySelector("#add_test_kecermatan_form");
        let add_test_kecermatan_form_manual = document.querySelector("#add_test_kecermatan_form_manual");
        mode_manual_button.classList.toggle("hidden");
        mode_otomatis_button.classList.toggle("hidden");
        add_test_kecermatan_form.classList.toggle("hidden");
        add_test_kecermatan_form_manual.classList.toggle("hidden");
    }
    static RenderQuestionsList(text) {
        let fileQuestionUpload_result = document.querySelector("#fileQuestionUpload_result small");
        fileQuestionUpload_result.innerText = text;
    }
    static RenderTestKecermatanDetail(data) {
        Object.entries(data).forEach(([key, value], index) => {
            let element = document.querySelector(`#detail_${key}`);
            if (element) {
                if (key === "mode") {
                    element.innerText = value === "1" ? "auto" : "manual";
                    return;
                }
                element.innerText = value;
            }
        });
    }
    static ToggleEditModeTestKecermatan(edit_mode, data) {
        if (edit_mode) {
            $("#detail_question_total").innerHTML = `<input name="question_total" id="edit_question_total" type='number' class='rounded-lg border border-gray-200 w-16 text-black h-full' value='${data.question_total}'>`;
            $(`#detail_duration`).innerHTML = `<input name="duration" id="edit_duration" type='number' class='rounded-lg border border-gray-200 w-16 text-black h-full' value='${data.duration}'>`;
            $(`#detail_test_start_at`).innerHTML = `<input name="test_start_at" id="edit_test_start_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${data.test_start_at.replace(" ", "T")}'>`;
            $(`#detail_test_end_at`).innerHTML = `<input name="test_end_at" id="edit_test_end_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${data.test_end_at.replace(" ", "T")}'>`;
            $("#upload_edited_test_kecermatan").classList.remove("hidden");
        }
        else {
            $("#upload_edited_test_kecermatan").classList.add("hidden");
            RenderDetail.RenderTestKecermatanDetail(data);
        }
    }
    static ShowParticipantTestResult(test) {
        RenderDetail.ShowElement("participant_result_modal", true);
        RenderDetail.ShowElement("test_kecermatan_result", false);
        RenderDetail.ShowElement("test_kecerdasan_result", false);
        RenderDetail.ShowElement("test_kepribadian_result", false);
        $("#kecermatan_button").classList.add("bg-gray-300");
        $("#kecerdasan_button").classList.add("bg-gray-300");
        $("#kepribadian_button").classList.add("bg-gray-300");
        $(`#${test}_button`).classList.remove("bg-gray-300");
        $(`#${test}_button`).classList.add("bg-gray-100");
        RenderDetail.ShowElement(`test_${test}_result`, true);
    }
    static RenderResultData(test_name, data) {
        if (data[test_name]) {
            RenderDetail.ShowElement("test_result_not_available", false);
            RenderDetail.ShowElement(`test_${test_name}_result`, true);
            switch (test_name) {
                case "kecermatan":
                    RenderDetail.RenderKecermatanResultData(data);
                    break;
                case "kecermatan":
                    RenderDetail.RenderKecerdasanResultData(data);
                    break;
                case "kecermatan":
                    RenderDetail.RenderKepribadianResultData(data);
                    break;
            }
        }
        else {
            RenderDetail.ShowElement(`test_${test_name}_result`, false);
            RenderDetail.ShowElement("test_result_not_available", true);
        }
    }
    static RenderKecermatanResultData(data) {
        let data_test = data['kecermatan'];
        $("#participant_result_name").innerText = data.name;
        $("#participant_result_id").innerText = data.user_id;
        $("#participant_result_is_passed").innerText = data_test.test_final_score.final_result >= 60 ? "Lulus" : "Tidak Lulus";
        $("#participant_result_final_result").innerText = data_test.test_final_score.final_result;
        $("#participant_result_final_result").classList.remove("bg-blue-500", "bg-red-500");
        $("#participant_result_final_result").classList.add(data_test.test_final_score.final_result >= 60 ? 'bg-blue-500' : 'bg-red-500');
        $("#participant_result_speed").innerText = data_test.test_final_score.kecepatan;
        $("#participant_result_speed_final").innerText = data_test.test_final_score.kecepatan_final;
        $("#participant_result_accuracy").innerText = data_test.test_final_score.ketelitian;
        $("#participant_result_accuracy_final").innerText = data_test.test_final_score.ketelitian_final;
        $("#participant_result_endurance").innerText = data_test.test_final_score.ketahanan;
        $("#participant_result_endurance_final").innerText = data_test.test_final_score.ketahanan_final;
        $("#participant_result_factor_total").innerText = data_test.test_final_score.ketahanan + data_test.test_final_score.ketelitian + data_test.test_final_score.kecepatan;
        $("#participant_result_final_result_total").innerText = data_test.test_final_score.final_result;
        $("#participant_result_total_answered").innerText = data_test.overall.total;
        $("#participant_result_total_wrong").innerText = data_test.overall.wrong;
        $("#participant_result_total_correct").innerText = data_test.overall.correct;
        RenderDetail.RenderKecermatanResultTable(data_test.detail);
    }
    static RenderKecermatanResultTable(data) {
        let tbody = $("#participant_result_table tbody");
        tbody.innerHTML = '';
        let fragment = document.createDocumentFragment();
        data.forEach((d, i) => {
            console.log(d.question_number);
            let tr = _("tr", { class: "bg-white border-b dark:bg-gray-800 dark:border-gray-700" }, [
                _("td", { class: "py-1 text-center text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" }, String(i + 1)),
                _("td", { class: "py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, String(d.question_number)),
                _("td", { class: "py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, String(d.total)),
                _("td", { class: "py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, String(d.wrong)),
                _("td", { class: "py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, String(d.correct))
            ]);
            fragment.appendChild(tr);
        });
        tbody.appendChild(fragment);
    }
    static RenderKecerdasanResultData(data) {
    }
    static RenderKepribadianResultData(data) {
    }
}
