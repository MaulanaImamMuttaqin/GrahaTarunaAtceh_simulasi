import { classID } from "../const.js"


export class Participants_list_API {
    static async upload_data(formData: BodyInit): Promise<any> {
        const response = await fetch('http://localhost:8080/operatorApi/add_new_participant_class/', {
            method: 'POST',
            body: formData
        })

        const data = await response.json()
        return data
    }

    static async get_list(id: string): Promise<any> {
        const response = await fetch(`http://localhost:8080/operatorApi/get_participant_class_list/${id}`, {
            method: 'GET',
        })
        const data = await response.json()
        return data
    }

    static async delete_participant(user_id: string): Promise<any> {
        const response = await fetch(`http://localhost:8080/operatorApi/delete_participant_in_class/${classID}/${user_id}`, {
            method: 'DELETE',
        })
        const data = await response.json()
        return data
    }
}