import { ApiClass } from "./classes/ApiClass.js";
let classForm = document.querySelector("#add_class_form");
classForm.onsubmit = function () {
    const formData = new FormData(classForm);
    ApiClass.addNewClass(formData);
};
const deleteClass = (id) => {
    ApiClass.deleteClass(id);
};
window.deleteClass = deleteClass;
