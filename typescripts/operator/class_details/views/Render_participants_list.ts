import { $ } from "../../../utility/doms.js";
import { _ } from "../../../utility/jml.js";
import { Participants_list } from "../controllers/Participants_list.js";
import { ExcelRows, Participants } from "../types.js";


export class Render_participants_list {
    static render_table(datas: Array<Participants>) {
        let table = $(`#class_participant_list`) as HTMLTableElement;
        table.innerHTML = ""

        let fragment = document.createDocumentFragment();

        datas.forEach((data: Participants, index: number) => {
            let tr =
                _("tr", { class: "bg-white border-b dark:bg-gray-800 dark:border-gray-700" }, [
                    _("td", { class: "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, String(index + 1)),
                    _("td", { class: "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, data.user_id),
                    _("td", { class: "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, data.name),
                    _("td", {
                        class: "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400",
                        onclick: function () {
                            Participants_list.delete_participant(data.user_id)
                        }
                    },
                        _("button", { class: "text-white bg-red-500 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center" },
                            _("i", { class: "fa-solid fa-trash-can" }, "")
                        )
                    )
                ])
            fragment.appendChild(tr)

        })
        table.appendChild(fragment)
    }

    static render_import_file_table(datas: Array<ExcelRows>) {
        let table = $(`#import_table_body`) as HTMLTableElement;
        table.innerHTML = ""

        let fragment = document.createDocumentFragment();

        datas.forEach((data: ExcelRows, index: number) => {
            let tr =
                _("tr", { class: "bg-white border-b dark:bg-gray-800 dark:border-gray-700" }, [
                    _("td", { class: "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, String(index + 1)),
                    _("td", { class: "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, String(data.user_id)),
                    _("td", { class: "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" }, data.nama),
                ])
            fragment.appendChild(tr)

        })
        table.appendChild(fragment)
    }
}