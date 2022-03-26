import { RenderClass } from "../../class/classes/RenderClass.js";
import { RenderDetail } from "./RenderDetail.js";
export class ApiDetail {
    static UploadParticipantClass(id, formData) {
        fetch('http://localhost:8080/operatorApi/add_new_participant_class/', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
            console.log(result);
            RenderDetail.RenderClassParticipantList("import_table_body", []);
            RenderClass.showMessage(true, result.message);
            RenderDetail.ShowClassParticipantModal(false);
        });
    }
    static getParticipantClassList(id) {
        fetch(`http://localhost:8080/operatorApi/get_participant_class_list/${id}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
            RenderDetail.RenderClassParticipantList("class_participant_list", result.data);
        });
    }
    static deleteParticipantClass(user_id, class_id) {
        fetch(`http://localhost:8080/operatorApi/delete_participant_in_class/${class_id}/${user_id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(result => {
            RenderClass.showMessage(true, result.message);
            RenderDetail.ShowClassParticipantModal(false);
        });
    }
    static AddNewTest(formData) {
        fetch(`http://localhost:8080/operatorApi/add_new_test_in_class/`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
            RenderClass.showMessage(true, result.message);
            RenderDetail.ShowNewTestModal(false);
            RenderDetail.RenderClassTestList(result.html);
            console.log(result);
        });
    }
    static deleteClassTest(test_id, class_id) {
        fetch(`http://localhost:8080/operatorApi/delete_class_test/${class_id}/${test_id}`, {
            method: 'POST',
        })
            .then(response => response.json())
            .then(result => {
            RenderClass.showMessage(true, result.message);
            RenderDetail.RenderClassTestList(result.html);
            console.log(result);
        });
    }
    static addTestKecermatan(formData) {
        fetch(`http://localhost:8080/operatorApi/add_test_kecermatan/`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
            RenderClass.showMessage(true, result.message);
            RenderDetail.ResetFormValue("add_test_kecermatan_form");
            RenderDetail.ShowModal("addKecermatanModal", false);
            RenderDetail.RenderClassTestList(result.html);
            console.log(result);
        });
    }
    static deleteTestKecermatan(formData) {
        fetch(`http://localhost:8080/operatorApi/delete_test_kecermatan/`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
            RenderClass.showMessage(true, result.message);
            RenderDetail.ShowModal("kecermatanDetailModal", false);
            RenderDetail.RenderClassTestList(result.html);
        });
    }
    static getTestKecermatanDetail(class_id, test_id) {
        fetch(`http://localhost:8080/operatorApi/test_kecermatan_detail/${class_id}/${test_id}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
            console.log(result);
            // RenderClass.showMessage(true, result.message)
            // RenderDetail.ShowModal("kecermatanDetailModal", false)
            // RenderDetail.RenderClassTestList(result.html)
        });
    }
}
