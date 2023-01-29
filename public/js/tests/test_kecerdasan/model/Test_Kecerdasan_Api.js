var _a;
export class Test_Kecerdasan_API {
}
_a = Test_Kecerdasan_API;
Test_Kecerdasan_API.submit_result = async (formData) => {
    const response = await fetch("http://localhost:8080/testApi/submit_kecerdasan_result", {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    return data;
};
