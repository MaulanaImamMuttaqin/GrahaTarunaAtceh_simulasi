import { $, $$ } from "./doms.js";
export class Render {
    static showModal(id, show) {
        // @ts-ignore
        toggleModal(id, show);
    }
    static showElement(selector, show) {
        if (!selector.includes("#") || selector.includes("."))
            console.error(selector);
        if (show)
            $(selector).classList.remove("hidden");
        else
            $(selector).classList.add("hidden");
    }
    static showElementAll(selector, show) {
        let els = $$(selector);
        els.forEach((el) => {
            if (show)
                el.classList.remove("hidden");
            else
                el.classList.add("hidden");
        });
    }
    static toggleElement(selector) {
        $(selector).classList.toggle("hidden");
    }
    static showMessage(show, message) {
        let mess_el = $(".message");
        // @ts-ignore
        toggleCollapse("message", show);
        mess_el.innerHTML = message;
    }
    static showMessages(selector, message, show) {
        let mess_el = $("." + selector);
        // @ts-ignore
        toggleCollapse(selector, show);
        mess_el.innerText = message;
    }
    static Text(selector, text) {
        let el = $(selector);
        if (el)
            el.innerText = text;
    }
    static TextAll(selector, text) {
        let els = $$(selector);
        els.forEach((el) => {
            if (el)
                el.innerText = text;
        });
    }
    static resetFormValue(selector) {
        let form_element = $(selector);
        form_element.reset();
    }
    static html(selector, html) {
        let el = $(selector);
        if (el)
            el.innerHTML = html;
    }
}
