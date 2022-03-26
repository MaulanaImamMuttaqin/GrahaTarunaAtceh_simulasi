import { RenderClass } from "./RenderClass.js";
export class DetailClassModal {
    constructor() {
        this.state = false;
        this.data = {};
    }
    openModal() {
        RenderClass.ShowClassDetailModal(true);
    }
    closeModal() {
        RenderClass.ShowClassDetailModal(false);
    }
    setData(data) {
        this.data = data;
    }
    getData() {
        console.log(this.data);
    }
}
