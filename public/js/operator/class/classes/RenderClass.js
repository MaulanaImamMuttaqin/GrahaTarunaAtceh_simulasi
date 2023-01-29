export class RenderClass {
    static RerenderTable(html) {
        let class_table = document.querySelector("#class_list_table tbody");
        class_table.innerHTML = html;
    }
    static showMessage(show, message) {
        let mess_el = document.querySelector(".message");
        // @ts-ignore
        toggleCollapse("message", show);
        mess_el.innerHTML = message;
    }
    static ShowNewClassModal(show) {
        // @ts-ignore
        toggleModal("addClassModal", show);
    }
}
