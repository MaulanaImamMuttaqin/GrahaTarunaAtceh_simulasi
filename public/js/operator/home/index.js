import { renderDonutChart } from "../../utility/charts.js";
import { Slider } from "../../utility/slider.js";
import { kecermatan_rasio, kepribadian_rasio, kecerdasan_rasio } from "./const.js";
renderDonutChart(kecermatan_rasio, "donut_chart_kecermatan");
renderDonutChart(kepribadian_rasio, "donut_chart_kepribadian");
renderDonutChart(kecerdasan_rasio, "donut_chart_kecerdasan");
new Slider("max_slider", 2000);
new Slider("avg_slider", 2000);
// let slider = $("#slider")
// let els = $$("#slider div")
// let current_position = 0
// let allowSlide = true
// let index = 0
// // slider.appendChild(els[0].cloneNode(true))
// setInterval(() => {
//     shiftSlide()
//     checkIndex()
// }, 2000)
// // slider.addEventListener("transitionend", function () { checkIndex() })
// function shiftSlide() {
//     // slider.classList.add("transition")
//     if (allowSlide) {
//         current_position++
//         index++
//         slider.style.transform = `translateY(${-1 * current_position}00%)`
//         allowSlide = false
//     }
// }
// function checkIndex() {
//     console.log(index, els.length)
//     if (index > els.length - 1) {
//         slider.classList.remove("transition")
//         current_position = 0
//         index = 0
//         slider.style.transform = `translateY(${-1 * current_position}00%)`
//     }
//     allowSlide = true
// }
