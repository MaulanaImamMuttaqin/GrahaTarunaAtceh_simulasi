import { classID } from "../../class_details/const.js"
import { base_url } from "../../../app_const.js"
import { TestResults } from "../types.js"


export class Test_results_API {
    static async get_results_list(test_id: string): Promise<Array<TestResults>> {
        const response = await fetch(`${base_url}/operatorApi/get_participants_list_test_result/${classID}/${test_id}`, {
            method: 'GET',
        })
        const json = await response.json()
        console.log(json.data)
        return json.data
    }

    static async get_result(user_id: string): Promise<any> {
        const response = await fetch(`${base_url}/operatorApi/get_participants_test_result/${user_id}`, {
            method: 'GET',
        })
        const json = await response.json()
        console.log(json.data)
        return json.data
    }

    static async delete_result(test_name: string, user_id: string): Promise<any> {
        const response = await fetch(`${base_url}/operatorApi/delete_participants_test_result/${test_name}/${user_id}`, {
            method: 'POST',
        })
        const json = await response.json()
        return json
    }

}