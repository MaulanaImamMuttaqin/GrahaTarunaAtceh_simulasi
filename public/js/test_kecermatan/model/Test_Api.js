var _a;
export class Test_API {
}
_a = Test_API;
Test_API.submit_result = async (formData) => {
    const response = await fetch("http://localhost:8080/testApi/submit_kecermatan_result", {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    return data;
};
