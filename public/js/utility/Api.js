import { RenderClass } from "../operator/class/classes/RenderClass.js";
import { RenderDetail } from "../operator/class_detail/classes/RenderDetail.js";
export class Api {
    static ClassListData(url, method, formData) {
        fetch(url, {
            method: method,
            body: formData
        })
            .then(response => response.json())
            .then(result => {
            RenderClass.RerenderTable(result.html);
            RenderClass.showMessage(true, result.messages);
        });
    }
    static addNewClass(formData) {
        fetch('http://localhost:8080/operatorApi/create_new_class/', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
            RenderClass.RerenderTable(result.html);
            RenderClass.showMessage(true, result.messages);
            RenderClass.ShowNewClassModal(false);
        });
    }
    static deleteClass(id) {
        let confirm_delete = confirm("Yakin Hapus Kelas");
        if (confirm_delete) {
            Api.ClassListData(`http://localhost:8080/operatorApi/delete_class/${id}`, 'DELETE');
        }
    }
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
}
