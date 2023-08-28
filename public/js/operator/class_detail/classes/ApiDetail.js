import { RenderClass } from "../../class/classes/RenderClass.js";
import { RenderDetail } from "./RenderDetail.js";
export class ApiDetail {
    static async UploadParticipantClass(id, formData) {
        const response = await fetch(base_url+'/operatorApi/add_new_participant_class/', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        RenderDetail.RenderClassParticipantList("import_table_body", []);
        RenderClass.showMessage(true, data.message);
        RenderDetail.ShowClassParticipantModal(false);
    }
    static async getParticipantClassList(id) {
        const response = await fetch(base_url+`/operatorApi/get_participant_class_list/${id}`, {
            method: 'GET',
        });
        const data = await response.json();
        RenderDetail.RenderClassParticipantList("class_participant_list", data.data);
    }
    static async deleteParticipantClass(user_id, class_id) {
        const response = await fetch(base_url+`/operatorApi/delete_participant_in_class/${class_id}/${user_id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        RenderClass.showMessage(true, data.message);
        RenderDetail.ShowClassParticipantModal(false);
    }
    static async AddNewTest(formData) {
        const response = await fetch(base_url+`/operatorApi/add_new_test_in_class/`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        RenderClass.showMessage(true, data.message);
        RenderDetail.ShowNewTestModal(false);
        RenderDetail.RenderClassTestList(data.html);
    }
    static async deleteClassTest(test_id, class_id) {
        const response = await fetch(base_url+`/operatorApi/delete_class_test/${class_id}/${test_id}`, {
            method: 'POST',
        });
        const data = await response.json();
        RenderClass.showMessage(true, data.message);
        RenderDetail.RenderClassTestList(data.html);
        console.log(data);
    }
    static async addTestKecermatan(formData) {
        const response = await fetch(base_url+`/operatorApi/add_test_kecermatan/`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        RenderClass.showMessage(true, data.message);
        RenderDetail.ResetFormValue("add_test_kecermatan_form");
        RenderDetail.ShowModal("addKecermatanModal", false);
        RenderDetail.RenderClassTestList(data.html);
        console.log(data);
    }
    static async deleteTestKecermatan(formData) {
        const response = await fetch(base_url+`/operatorApi/delete_test_kecermatan/`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        RenderClass.showMessage(true, data.message);
        RenderDetail.ShowModal("kecermatanDetailModal", false);
        RenderDetail.RenderClassTestList(data.html);
    }
    static async getTestKecermatanDetail(class_id, test_id) {
        const response = await fetch(base_url+`/operatorApi/test_kecermatan_detail/${class_id}/${test_id}`, {
            method: 'GET',
        });
        const json = await response.json();
        return json.data;
    }
    static async updateTestKecermatanDetail(formData) {
        const response = await fetch(base_url+`/operatorApi/update_test_kecermatan/`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        RenderDetail.CloseKecermatanModal();
        RenderClass.showMessage(true, data.message);
    }
    static async getParticipantsTestList(class_id, test_id) {
        const response = await fetch(base_url+`/operatorApi/get_participants_list_test_result/${class_id}/${test_id}`, {
            method: 'GET',
        });
        const json = await response.json();
        return json.data;
    }
    static async getParticipantTestResult(user_id) {
        const response = await fetch(base_url+`/operatorApi/get_participants_test_result/${user_id}`, {
            method: 'GET',
        });
        const json = await response.json();
        console.log(json.data);
        return json.data;
    }
}
