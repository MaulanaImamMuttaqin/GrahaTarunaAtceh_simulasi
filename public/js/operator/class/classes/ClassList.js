import { Api } from "../../../utility/Api.js";
import { RenderClass } from "./RenderClass.js";
export class ClassList {
    constructor() {
        this.currentClassId = "";
    }
    addNewClass(formData) {
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
    deleteClass(id) {
        let confirm_delete = confirm("Yakin Hapus Kelas");
        if (confirm_delete) {
            Api.ClassListData(base_url+`/operatorApi/delete_class/${id}`, 'DELETE');
        }
    }
}
