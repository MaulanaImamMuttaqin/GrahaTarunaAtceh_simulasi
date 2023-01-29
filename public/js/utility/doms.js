export const $ = (selector) => {
    let element = document.querySelector(selector);
    return element;
};
export const crel = (id) => {
    let element = document.createElement(id);
    return element;
};
export const $$ = (selector) => {
    let elements = document.querySelectorAll(selector);
    return elements;
};
