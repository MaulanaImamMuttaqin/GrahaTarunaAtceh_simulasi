var _a;
import { base_url } from "../../../app_const.js";
export class Test_Kepribadian_API {
}
_a = Test_Kepribadian_API;
Test_Kepribadian_API.submit_result = async (formData) => {
    const response = await fetch(`${base_url}/testApi/submit_kepribadian_result`, {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    return data;
};
