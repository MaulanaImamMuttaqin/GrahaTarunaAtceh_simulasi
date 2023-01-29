import { ReadXLSX } from "../../utility/read_xlsx.js";
import { ApiDetail } from "./classes/ApiDetail.js";
import { RenderDetail } from "./classes/RenderDetail.js";
import { classID } from "./const.js";
let fileInput = document.querySelector("#fileUpload");
let readxlsx = new ReadXLSX(fileInput);
export const openAddParticipantModal = () => {
    var _a;
    (_a = document.querySelector("#add_new_participant_modal")) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
};
export const closeAddParticipantModal = () => {
    var _a, _b;
    (_a = document.querySelector("#add_new_participant_modal")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    (_b = document.querySelector("#import_table")) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
    RenderDetail.RenderClassParticipantList("import_table_body", []);
    readxlsx.removeFileValue();
};
export const ImportFile = () => {
    var _a;
    if (readxlsx.getData().length > 0) {
        (_a = document.querySelector("#import_table")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        RenderDetail.RenderClassParticipantList("import_table_body", readxlsx.getData());
    }
    else {
        alert("silahkan import file excel terlebih dahulu");
    }
};
export const uploadData = () => {
    let data = readxlsx.getData().map((obj) => {
        return {
            user_id: String(obj.user_id),
            name: obj.nama,
            class_id: String(classID)
        };
    });
    console.log(data);
    let formData = new FormData();
    formData.append('id', classID);
    formData.append('data', JSON.stringify(data));
    ApiDetail.UploadParticipantClass(classID, formData);
};
export const openParticipantsListModal = () => {
    RenderDetail.ShowClassParticipantModal(true);
    ApiDetail.getParticipantClassList(classID);
};
export const deleteParticipantClass = (id) => {
    let confirm_delete = confirm("Yakin Menghapus Peserta Ini?");
    if (confirm_delete) {
        ApiDetail.deleteParticipantClass(id, classID);
    }
};
