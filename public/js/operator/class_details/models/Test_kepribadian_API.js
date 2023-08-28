import { classID } from "../const.js";
export class Test_Kepribadian_API {
    static async add_test(formData) {
        const response = await fetch(base_url+`/operatorApi/add_test_kepribadian/`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    }
    static async delete_test(formData) {
        const response = await fetch(base_url+`/operatorApi/delete_test_kepribadian/`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    }
    static async get_test(test_id) {
        const response = await fetch(base_url+`/operatorApi/test_kepribadian_detail/${classID}/${test_id}`, {
            method: 'GET',
        });
        const json = await response.json();
        return json.data;
    }
    static async update_test(formData) {
        const response = await fetch(base_url+`/operatorApi/update_test_kepribadian/`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    }
    static async upload_question(formData) {
        const response = await fetch(base_url+`/operatorApi/upload_question_kepribadian/`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    }
}
