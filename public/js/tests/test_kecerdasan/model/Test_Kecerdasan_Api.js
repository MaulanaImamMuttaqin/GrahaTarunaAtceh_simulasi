var _a;
export class Test_Kecerdasan_API {
}
_a = Test_Kecerdasan_API;
Test_Kecerdasan_API.submit_result = async (formData) => {
    const response = await fetch(base_url+"/testApi/submit_kecerdasan_result", {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    return data;
};
