var _a;
import { Render } from "../../../utility/render.js";
import { Test_result_modals } from "../classes/Test_results_modal.js";
import { Test_results_API } from "../models/Test_results_API.js";
import { Render_test_results } from "../views/Render_test_results.js";
let test_result_modal = new Test_result_modals();
export class Test_results {
}
_a = Test_results;
Test_results.open_test_result_list_modal = async (id) => {
    Render.showModal("test_result_modal", true);
    let participants_list = await Test_results_API.get_results_list(id);
    Render_test_results.results_table(participants_list);
};
Test_results.close_test_result_list_modal = () => {
    Render.showModal("test_result_modal", false);
    Render.showElement("#participant_result_modal", false);
};
Test_results.close_participant_test_result = () => {
    Render.showElement("#participant_result_modal", false);
};
Test_results.open_test_modal = async (id) => {
    Render_test_results.show_participant_test_result("");
    let test_result = await Test_results_API.get_result(id);
    test_result_modal.set_user_id(id);
    test_result_modal.set_user_result_data(test_result);
    test_result_modal.set_result_show_test("kecermatan");
    Render_test_results.show_participant_test_result("kecermatan");
    Render_test_results.render_result_data("kecermatan", test_result);
};
Test_results.open_test_result_detail = (test_name) => {
    test_result_modal.set_result_show_test(test_name);
    Render_test_results.show_participant_test_result(test_name);
    Render_test_results.render_result_data(test_name, test_result_modal.user_result_data);
};
Test_results.delete_participants_test_result = async () => {
    if (!test_result_modal.user_result_data[test_result_modal.result_showing_test])
        return;
    let confirm_delete = confirm("Anda yaking hapus hasil test peserta ini?");
    if (!confirm_delete)
        return;
    let data = await Test_results_API.delete_result(test_result_modal.result_showing_test, test_result_modal.user_id);
    Test_results.close_test_result_list_modal();
    Render.showMessage(true, data.message);
};