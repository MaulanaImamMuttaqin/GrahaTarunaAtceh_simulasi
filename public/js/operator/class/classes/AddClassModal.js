import { RenderClass } from "./RenderClass.js";
export class AddClassModal {
    constructor() {
        this.state = false;
        this.data = {};
    }
    openModal() {
        RenderClass.ShowNewClassModal(true);
    }
    closeModal() {
        RenderClass.ShowNewClassModal(false);
    }
    setData(data) {
        this.data = data;
    }
    getData() {
        console.log(this.data);
    }
}
