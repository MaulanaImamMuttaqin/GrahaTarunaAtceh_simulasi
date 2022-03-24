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
    static ShowClassDetailModal(show) {
        // @ts-ignore
        toggleModal("detailClassModal", show);
    }
    static ShowAddParticipantClassModal(show) {
        // @ts-ignore
        toggleModal("pesertaClassModal", show);
    }
    static RenderClassName(name) {
        let detail_id = document.querySelector("#modal_test_id");
        detail_id.innerText = name;
    }
}
