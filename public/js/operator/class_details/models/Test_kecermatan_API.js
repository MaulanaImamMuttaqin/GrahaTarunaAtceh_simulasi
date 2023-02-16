import { classID } from "../const.js";
import { base_url } from "../../../app_const.js";
export class Test_Kecermatan_API {
    static async add_test(formData) {
        const response = await fetch(`${base_url}/operatorApi/add_test_kecermatan/`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    }
    static async delete_test(formData) {
        const response = await fetch(`${base_url}/operatorApi/delete_test_kecermatan/`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    }
    static async get_test(test_id) {
        const response = await fetch(`${base_url}/operatorApi/test_kecermatan_detail/${classID}/${test_id}`, {
            method: 'GET',
        });
        const json = await response.json();
        return json.data;
    }
    static async update_test(formData) {
        const response = await fetch(`${base_url}/operatorApi/update_test_kecermatan/`, {
            method: 'POST',
            body: formData
        });
        // console.log(formData)
        // return;
        const data = await response.json();
        return data;
    }
}
