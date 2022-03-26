import { ReadXLSX } from "../../utility/read_xlsx.js";
import { ApiDetail } from "./classes/ApiDetail.js";
import { KecermatanModal } from "./classes/Modal.js";
import { RenderDetail } from "./classes/RenderDetail.js";
import { classID } from "./const.js";
let fileQuestionUpload = document.querySelector("#fileQuestionUpload");
export let readxlsxQuestion = new ReadXLSX(fileQuestionUpload);
export const testKecermatanModal = new KecermatanModal();
export const toggleTestKecermatanMode = () => {
    testKecermatanModal.toggle_test_mode();
    RenderDetail.ToggleTestKecermatanForm();
};
export const openKecermatanModal = (test_id, status) => {
    RenderDetail.RenderTestID(test_id);
    testKecermatanModal.set_test_id(test_id);
    if (status == 0) {
        RenderDetail.ShowModal("addKecermatanModal", true);
    }
    else {
        ApiDetail.getTestKecermatanDetail(classID, test_id);
        RenderDetail.ShowModal("kecermatanDetailModal", true);
    }
};
export const closeKecermatanDetailModal = () => {
    RenderDetail.ShowModal("kecermatanDetailModal", false);
};
export const ReadQuestionsFile = () => {
    if (readxlsxQuestion.getData().length > 0) {
        let data = readxlsxQuestion.getData();
        let new_data = data.map((d) => d.soal);
        readxlsxQuestion.setNewData(new_data);
        RenderDetail.RenderQuestionsList(new_data.join(", "));
        console.log(new_data);
    }
    else {
        alert("silahkan import file excel terlebih dahulu");
    }
};
export const add_test_kecermatan = (form) => {
    let formData = new FormData(form);
    let el_id = document.querySelector("#test_id");
    formData.append("class_id", classID);
    formData.append("test_id", testKecermatanModal.get_test_id());
    formData.append('auto', String(testKecermatanModal.get_test_mode()));
    ApiDetail.addTestKecermatan(formData);
};
export const add_test_kecermatan_manual = (form) => {
    let formData = new FormData(form);
    formData.append("questions_list", JSON.stringify(readxlsxQuestion.getNewData()));
    formData.append("class_id", classID);
    formData.append("test_id", testKecermatanModal.get_test_id());
    formData.append("digit", "0");
    formData.append('auto', String(testKecermatanModal.get_test_mode()));
    ApiDetail.addTestKecermatan(formData);
};
export const deleteTestKecermatan = () => {
    let confim_delete = confirm("Yakin Hapus Tes ini");
    if (confim_delete) {
        let id = testKecermatanModal.get_test_id();
        let formData = new FormData();
        formData.append("test_id", id);
        ApiDetail.deleteTestKecermatan(formData);
    }
};
