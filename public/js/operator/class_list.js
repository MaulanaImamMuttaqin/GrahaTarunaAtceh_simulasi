import { Api } from "../utility/Api.js";
import { deleteRow } from "./globals.js";
let classForm = document.querySelector("#add_class_form");
window.deleteRow = deleteRow;
classForm.onsubmit = function () {
    const formData = new FormData(classForm);
    Api.ClassListData(base_url+'/operatorApi/create_new_class/', 'POST', formData);
};
