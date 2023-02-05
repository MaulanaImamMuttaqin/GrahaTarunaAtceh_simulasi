import { $, $$ } from "../../../utility/doms.js";


export class Render_test_list {
    static toggle_test_detail(id: string): void {
        let test_detail_rows = $$(".test_detail");
        test_detail_rows.forEach(element => {
            if (!element.classList.contains("hidden")) {
                element.classList.add("hidden")
            }
            else if (element.id === id) {
                element.classList.remove("hidden")
            }
        });
    }

    static render_class_test_list(el: string): void {
        let table = $(`#test_list_body`) as HTMLTableElement;
        table.innerHTML = el
    }
} 