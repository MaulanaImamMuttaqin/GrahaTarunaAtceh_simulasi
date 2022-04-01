import { $ } from "../../utility/doms.js";
import { Participants_list } from "./controllers/Participants_list.js";
import { Test_kecerdasan } from "./controllers/Test_kecerdasan.js";
import { Test_kecermatan } from "./controllers/Test_kecermatan.js";
import { Test_kepribadian } from "./controllers/Test_kepribadian.js";
import { Test_List } from "./controllers/Test_list.js";
import { Test_results } from "./controllers/Test_results.js";
// test list
let new_test_form = $("#add_new_test_form");
new_test_form.onsubmit = () => Test_List.add_new_test(new_test_form);
$("#open_add_new_test_modal").onclick = () => Test_List.open_new_test_form_modal();
$("#close_participants_test_result").onclick = () => Test_results.close_test_result_list_modal();
$("#close_participant_result_modal").onclick = () => Test_results.close_participant_test_result();
$("#delete_participants_test_result").onclick = () => Test_results.delete_participants_test_result();
window.toggle_detail_dropdown = Test_List.toggle_detail_dropdown;
window.delete_test = Test_List.delete_test;
window.open_test_result_list_modal = Test_results.open_test_result_list_modal;
window.open_test_result_detail = Test_results.open_test_result_detail;
// particiapnts list
$("#open_participants_list_modal").onclick = () => Participants_list.open_participant_list_modal();
$("#import_participants_list_button").onclick = () => Participants_list.import_file();
$("#upload_participants_list_data").onclick = () => Participants_list.upload_data();
$("#open_add_participant_modal").onclick = () => Participants_list.open_add_participant_modal();
$("#close_add_participant_modal").onclick = () => Participants_list.close_add_participant_modal();
$("#close_participant_modal").onclick = () => Participants_list.close_modal();
// kepribadian
let add_test_kepribadian_form = $("#add_test_kepribadian_form");
let test_detail_kepribadian_update_form = $("#test_detail_kepribadian_update_form");
add_test_kepribadian_form.onsubmit = () => Test_kepribadian.add_test_kepribadian(add_test_kepribadian_form);
test_detail_kepribadian_update_form.onsubmit = () => Test_kepribadian.upload_edit(test_detail_kepribadian_update_form);
$("#read_question_kepribadian_file_button").onclick = () => Test_kepribadian.read_question_file();
$("#close_kepribadian_modal").onclick = () => Test_kepribadian.close_modal();
$("#read_question_file_button").onclick = () => Test_kepribadian.read_question_file();
$("#delete_test_kepribadian").onclick = () => Test_kepribadian.delete_test();
$("#edit_test_kepribadian").onclick = () => Test_kepribadian.edit();
window.open_kepribadian_modal = Test_kepribadian.open_modal;
// kecermatan
let add_test_kecermatan_form_manual = $("#add_test_kecermatan_form_manual"); // form untuk membuat test kecermatan manual
let add_test_kecermatan_form = $("#add_test_kecermatan_form"); // form untuk membuat test kecermatan
let test_detail_kecermatan_update_form = $("#test_detail_kecermatan_update_form");
add_test_kecermatan_form_manual.onsubmit = () => Test_kecermatan.add_test_kecermatan_manual(add_test_kecermatan_form_manual);
add_test_kecermatan_form.onsubmit = () => Test_kecermatan.add_test_kecermatan(add_test_kecermatan_form);
test_detail_kecermatan_update_form.onsubmit = () => Test_kecermatan.upload_edit(test_detail_kecermatan_update_form);
$("#toggle_test_kecermatan_mode").onclick = () => Test_kecermatan.toggle_test_mode();
$("#close_kecermatan_modal").onclick = () => Test_kecermatan.close_modal();
$("#read_question_file_button").onclick = () => Test_kecermatan.read_question_file();
$("#delete_test_kecermatan").onclick = () => Test_kecermatan.delete_test();
$("#edit_test_kecermatan").onclick = () => Test_kecermatan.edit();
$("#copy_id_button").onclick = () => Test_kecermatan.copy_to_clipboard();
$("#copy_id_button").onmouseleave = () => Test_kecermatan.text_copied();
window.open_kecermatan_modal = Test_kecermatan.open_modal;
// kecerdasan
let add_test_kecerdasan_form = $("#add_test_kecerdasan_form");
let test_detail_kecerdasan_update_form = $("#test_detail_kecerdasan_update_form");
test_detail_kecerdasan_update_form.onsubmit = () => Test_kecerdasan.upload_edit(test_detail_kecerdasan_update_form);
add_test_kecerdasan_form.onsubmit = () => Test_kecerdasan.add_test_kecerdasan(add_test_kecerdasan_form);
$("#close_kecerdasan_modal").onclick = () => Test_kecerdasan.close_modal();
$("#delete_test_kecerdasan").onclick = () => Test_kecerdasan.delete_test();
$("#edit_test_kecerdasan").onclick = () => Test_kecerdasan.edit();
$("#open_question_editor_button").onclick = () => Test_kecerdasan.open_question_editor("single");
$("#close_question_editor").onclick = () => Test_kecerdasan.close_question_editor();
$("#upload_kecerdasan_question").onclick = () => Test_kecerdasan.upload_kecerdasan_question();
$("#clear_kecerdasan_question_input").onclick = () => Test_kecerdasan.clear_kecerdasan_question_input();
// $("#add_kecerdasan_question_options").onclick = () => Test_kecerdasan.add_kecerdasan_question_options();
// $("#remove_kecerdasan_question_options").onclick = () => Test_kecerdasan.remove_kecerdasan_question_options();
window.open_kecerdasan_question_editor = Test_kecerdasan.open_question_editor;
window.open_kecerdasan_modal = Test_kecerdasan.open_modal;
// (window as any).openParticipantsTestResult = openParticipantsTestResult;
// (window as any).deleteParticipantClass = deleteParticipantClass;