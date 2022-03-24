import { ClassList } from "./classes/ClassList.js";
let classForm = document.querySelector("#add_class_form");
let class_list = new ClassList();
classForm.onsubmit = function () {
    const formData = new FormData(classForm);
    class_list.addNewClass(formData);
};
const deleteRow = (id) => {
    class_list.deleteClass(id);
};
const detailRow = (id) => {
    class_list.openDetailModal(id);
    console.log(class_list.currentClassData);
};
const addParticipantModal = (id) => {
    class_list.openAddParticipantModal();
};
window.addParticipantModal = addParticipantModal;
window.deleteRow = deleteRow;
window.detailRow = detailRow;
