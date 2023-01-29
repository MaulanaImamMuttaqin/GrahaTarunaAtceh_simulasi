export class Question_detail_API {
    static async update_data(formData) {
        const response = await fetch(`http://localhost:8080/operatorApi/update_question_test`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    }
}
