export const $ = (selector: string): HTMLElement => {
    let element = document.querySelector(selector) as HTMLElement
    return element;
}

export const crel = (id: string): HTMLElement => {
    let element = document.createElement(id)
    return element;
}

export const $$ = (selector: string): NodeListOf<Element> => {
    let elements = document.querySelectorAll(selector)
    return elements;
}