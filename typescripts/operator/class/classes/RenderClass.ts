export class RenderClass {

    static RerenderTable(html: string) {
        let class_table = document.querySelector("#class_list_table tbody") as HTMLTableElement;
        class_table.innerHTML = html;
    }

    static showMessage(show: boolean, message: string) {
        let mess_el = document.querySelector(".message") as HTMLDivElement
        // @ts-ignore
        toggleCollapse("message", show);
        mess_el.innerHTML = message;
    }

    static ShowNewClassModal(show: boolean) {
        // @ts-ignore
        toggleModal("addClassModal", show);
    }



}