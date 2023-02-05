import { ApiClass } from "./classes/ApiClass.js";


let classForm = document.querySelector("#add_class_form") as HTMLFormElement;

classForm.onsubmit = function () {
    const formData = new FormData(classForm)
    ApiClass.addNewClass(formData)
}


const deleteClass = (id: number): void => {
    ApiClass.deleteClass(id)
}

(window as any).deleteClass = deleteClass;