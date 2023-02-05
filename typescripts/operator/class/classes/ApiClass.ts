import { RenderClass } from "./RenderClass.js";

export class ApiClass {

    static addNewClass(formData: BodyInit) {
        fetch('http://localhost:8080/operatorApi/create_new_class/', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                RenderClass.RerenderTable(result.html)
                RenderClass.showMessage(true, result.messages)
                RenderClass.ShowNewClassModal(false)
            });
    }

    static deleteClass(id: number) {
        let confirm_delete = confirm("Yakin Hapus Kelas")
        if (confirm_delete) {
            fetch(`http://localhost:8080/operatorApi/delete_class/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(result => {
                    RenderClass.RerenderTable(result.html)
                    RenderClass.showMessage(true, result.messages)
                });
        }
    }


}