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
        fetch(base_url+'/operatorApi/create_new_class/', {
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
            Api.ClassListData(base_url+`/operatorApi/delete_class/${id}`, 'DELETE');
        }
    }
    static UploadParticipantClass(id, formData) {
        fetch(base_url+'/operatorApi/add_new_participant_class/', {
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
        fetch(base_url+`/operatorApi/get_participant_class_list/${id}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
            RenderDetail.RenderClassParticipantList("class_participant_list", result.data);
        });
    }
}
