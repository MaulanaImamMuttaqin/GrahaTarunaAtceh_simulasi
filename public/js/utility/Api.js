import { RenderClass } from "../operator/class/classes/RenderClass.js";
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
}
