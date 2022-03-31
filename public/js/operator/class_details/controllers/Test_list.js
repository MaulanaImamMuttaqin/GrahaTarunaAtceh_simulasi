var _a;
import { Render } from "../../../utility/render.js";
import Utility from "../../../utility/Utility.js";
import { classID } from "../const.js";
import { Test_list_API } from "../models/Test_list_API.js";
import { Render_test_list } from "../views/Render_test_list.js";
export class Test_List {
}
_a = Test_List;
Test_List.open_new_test_form_modal = () => {
    Render.showModal("addNewTest", true);
};
Test_List.toggle_detail_dropdown = (id) => {
    Render_test_list.toggle_test_detail(`test_detail_drop_down_${id}`);
};
Test_List.delete_test = async (test_id) => {
    let confirm_delete = confirm("Yakin Menghapus Peserta Ini?");
    if (confirm_delete) {
        let data = await Test_list_API.delete_tes(test_id);
        Render.showMessage(true, data.message);
        Render_test_list.render_class_test_list(data.html);
    }
};
Test_List.add_new_test = async (form) => {
    let uid = Utility.GenerateID(9);
    let formData = new FormData(form);
    formData.append("test_id", uid);
    formData.append("class_id", classID);
    let data = await Test_list_API.add_test(formData);
    Render.showMessage(true, data.message);
    Render_test_list.render_class_test_list(data.html);
    Render.resetFormValue("#add_new_test_form");
    Render.showModal("addNewTest", false);
};
