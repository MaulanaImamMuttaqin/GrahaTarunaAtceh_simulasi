// @ts-ignore
import { read, utils, writeFile } from "../js_vendor/_snowpack/pkg/xlsx.js";
export class ReadXLSX {
    constructor(element) {
        this.file = [];
        this.element = element;
        this.readData();
    }
    readData() {
        let fileUpload = this.element;
        fileUpload.addEventListener('change', (e) => {
            let selectedFile = e.target.files[0];
            let reader = new FileReader();
            reader.onload = (evt) => {
                var _a;
                let data = (_a = evt.target) === null || _a === void 0 ? void 0 : _a.result;
                let workbook = read(data, {
                    type: 'binary'
                });
                workbook.SheetNames.forEach((sheetName) => {
                    let XL_row_object = utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    console.log(XL_row_object);
                    this.file = XL_row_object;
                });
            };
            reader.onerror = function (event) {
                console.error("File could not be read! Code " + event.target.error.code);
            };
            reader.readAsBinaryString(selectedFile);
        });
    }
    removeFileValue() {
        this.element.value = '';
        this.file = [];
    }
    getData() {
        return this.file;
    }
    setNewData(data) {
        this.data = data;
    }
    getNewData() {
        return this.data;
    }
}
export const ExportXLSX = (data, file_name) => {
    let binaryWS = utils.json_to_sheet(data);
    // Create a new Workbook
    var wb = utils.book_new();
    // Name your sheet
    utils.book_append_sheet(wb, binaryWS, 'Binary values');
    // export your excel
    writeFile(wb, `${file_name}.xlsx`);
};
