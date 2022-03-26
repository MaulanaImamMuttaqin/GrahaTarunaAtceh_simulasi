import Utility from "../../utility/Utility.js";
import { ApiDetail } from "./classes/ApiDetail.js";
import { KecermatanModal } from "./classes/Modal.js";
import { RenderDetail } from "./classes/RenderDetail.js";
import { classID } from "./const.js";
export const testKecermatanModal = new KecermatanModal();
export const openAddNewTestModal = () => {
    RenderDetail.ShowNewTestModal(true);
};
export const toggleTestDetailDropdown = (id) => {
    RenderDetail.ToggleTestDetail(`test_detail_drop_down_${id}`);
};
export const deleteTest = (test_id) => {
    let confirm_delete = confirm("Yakin Menghapus Peserta Ini?");
    if (confirm_delete) {
        ApiDetail.deleteClassTest(test_id, classID);
    }
};
// export const manageTest = (modalID: number, test_id: string, status: number): void => {
//     RenderDetail.RenderTestID(test_id)
//     testKecermatanModal.set_test_id(test_id)
//     switch (modalID) {
//         case 1:
//             if (status == 0) {
//                 RenderDetail.
//                 RenderDetail.ShowModal("addKecermatanModal", true)
//             } else {
//                 RenderDetail.ShowModal("kecermatanDetailModal", true)
//             }
//             break;
//         case 2:
//             alert("kecerdasan")
//             break;
//         case 3:
//             alert("kepribadian")
//             break;
//         default:
//             return;
//     }
// }
export const add_new_test = (form) => {
    let uid = Utility.GenerateID(9);
    let formData = new FormData(form);
    formData.append("test_id", uid);
    formData.append("class_id", classID);
    ApiDetail.AddNewTest(formData);
};
