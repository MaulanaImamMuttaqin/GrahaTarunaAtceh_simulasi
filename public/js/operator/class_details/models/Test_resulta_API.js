import { classID } from "../../class_detail/const";
export class Test_result_API {
    static async get_result_list(test_id) {
        const response = await fetch(base_url+`/operatorApi/get_participants_list_test_result/${classID}/${test_id}`, {
            method: 'GET',
        });
        const json = await response.json();
        return json.data;
    }
    static async get_result(user_id) {
        const response = await fetch(base_url+`/operatorApi/get_participants_test_result/${user_id}`, {
            method: 'GET',
        });
        const json = await response.json();
        console.log(json.data);
        return json.data;
    }
}
