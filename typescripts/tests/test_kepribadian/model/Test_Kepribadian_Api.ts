
import { base_url } from "../../../app_const.js"

export class Test_Kepribadian_API {
    static submit_result = async (formData: BodyInit): Promise<void> => {
        const response = await fetch(`${base_url}/testApi/submit_kepribadian_result`, {
            method: "POST",
            body: formData
        })

        const data = await response.json()
        return data
    }
}