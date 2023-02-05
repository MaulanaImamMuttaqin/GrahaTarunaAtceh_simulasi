// @ts-ignore
import { read, utils, writeFile } from "../js_vendor/_snowpack/pkg/xlsx.js"

export class ReadXLSX {
    element: HTMLInputElement
    file: Array<any> = [];
    data: any

    constructor(element: HTMLInputElement) {
        this.element = element
        this.readData()
    }

    readData() {
        let fileUpload = this.element;

        fileUpload.addEventListener('change', (e: any) => {
            let selectedFile = e.target.files[0]
            let reader = new FileReader();
            reader.onload = (evt) => {
                let data = evt.target?.result;
                let workbook = read(data, {
                    type: 'binary'
                })

                workbook.SheetNames.forEach((sheetName: any) => {
                    let XL_row_object = utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    console.log(XL_row_object)
                    this.file = XL_row_object
                })
            }

            reader.onerror = function (event: any) {
                console.error("File could not be read! Code " + event.target.error.code)
            }

            reader.readAsBinaryString(selectedFile)

        })

    }
    removeFileValue() {
        this.element.value = '';
        this.file = []
    }
    getData() {
        return this.file;
    }

    setNewData(data: any) {
        this.data = data
    }

    getNewData() {
        return this.data
    }
    // element: HTMLInputElement
    // file: Array<any> = [];
    // data: any

    // constructor(element: HTMLInputElement) {
    //     this.element = element
    //     this.readData()
    // }

    // private readData(): void {
    //     let fileUpload = this.element as HTMLInputElement;

    //     fileUpload.addEventListener('change', () => {
    //         // @ts-ignore
    //         if (fileUpload.files[0]) {
    //             // @ts-ignore
    //             readXlsxFile(fileUpload.files[0]).then((rows) => {
    //                 let objs: Array<any> = []

    //                 rows.forEach((r: any, i: number) => {
    //                     if (i === 0) {
    //                         return;
    //                     }
    //                     let obj: any = {}
    //                     rows[0].forEach((sr: any, si: number) => {
    //                         obj[sr] = String(r[si])
    //                     })

    //                     objs.push(obj)
    //                 })
    //                 this.file = objs
    //             })
    //         }

    //     })
    // }
    // removeFileValue() {
    //     this.element.value = '';
    //     this.file = []
    // }
    // getData(): Array<any> {
    //     return this.file;
    // }

    // setNewData(data: any): void {
    //     this.data = data
    // }

    // getNewData(): any {
    //     return this.data
    // }
}


export const ExportXLSX = (data: Array<any>, file_name: string): void => {
    let binaryWS = utils.json_to_sheet(data);

    // Create a new Workbook
    var wb = utils.book_new()

    // Name your sheet
    utils.book_append_sheet(wb, binaryWS, 'Binary values')

    // export your excel
    writeFile(wb, `${file_name}.xlsx`);
}