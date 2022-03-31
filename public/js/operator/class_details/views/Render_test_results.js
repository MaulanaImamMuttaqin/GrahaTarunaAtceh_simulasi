import { $ } from "../../../utility/doms.js";
import { _ } from "../../../utility/jml.js";
import { Render } from "../../../utility/render.js";
import { Test_results } from "../controllers/Test_results.js";
export class Render_test_results {
    static results_table(data) {
        const start = performance.now();
        if (!data)
            return;
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
                        Test_results.open_test_modal(d.id);
                        // openTestModal(d.id)
                    }
                }, "detail"))
            ]);
            fragment.appendChild(tr);
        });
        tbody.appendChild(fragment);
        const duration = performance.now() - start;
    }
    static show_participant_test_result(test) {
        Render.showElement("#participant_result_modal", true);
        Render.showElement("#test_kecermatan_result", false);
        Render.showElement("#test_kecerdasan_result", false);
        Render.showElement("#test_kepribadian_result", false);
        $("#kecermatan_button").classList.add("bg-gray-300");
        $("#kecerdasan_button").classList.add("bg-gray-300");
        $("#kepribadian_button").classList.add("bg-gray-300");
        if (test === "")
            return;
        $(`#${test}_button`).classList.remove("bg-gray-300");
        $(`#${test}_button`).classList.add("bg-gray-100");
        Render.showElement(`#test_${test}_result`, true);
    }
    static render_result_data(test_name, data) {
        if (data[test_name]) {
            Render.showElement("#test_result_not_available", false);
            Render.showElement(`#test_${test_name}_result`, true);
            switch (test_name) {
                case "kecermatan":
                    Render_test_results.render_kecermatan_result_data(data);
                    break;
                case "kecerdasan":
                    Render_test_results.render_kecerdasan_result_data(data);
                    break;
                case "kepribadian":
                    Render_test_results.render_kepribadian_result_data(data);
                    break;
            }
        }
        else {
            Render.showElement(`#test_${test_name}_result`, false);
            Render.showElement("#test_result_not_available", true);
        }
    }
    static render_kecermatan_result_data(data) {
        let data_test = data['kecermatan'];
        Render.TextAll(".participant_result_name", data.name);
        Render.TextAll(".participant_result_id", data.user_id);
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
        Render_test_results.render_kecermatan_result_table(data_test.detail);
    }
    static render_kecermatan_result_table(data) {
        let tbody = $("#participant_result_table tbody");
        tbody.innerHTML = '';
        let fragment = document.createDocumentFragment();
        data.forEach((d, i) => {
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
    static render_kecerdasan_result_data(data) {
    }
    static render_kepribadian_result_data(data) {
        let data_test = data["kepribadian"];
        Render.TextAll(".participant_result_name", data.name);
        Render.TextAll(".participant_result_id", data.user_id);
        $("#participant_kepribadian_final_result").innerText = data_test.final_score;
        $("#participant_kepribadian_final_result").classList.remove("bg-blue-500", "bg-red-500");
        $("#participant_kepribadian_final_result").classList.add(data_test.final_scor >= 60 ? 'bg-blue-500' : 'bg-red-500');
        $("#participant_kepribadian_result_is_passed").innerText = data_test.final_score >= 60 ? "Lulus" : "Tidak Lulus";
        $("#participant_kepribadian_result_correct").innerText = data_test.overall.correct;
        $("#participant_kepribadian_result_wrong").innerText = data_test.overall.wrong;
        $("#participant_kepribadian_result_total").innerText = data_test.overall.total;
        $("#participant_kepribadian_result_final").innerText = data_test.final_score;
        Render_test_results.render_kepribadian_result_table(data_test.detail);
    }
    static render_kepribadian_result_table(data) {
        let tbody = $("#participant_kepribadian_result_table tbody");
        tbody.innerHTML = '';
        let fragment = document.createDocumentFragment();
        data.forEach((d, i) => {
            let tr = _("tr", { class: "bg-white border-b dark:bg-gray-800 dark:border-gray-700" }, [
                _("td", { class: "py-1 text-center text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" }, String(i + 1)),
                _("td", { class: "py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, String(d.question)),
                _("td", { class: "py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, String(d.answer).toUpperCase()),
                _("td", { class: "py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, String(d.answered).toUpperCase()),
            ]);
            fragment.appendChild(tr);
        });
        tbody.appendChild(fragment);
    }
}
