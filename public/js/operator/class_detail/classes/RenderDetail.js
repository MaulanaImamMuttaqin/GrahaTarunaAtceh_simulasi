export class RenderDetail {
    static RenderClassParticipantList(el_id, datas) {
        let table = document.querySelector(`#${el_id}`);
        table.innerHTML = "";
        datas.forEach((data, index) => {
            let tr = document.createElement("tr");
            tr.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700";
            Object.entries(data).forEach(([key, values], i) => {
                let td = document.createElement("td");
                td.className = "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400";
                td.innerText = i === 0 ? String(index + 1) : values;
                tr.appendChild(td);
            });
            if (el_id === "class_participant_list") {
                let td = document.createElement("td");
                let button = document.createElement("button");
                let i = document.createElement("i");
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
}
