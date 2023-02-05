

export class Test_Kepribadian_API {
    static submit_result = async (formData: BodyInit): Promise<void> => {
        const response = await fetch("http://localhost:8080/testApi/submit_kepribadian_result", {
            method: "POST",
            body: formData
        })

        const data = await response.json()
        return data
    }
}