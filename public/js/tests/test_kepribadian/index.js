import { $ } from "../../utility/doms.js";
import { Test_kepribadian } from "./controller/Test_kepribadian.js";
$("#start_test_button").onclick = () => Test_kepribadian.start_test();
$("#stop_test_button").onclick = () => Test_kepribadian.stop_test();
$("#next").onclick = () => Test_kepribadian.next_question();
$("#prev").onclick = () => Test_kepribadian.prev_question();
