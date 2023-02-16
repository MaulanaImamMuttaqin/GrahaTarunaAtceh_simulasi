var _a;
import { base_url } from "../../../app_const.js";
export class Test_Kecerdasan_API {
}
_a = Test_Kecerdasan_API;
Test_Kecerdasan_API.submit_result = async (formData) => {
    const response = await fetch(`${base_url}/testApi/submit_kecerdasan_result`, {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    return data;
};
