import { $ } from "../../utility/doms.js";
import { Test_kecerdasan } from "./controller/Test_kecerdasan.js";
$("#start_test_button").onclick = () => Test_kecerdasan.start_test();
$("#stop_test_button").onclick = () => Test_kecerdasan.stop_test();
$("#next").onclick = () => Test_kecerdasan.next_question();
$("#prev").onclick = () => Test_kecerdasan.prev_question();
$("#logout_test").onclick = () => Test_kecerdasan.log_out();
