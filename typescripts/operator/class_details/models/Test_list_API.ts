import { classID } from "../const.js"
import { base_url } from "../../../app_const.js"
import { TestResults } from "../types.js"


export class Test_list_API {
    static async add_test(formData: BodyInit): Promise<any> {
        const response = await fetch(`${base_url}/operatorApi/add_new_test_in_class`, {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        console.log(data)
        return data
    }

    static async delete_tes(test_id: string): Promise<{ message: string, html: string }> {
        const response = await fetch(`${base_url}/operatorApi/delete_class_test/${classID}/${test_id}`, {
            method: 'POST',
        })
        const data = await response.json()
        return data
    }

    static async get_results_list(test_id: string): Promise<Array<TestResults>> {
        const response = await fetch(`${base_url}/operatorApi/get_participants_list_test_result/${classID}/${test_id}`, {
            method: 'GET',
        })
        const json = await response.json()
        return json.data
    }
}