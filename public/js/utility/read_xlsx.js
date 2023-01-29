// @ts-ignore
import readXlsxFile from "../js_vendor/_snowpack/pkg/read-excel-file.js";
export class ReadXLSX {
    constructor(element) {
        this.file = [];
        this.element = element;
        this.readData();
    }
    readData() {
        let fileUpload = this.element;
        fileUpload.addEventListener('change', () => {
            // @ts-ignore
            if (fileUpload.files[0]) {
                // @ts-ignore
                readXlsxFile(fileUpload.files[0]).then((rows) => {
                    let objs = [];
                    rows.forEach((r, i) => {
                        if (i === 0) {
                            return;
                        }
                        let obj = {};
                        rows[0].forEach((sr, si) => {
                            obj[sr] = String(r[si]);
                        });
                        objs.push(obj);
                    });
                    this.file = objs;
                });
            }
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
