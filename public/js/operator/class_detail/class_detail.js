import { ReadXLSX } from "../../utility/read_xlsx.js";
import Utility from "../../utility/Utility.js";
import { ApiDetail } from "./classes/ApiDetail.js";
import { RenderDetail } from "./classes/RenderDetail.js";
import { toggleTestKecermatanMode } from "./test_kecermatan.js";
let fileInput = document.querySelector("#fileUpload");
let readxlsx = new ReadXLSX(fileInput);
let new_test_form = document.querySelector("#add_new_test_form");
let add_test_kecermatan_form = document.querySelector("#add_test_kecermatan_form");
let classElement = document.querySelector("#class_id");
let classID = classElement.innerText;
add_test_kecermatan_form.onsubmit = () => {
    let formData = new FormData(add_test_kecermatan_form);
    for (const data of formData.values()) {
        console.log(data);
    }
};
new_test_form.onsubmit = () => {
    let uid = Utility.GenerateID(9);
    let formData = new FormData(new_test_form);
    formData.append("test_id", uid);
    formData.append("class_id", classID);
    ApiDetail.AddNewTest(formData);
};
const openParticipantsListModal = () => {
    RenderDetail.ShowClassParticipantModal(true);
    ApiDetail.getParticipantClassList(classID);
};
const openAddParticipantModal = () => {
    var _a;
    (_a = document.querySelector("#add_new_participant_modal")) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
};
const closeAddParticipantModal = () => {
    var _a, _b;
    (_a = document.querySelector("#add_new_participant_modal")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    (_b = document.querySelector("#import_table")) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
    RenderDetail.RenderClassParticipantList("import_table_body", []);
    readxlsx.removeFileValue();
};
const ImportFile = () => {
    var _a;
    if (readxlsx.getData().length > 0) {
        (_a = document.querySelector("#import_table")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        RenderDetail.RenderClassParticipantList("import_table_body", readxlsx.getData());
    }
    else {
        alert("silahkan import file excel terlebih dahulu");
    }
};
const uploadData = () => {
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
const deleteParticipantClass = (id) => {
    let confirm_delete = confirm("Yakin Menghapus Peserta Ini?");
    if (confirm_delete) {
        ApiDetail.deleteParticipantClass(id, classID);
    }
};
const openAddNewTestModal = () => {
    RenderDetail.ShowNewTestModal(true);
};
const toggleTestDetailDropdown = (id) => {
    RenderDetail.ToggleTestDetail(`test_detail_drop_down_${id}`);
};
const deleteTest = (test_id) => {
    let confirm_delete = confirm("Yakin Menghapus Peserta Ini?");
    if (confirm_delete) {
        ApiDetail.deleteClassTest(test_id, classID);
    }
};
const manageTest = (modalID, test_id) => {
    switch (modalID) {
        case 1:
            RenderDetail.ShowTestModal(true);
            break;
        case 2:
            alert("kecerdasan");
            break;
        case 3:
            alert("kepribadian");
            break;
        default:
            return;
    }
};
window.toggleTestKecermatanMode = toggleTestKecermatanMode;
window.manageTest = manageTest;
window.deleteTest = deleteTest;
window.toggleTestDetailDropdown = toggleTestDetailDropdown;
window.openAddNewTestModal = openAddNewTestModal;
window.deleteParticipantClass = deleteParticipantClass;
window.openParticipantsListModal = openParticipantsListModal;
window.uploadData = uploadData;
window.ImportFile = ImportFile;
window.closeAddParticipantModal = closeAddParticipantModal;
window.openAddParticipantModal = openAddParticipantModal;
