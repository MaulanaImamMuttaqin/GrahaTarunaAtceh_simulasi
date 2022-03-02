let test_id;
let participant_list;





const set_test_id = (id) => {
    test_id = id
    $("#modal_test_id").html(`id: ${id}`)
}
const Upload = () => {
    //Reference the FileUpload element.
    var fileUpload = document.getElementById("fileUpload");

    //Validate whether File is valid Excel file.
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();

            //For Browsers other than IE.
            if (reader.readAsBinaryString) {
                reader.onload = function (e) {
                    ProcessExcel(e.target.result);
                };
                reader.readAsBinaryString(fileUpload.files[0]);
            } else {
                //For IE Browser.
                reader.onload = function (e) {
                    var data = "";
                    var bytes = new Uint8Array(e.target.result);
                    for (var i = 0; i < bytes.byteLength; i++) {
                        data += String.fromCharCode(bytes[i]);
                    }
                    ProcessExcel(data);
                };
                reader.readAsArrayBuffer(fileUpload.files[0]);
            }
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid Excel file.");
    }
};


const ProcessExcel = (data) => {
    //Read the Excel File data.
    var workbook = XLSX.read(data, {
        type: 'binary'
    });
    $("#excel_table_body").empty()
    //Fetch the name of First Sheet.
    var firstSheet = workbook.SheetNames[0];

    //Read all rows from First Sheet into an JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

    excelRows.forEach((r, i) => {

        r.test_id = String(test_id)
        r.name = r.nama
        delete r.no
        delete r.nama
        renderPesertaRow(i + 1, r.user_id, r.name)
    })
    participant_list = excelRows
    $("#excel_table").removeClass("hidden")

};

const uploadData = () => {
    upload(participant_list)
}

const upload = (data) => {
    let formData = new FormData()
    formData.append('data', JSON.stringify(data))
    $.ajax({
        url: `http://localhost:8080/operator/add_participant/`,
        type: "POST",
        cache: false,
        data: formData,
        processData: false,
        contentType: false,
        dataType: "JSON",
        success: function (data) {
            console.log(data)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("error")
        }
    });
}

const renderPesertaRow = (index, userId, name) => {
    let element = `
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 text-center text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${index}
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            ${userId}
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            ${name}
        </td>
    </tr>
    `
    $("#excel_table_body").append($(element))
}

const closeFileModal = () => {
    $("#fileUpload").val('');
    $("#excel_table").addClass("hidden")
    $("#excel_table_body").empty()
    toggleModal("pesertaModal", false)
}