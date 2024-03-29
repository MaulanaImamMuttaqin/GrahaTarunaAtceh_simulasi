import { Test } from "../../tests/test_kecermatan/classes/Test.js";
import { Test_Kepribadian } from "../../tests/test_kepribadian/classes/Test.js";
import { $ } from "../../utility/doms.js";
import { Participants_list } from "./controllers/Participants_list.js";
import { QuestionTestDetail } from "./controllers/QuestionsTestDetail.js";
import { Test_kecerdasan } from "./controllers/Test_kecerdasan.js";
import { Test_kecermatan } from "./controllers/Test_kecermatan.js";
import { Test_kepribadian } from "./controllers/Test_kepribadian.js";
import { Test_List } from "./controllers/Test_list.js";
import { Test_results } from "./controllers/Test_results.js";


// test list
let new_test_form = $("#add_new_test_form") as HTMLFormElement;

new_test_form.onsubmit = (): Promise<void> => Test_List.add_new_test(new_test_form);


$("#open_add_new_test_modal").onclick = () => Test_List.open_new_test_form_modal();
$("#close_participants_test_result").onclick = () => Test_results.close_test_result_list_modal();
$("#close_participant_result_modal").onclick = () => Test_results.close_participant_test_result();
$("#delete_participants_test_result").onclick = () => Test_results.delete_participants_test_result();

(window as any).toggle_detail_dropdown = Test_List.toggle_detail_dropdown;
(window as any).delete_test = Test_List.delete_test;
(window as any).open_test_result_list_modal = Test_results.open_test_result_list_modal;
(window as any).open_test_result_detail = Test_results.open_test_result_detail;

// particiapnts list
$("#open_participants_list_modal").onclick = () => Participants_list.open_participant_list_modal();
$("#import_participants_list_button").onclick = () => Participants_list.import_file();
$("#upload_participants_list_data").onclick = () => Participants_list.upload_data();
$("#open_add_participant_modal").onclick = () => Participants_list.open_add_participant_modal();
$("#close_add_participant_modal").onclick = () => Participants_list.close_add_participant_modal();
$("#close_participant_modal").onclick = () => Participants_list.close_modal();



// kepribadian
let add_test_kepribadian_form = $("#add_test_kepribadian_form") as HTMLFormElement;
let test_detail_kepribadian_update_form = $("#test_detail_kepribadian_update_form") as HTMLFormElement
let kepribadian_question_upload_file = $("#kepribadian_question_upload_file") as HTMLFormElement

kepribadian_question_upload_file.onsubmit = (): Promise<void> => Test_kepribadian.upload_file_question()
add_test_kepribadian_form.onsubmit = (): Promise<void> => Test_kepribadian.add_test_kepribadian(add_test_kepribadian_form)
test_detail_kepribadian_update_form.onsubmit = (): Promise<void> => Test_kepribadian.upload_edit(test_detail_kepribadian_update_form)

$("#read_question_kepribadian_file_button").onclick = () => Test_kepribadian.read_question_file();
$("#close_kepribadian_modal").onclick = () => Test_kepribadian.close_modal();
$("#read_question_file_button").onclick = () => Test_kepribadian.read_question_file();
$("#delete_test_kepribadian").onclick = () => Test_kepribadian.delete_test();
$("#edit_test_kepribadian").onclick = () => Test_kepribadian.edit();
$("#kepribadianDetailModal #open_question_editor_button").onclick = () => Test_kepribadian.open_question_editor("single");
$("#kepribadianDetailModal #close_question_editor").onclick = () => Test_kepribadian.close_question_editor();
$("#kepribadianDetailModal #upload_kepribadian_question").onclick = () => Test_kepribadian.upload_kepribadian_question();
$("#kepribadianDetailModal #clear_kepribadian_question_input").onclick = () => Test_kepribadian.clear_kepribadian_question_input();

$("#open_kepribadian_question_detail").onclick = () => QuestionTestDetail.openModal("kepribadian");
$("#kepribadianDetailModal #close_question_details").onclick = () => QuestionTestDetail.closeModal("kepribadian");
$("#kepribadianDetailModal #update_question_details").onclick = () => QuestionTestDetail.update_question();
$("#kepribadianDetailModal #delete_question_details").onclick = () => QuestionTestDetail.delete_question();
(window as any).open_kepribadian_modal = Test_kepribadian.open_modal;
(window as any).open_kepribadian_question_editor = Test_kepribadian.open_question_editor;
(window as any).open_kepribadian_modal = Test_kepribadian.open_modal;


