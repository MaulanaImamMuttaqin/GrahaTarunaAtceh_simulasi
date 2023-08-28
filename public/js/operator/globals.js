import { Api } from "../utility/Api.js";
export function deleteRow(id) {
    Api.ClassListData(base_url+`/operatorApi/delete_class/${id}`, 'DELETE');
}
