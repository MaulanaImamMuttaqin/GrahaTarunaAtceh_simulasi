var _a;
export class Test_Kepribadian_API {
}
_a = Test_Kepribadian_API;
Test_Kepribadian_API.submit_result = async (formData) => {
    const response = await fetch("http://localhost:8080/testApi/submit_kepribadian_result", {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    return data;
};
