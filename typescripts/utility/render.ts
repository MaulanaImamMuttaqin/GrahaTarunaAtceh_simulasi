import { $, $$ } from "./doms.js"

export class Render {
    static showModal(id: string, show: boolean): void {
        // @ts-ignore
        toggleModal(id, show)
    }

    static showElement(selector: string, show: boolean): void {
        if (!selector.includes("#") || selector.includes(".")) console.error(selector)
        if (show) $(selector).classList.remove("hidden")
        else $(selector).classList.add("hidden")
    }
    static showElementAll(selector: string, show: boolean): void {
        let els = $$(selector) as NodeListOf<HTMLElement>
        els.forEach((el: HTMLElement) => {
            if (show) el.classList.remove("hidden")
            else el.classList.add("hidden")
        })

    }
    static toggleElement(selector: string): void {
        $(selector).classList.toggle("hidden")
    }

    static showMessage(show: boolean, message: string) {
        let mess_el = $(".message") as HTMLDivElement
        // @ts-ignore
        toggleCollapse("message", show);
        mess_el.innerHTML = message;
    }

    static showMessages(selector: string, message: string, show: boolean) {
        let mess_el = $("." + selector) as HTMLDivElement
        // @ts-ignore
        toggleCollapse(selector, show);
        mess_el.innerText = message;
    }

    static Text(selector: string, text: string) {
        let el = $(selector)
        if (el) el.innerText = text
    }
    static TextAll(selector: string, text: string) {
        let els = $$(selector) as NodeListOf<HTMLElement>
        els.forEach((el: HTMLElement) => {
            if (el) el.innerText = text
        })
    }
    static resetFormValue(selector: string) {
        let form_element = $(selector) as HTMLFormElement
        form_element.reset()
    }

    static html(selector: string, html: string) {
        let el = $(selector)
        if (el) el.innerHTML = html
    }


    // static attb(selector:string, attribute:string, data:any){
    //     $(selector)
    // }
}