import Utility from "../../utility/Utility.js";
import { ApiDetail } from "./classes/ApiDetail.js";
import { TestResultModal } from "./classes/Modal.js";
import { RenderDetail } from "./classes/RenderDetail.js";
import { classID } from "./const.js";
const test_result_modal = new TestResultModal();
export const openAddNewTestModal = () => {
    RenderDetail.ShowNewTestModal(true);
};
export const toggleTestDetailDropdown = (id) => {
    RenderDetail.ToggleTestDetail(`test_detail_drop_down_${id}`);
};
export const deleteTest = (test_id) => {
    let confirm_delete = confirm("Yakin Menghapus Peserta Ini?");
    if (confirm_delete) {
        ApiDetail.deleteClassTest(test_id, classID);
    }
};
export const add_new_test = (form) => {
    let uid = Utility.GenerateID(9);
    let formData = new FormData(form);
    formData.append("test_id", uid);
    formData.append("class_id", classID);
    ApiDetail.AddNewTest(formData);
};
export const openParticipantsTestResult = async (id) => {
    RenderDetail.ShowModal("test_result_modal", true);
    let participants_list = await ApiDetail.getParticipantsTestList(classID, id);
    test_result_modal.set_modal_data(participants_list);
    test_result_modal.set_test_id(id);
    RenderDetail.RenderParticipantsTestResult(participants_list);
};
export const closeParticipantsListTestResult = () => {
    RenderDetail.ShowModal("test_result_modal", false);
    RenderDetail.ShowElement("participant_result_modal", false);
};
export const closeParticipantTestResult = () => {
    RenderDetail.ShowElement("participant_result_modal", false);
};
export const openTestModal = async (id) => {
    RenderDetail.ShowParticipantTestResult("kecermatan");
    let test_result = await ApiDetail.getParticipantTestResult(id);
    test_result_modal.set_user_result_data(test_result);
    RenderDetail.RenderResultData("kecermatan", test_result);
};
export const openTestResultDetail = (test_name) => {
    RenderDetail.ShowParticipantTestResult(test_name);
    RenderDetail.RenderResultData(test_name, test_result_modal.user_result_data);
};
