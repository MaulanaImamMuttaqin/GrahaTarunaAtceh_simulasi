import { $ } from "../../utility/doms.js";
import { Test_Controller } from "./controller/Test_Controller.js";


$("#start_test_button").onclick = () => Test_Controller.start_test()