import { $, $$ } from "./doms.js";
export class Slider {
    constructor(selector, time) {
        this.current_position = 0;
        this.allowSlide = true;
        this.index = 0;
        this.slider = $(`#${selector}`);
        this.els = $$(`#${selector} div`);
        setInterval(() => {
            this.shiftSlide();
            this.checkIndex();
        }, time);
    }
    shiftSlide() {
        // slider.classList.add("transition")
        if (this.allowSlide) {
            this.current_position++;
            this.index++;
            this.slider.style.transform = `translateY(${-1 * this.current_position}00%)`;
            this.allowSlide = false;
        }
    }
    checkIndex() {
        if (this.index > this.els.length - 1) {
            this.slider.classList.remove("transition");
            this.current_position = 0;
            this.index = 0;
            this.slider.style.transform = `translateY(${-1 * this.current_position}00%)`;
        }
        this.allowSlide = true;
    }
}
