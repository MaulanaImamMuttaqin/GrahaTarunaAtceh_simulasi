export const $ = (id) => {
    let element = document.querySelector(id);
    return element;
};
export const crel = (id) => {
    let element = document.createElement(id);
    return element;
};
