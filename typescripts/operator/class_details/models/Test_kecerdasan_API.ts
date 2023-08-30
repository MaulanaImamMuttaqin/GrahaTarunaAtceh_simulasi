import { classID } from "../const.js"
import { base_url } from "../../../app_const.js"


export class Test_Kecerdasan_API {
    static async add_test(formData: BodyInit): Promise<any> {
        const response = await fetch(`${base_url}/operatorApi/add_test_kecerdasan`, {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        return data
    }

    static async delete_test(formData: BodyInit): Promise<any> {
        const response = await fetch(`${base_url}/operatorApi/delete_test_kecerdasan`, {
            method: 'POST',
            body: formData
        })

        const data = await response.json()
        return data
    }


    static async get_test(test_id: string): Promise<any> {
        const response = await fetch(`${base_url}/operatorApi/test_kecerdasan_detail/${classID}/${test_id}`, {
            method: 'GET',
        })
        const json = await response.json()
        return json.data
    }

    static async update_test(formData: BodyInit) {
        const response = await fetch(`${base_url}/operatorApi/update_test_kecerdasan`, {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        return data
    }

    static async upload_question(formData: BodyInit) {
        const response = await fetch(`${base_url}/operatorApi/upload_question_kecerdasan`, {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        return data
    }
}