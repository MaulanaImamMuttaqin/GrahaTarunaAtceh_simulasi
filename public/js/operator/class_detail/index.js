import Utility from "../../utility/Utility.js";
import { closeAddParticipantModal, deleteParticipantClass, ImportFile, openAddParticipantModal, openParticipantsListModal, uploadData } from "./participants_list.js";
import { add_test_kecermatan, add_test_kecermatan_manual, openKecermatanModal, closeKecermatanDetailModal, deleteTestKecermatan, ReadQuestionsFile, toggleTestKecermatanMode } from "./test_kecermatan.js";
import { add_new_test, deleteTest, openAddNewTestModal, toggleTestDetailDropdown } from "./test_list.js";
let { $ } = Utility;
//--------------------DOMS
// forms
let new_test_form = $("#add_new_test_form"); //form untuk menambah test barru
let add_test_kecermatan_form = $("#add_test_kecermatan_form"); // form untuk membuat test kecermatan
let add_test_kecermatan_form_manual = $("#add_test_kecermatan_form_manual"); // form untuk membuat test kecermatan manual
//-------------------Events
// onsubmit forms
add_test_kecermatan_form.onsubmit = () => add_test_kecermatan(add_test_kecermatan_form);
add_test_kecermatan_form_manual.onsubmit = () => add_test_kecermatan_manual(add_test_kecermatan_form_manual);
new_test_form.onsubmit = () => add_new_test(new_test_form);
// onclick button
$("#open_add_participant_modal").onclick = () => openAddParticipantModal();
$("#close_participant_modal").onclick = () => closeAddParticipantModal();
$("#import_participants_list_button").onclick = () => ImportFile();
$("#upload_participants_list_data").onclick = () => uploadData();
$("#open_participants_list_modal").onclick = () => openParticipantsListModal();
$("#read_question_file_button").onclick = () => ReadQuestionsFile();
$("#close_kecermatan_modal").onclick = () => closeKecermatanDetailModal();
$("#toggle_test_kecermatan_mode").onclick = () => toggleTestKecermatanMode();
$("#open_add_new_test_modal").onclick = () => openAddNewTestModal();
$("#delete_test_kecermatan").onclick = () => deleteTestKecermatan();
window.openKecermatanModal = openKecermatanModal;
window.deleteTest = deleteTest;
window.toggleTestDetailDropdown = toggleTestDetailDropdown;
window.deleteParticipantClass = deleteParticipantClass;
