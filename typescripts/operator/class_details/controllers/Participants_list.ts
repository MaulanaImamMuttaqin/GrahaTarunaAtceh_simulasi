import { $ } from "../../../utility/doms.js"
import { ReadXLSX } from "../../../utility/xlsx.js"
import { Render } from "../../../utility/render.js"
import { classID } from "../const.js"
import { Participants_list_API } from "../models/Participants_list_API.js"
import { Render_participants_list } from "../views/Render_participants_list.js"

let fileInput = $("#fileUpload") as HTMLInputElement
let read_participants_list_file = new ReadXLSX(fileInput)

export class Participants_list {
    static close_modal() {
        Render.showModal("classParticipantModal", false)
        Participants_list.close_add_participant_modal()
    }

    static open_add_participant_modal = (): void => {
        Render.showElement("#add_new_participant_modal", true)
    }

    static close_add_participant_modal = (): void => {
        Render.showElement("#add_new_participant_modal", false)
        Render.showElement("#import_table", false)
        Render.resetFormValue("#add_participants_form")
        read_participants_list_file.removeFileValue()
    }

    static import_file = (): void => {
        if (!(read_participants_list_file.getData().length > 0)) return alert("silahkan import file excel terlebih dahulu")

        document.querySelector("#import_table")?.classList.remove("hidden")
        console.log(read_participants_list_file.getData())
        Render_participants_list.render_import_file_table(read_participants_list_file.getData())

    }

    static upload_data = async (): Promise<void> => {
        if (!(read_participants_list_file.getData().length > 0)) return alert("silahkan import file excel terlebih dahulu")

        let user_list = read_participants_list_file.getData().map((obj: any) => {
            return {
                user_id: String(obj.user_id),
                name: obj.nama,
                class_id: String(classID)
            }
        })
        let formData = new FormData()
        formData.append('id', classID)
        formData.append('data', JSON.stringify(user_list))
        let data = await Participants_list_API.upload_data(formData)
        console.log(data)
        Render_participants_list.render_import_file_table([])
        Render.showMessage(true, data.message)
        Render.showModal("classParticipantModal", false)
        Render.resetFormValue("#add_participants_form")
    }


    static open_participant_list_modal = async (): Promise<void> => {
        Render.showModal("classParticipantModal", true)
        let data = await Participants_list_API.get_list(classID)
        Render_participants_list.render_table(data.data)
    }

    static delete_participant = async (id: string): Promise<void> => {
        let confirm_delete = confirm("Yakin Menghapus Peserta Ini?");
        if (confirm_delete) {
            let data = await Participants_list_API.delete_participant(id)
            Render.showMessage(true, data.message)
            Render.showModal("classParticipantModal", false)
        }
    }

}