// kecermatan
let add_test_kecermatan_form_manual = $("#add_test_kecermatan_form_manual") as HTMLFormElement // form untuk membuat test kecermatan manual
let add_test_kecermatan_form = $("#add_test_kecermatan_form") as HTMLFormElement; // form untuk membuat test kecermatan

let test_detail_kecermatan_update_form = $("#test_detail_kecermatan_update_form") as HTMLFormElement

add_test_kecermatan_form_manual.onsubmit = (): Promise<void> => Test_kecermatan.add_test_kecermatan_manual(add_test_kecermatan_form_manual);
add_test_kecermatan_form.onsubmit = (): Promise<void> => Test_kecermatan.add_test_kecermatan(add_test_kecermatan_form);
test_detail_kecermatan_update_form.onsubmit = (): Promise<void> => Test_kecermatan.upload_edit(test_detail_kecermatan_update_form)

$("#toggle_test_kecermatan_mode").onclick = () => Test_kecermatan.toggle_test_mode();
$("#close_kecermatan_modal").onclick = () => Test_kecermatan.close_modal();
$("#read_question_file_button").onclick = () => Test_kecermatan.read_question_file();
$("#delete_test_kecermatan").onclick = () => Test_kecermatan.delete_test();
$("#edit_test_kecermatan").onclick = () => Test_kecermatan.edit();

(window as any).open_kecermatan_modal = Test_kecermatan.open_modal;

// kecerdasan

let add_test_kecerdasan_form = $("#add_test_kecerdasan_form") as HTMLFormElement
let test_detail_kecerdasan_update_form = $("#test_detail_kecerdasan_update_form") as HTMLFormElement

test_detail_kecerdasan_update_form.onsubmit = (): Promise<void> => Test_kecerdasan.upload_edit(test_detail_kecerdasan_update_form)
add_test_kecerdasan_form.onsubmit = (): Promise<void> => Test_kecerdasan.add_test_kecerdasan(add_test_kecerdasan_form)

$("#close_kecerdasan_modal").onclick = () => Test_kecerdasan.close_modal();
$("#delete_test_kecerdasan").onclick = () => Test_kecerdasan.delete_test();
$("#edit_test_kecerdasan").onclick = () => Test_kecerdasan.edit();
$("#kecerdasanDetailModal #open_question_editor_button").onclick = () => Test_kecerdasan.open_question_editor("single");
$("#kecerdasanDetailModal #close_question_editor").onclick = () => Test_kecerdasan.close_question_editor();
$("#kecerdasanDetailModal #upload_kecerdasan_question").onclick = () => Test_kecerdasan.upload_kecerdasan_question();
$("#kecerdasanDetailModal #clear_kecerdasan_question_input").onclick = () => Test_kecerdasan.clear_kecerdasan_question_input();
// $("#add_kecerdasan_question_options").onclick = () => Test_kecerdasan.add_kecerdasan_question_options();
// $("#remove_kecerdasan_question_options").onclick = () => Test_kecerdasan.remove_kecerdasan_question_options();
$("#open_kecerdasan_question_detail").onclick = () => QuestionTestDetail.openModal("kecerdasan");
$("#kecerdasanDetailModal #close_question_details").onclick = () => QuestionTestDetail.closeModal("kecerdasan");
$("#kecerdasanDetailModal #update_question_details").onclick = () => QuestionTestDetail.update_question();
$("#kecerdasanDetailModal #delete_question_details").onclick = () => QuestionTestDetail.delete_question();

(window as any).open_kecerdasan_question_editor = Test_kecerdasan.open_question_editor;
(window as any).open_kecerdasan_modal = Test_kecerdasan.open_modal;
(window as any).close_kecermatan_detail_modal = Test_kecermatan.close_modal;
(window as any).close_kecerdasan_detail_modal = Test_kecerdasan.close_modal;
(window as any).close_kepribadian_detail_modal = Test_kepribadian.close_modal;
(window as any).copy_test_id = Test_List.copy_test_id_to_clipboard;
(window as any).id_copied = Test_List.id_copied;
(window as any).export_to_spreadsheet = Test_results.export_to_excel;
(window as any).open_question_test_detail = QuestionTestDetail.openModal;










// (window as any).openParticipantsTestResult = openParticipantsTestResult;

// (window as any).deleteParticipantClass = deleteParticipantClass;