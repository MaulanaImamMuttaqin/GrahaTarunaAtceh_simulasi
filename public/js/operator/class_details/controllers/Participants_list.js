var _a;
import { $ } from "../../../utility/doms.js";
import { ReadXLSX } from "../../../utility/xlsx.js";
import { Render } from "../../../utility/render.js";
import { classID } from "../const.js";
import { Participants_list_API } from "../models/Participants_list_API.js";
import { Render_participants_list } from "../views/Render_participants_list.js";
let fileInput = $("#fileUpload");
let read_participants_list_file = new ReadXLSX(fileInput);
export class Participants_list {
    static close_modal() {
        Render.showModal("classParticipantModal", false);
        Participants_list.close_add_participant_modal();
    }
}
_a = Participants_list;
Participants_list.open_add_participant_modal = () => {
    Render.showElement("#add_new_participant_modal", true);
};
Participants_list.close_add_participant_modal = () => {
    Render.showElement("#add_new_participant_modal", false);
    Render.showElement("#import_table", false);
    Render.resetFormValue("#add_participants_form");
    read_participants_list_file.removeFileValue();
};
Participants_list.import_file = () => {
    var _b;
    if (!(read_participants_list_file.getData().length > 0))
        return alert("silahkan import file excel terlebih dahulu");
    (_b = document.querySelector("#import_table")) === null || _b === void 0 ? void 0 : _b.classList.remove("hidden");
    console.log(read_participants_list_file.getData());
    Render_participants_list.render_import_file_table(read_participants_list_file.getData());
};
Participants_list.upload_data = async () => {
    if (!(read_participants_list_file.getData().length > 0))
        return alert("silahkan import file excel terlebih dahulu");
    let user_list = read_participants_list_file.getData().map((obj) => {
        return {
            user_id: String(obj.user_id),
            name: obj.nama,
            class_id: String(classID)
        };
    });
    let formData = new FormData();
    formData.append('id', classID);
    formData.append('data', JSON.stringify(user_list));
    let data = await Participants_list_API.upload_data(formData);
    console.log(data);
    Render_participants_list.render_import_file_table([]);
    Render.showMessage(true, data.message);
    Render.showModal("classParticipantModal", false);
    Render.resetFormValue("#add_participants_form");
};
Participants_list.open_participant_list_modal = async () => {
    Render.showModal("classParticipantModal", true);
    let data = await Participants_list_API.get_list(classID);
    Render_participants_list.render_table(data.data);
};
Participants_list.delete_participant = async (id) => {
    let confirm_delete = confirm("Yakin Menghapus Peserta Ini?");
    if (confirm_delete) {
        let data = await Participants_list_API.delete_participant(id);
        Render.showMessage(true, data.message);
        Render.showModal("classParticipantModal", false);
    }
};
