import { classID } from "../const.js";
import { base_url } from "../../../app_const.js";
export class Test_list_API {
    static async add_test(formData) {
        const response = await fetch(`${base_url}/operatorApi/add_new_test_in_class/`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        console.log(data);
        return data;
    }
    static async delete_tes(test_id) {
        const response = await fetch(`${base_url}/operatorApi/delete_class_test/${classID}/${test_id}`, {
            method: 'POST',
        });
        const data = await response.json();
        return data;
    }
    static async get_results_list(test_id) {
        const response = await fetch(`${base_url}/operatorApi/get_participants_list_test_result/${classID}/${test_id}`, {
            method: 'GET',
        });
        const json = await response.json();
        return json.data;
    }
}
