import { Api } from "../utility/Api.js";
export function deleteRow(id) {
    Api.ClassListData(`http://localhost:8080/operatorApi/delete_class/${id}`, 'DELETE');
}
