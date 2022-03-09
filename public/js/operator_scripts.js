let questionRow = [];
let participant_results = []
$(function () {
    $("#nav_controller").on("click", (obj) => {
        $("#navbar").toggleClass("w-1/5").toggleClass("w-[6%]")
        $("#content").toggleClass("w-4/5").toggleClass("w-[94%]")
        $("#nav_controller").toggleClass("rotate-180")
    })

    $("#profile").on("click", () => {
        $("#profile_list").toggleClass("hidden")
    })

    $("#add_test_form").on("submit", function (e) {
        e.preventDefault()

        $("#loading").toggleClass("hidden")


        let formData = new FormData(this)

        formData.append("test_id", Math.floor(100000000 + Math.random() * 900000000))
        formData.append("auto", 1)
        $.ajax({
            url: `${base_url}/operatorApi/add_test`,
            type: "POST",
            cache: false,
            data: formData,
            processData: false,
            contentType: false,
            dataType: "JSON",
            success: function (data) {
                $("tbody").html(data.html)
                render_message(`Data berhasil ditambahkan dengan id: ${data.data.test_id}`)
                $("#add_test_form").trigger("reset");
                toggleModal('addModal', false)
                $("#loading").toggleClass("hidden")
                console.log(data)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR, textStatus, errorThrown)
                $("#loading").toggleClass("hidden")
            }
        });
    })

    $("#add_manual_test_form").on("submit", function (e) {
        let formData = new FormData()
        formData.append("questions_list", JSON.stringify(questionRow))
        formData.append("test_start_at", $("#manual-mulai").val())
        formData.append("test_end_at", $("#manual-akhir").val())
        formData.append("question_total", $("#manual-soal").val())
        formData.append("duration", $("#manual-durasi").val())
        formData.append("test_id", Math.floor(100000000 + Math.random() * 900000000))
        formData.append("auto", 0)
        console.log($("#dmanual-urasi").val())
        console.log(JSON.stringify(questionRow))
        $("#loading").toggleClass("hidden")
        $.ajax({
            url: `${base_url}/operatorApi/add_test_manual`,
            type: "POST",
            cache: false,
            data: formData,
            processData: false,
            contentType: false,
            dataType: "JSON",
            success: function (data) {
                $("tbody").html(data.html)
                render_message(`Data berhasil ditambahkan dengan id: ${data.data.test_id}`)
                $("#add_manual_test_form").trigger("reset");
                toggleModal('addModal', false)
                $("#loading").toggleClass("hidden")
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error")
                $("#loading").toggleClass("hidden")
            }
        });
    })




    $("#toggle-otomatis").on("click", function () {
        $("#add_manual_test_form").toggleClass("hidden")
        $("#add_test_form").toggleClass("hidden")
        $("#toggle-manual").toggleClass("hidden")
        $("#toggle-otomatis").toggleClass("hidden")
    })


    $("#toggle-manual").on("click", function () {
        $("#add_manual_test_form").toggleClass("hidden")
        $("#add_test_form").toggleClass("hidden")
        $("#toggle-otomatis").toggleClass("hidden")
        $("#toggle-manual").toggleClass("hidden")
    })
})
const closeDetailModal = () => {
    toggleModal("detailModal", false)
    $("#participant_result_modal").addClass("hidden")
    $("#participant_list_table").addClass("hidden")
    $("#participant_test_result").html("")
    participant_results = []
}
const openDetailModal = (id) => {
    toggleModal("detailModal", true)
    $("#modal-loading").toggleClass("hidden")
    renderDetailData("reset")
    $.ajax({
        url: `${base_url}/operatorApi/get_test_detail/${id}`,
        type: "GET",
        success: function (data) {
            console.log(data)
            renderDetailData(data.data)
            renderDetailTable(data.participant_list)
            $("#modal-loading").toggleClass("hidden")
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("error")
            $("#modal-loading").toggleClass("hidden")
        }
    });
}


const renderDetailData = (data) => {
    if (data === "reset") {
        data = {
            id: "",
            test_id: "",
            question_total: "",
            number_digits: "",
            duration: "",
            test_start_at: "",
            test_end_at: "",
            is_open: "",
            total_participant: "",
            description: "",
            auto: "",
            questions_list: ""
        }
    }
    Object.entries(data).forEach(([key, value], index) => {
        $(`#detail_${key}`).html(value)
    })
}

const renderDetailTable = (data) => {
    $("#participant_list_table_body").html("")
    data.forEach((row, index) => {
        participant_results.push(row.result)
        render_participant_list_detail(index, row.user_id, row.name, row.result)
    })
}

const render_participant_list_detail = (index, userId, name, result) => {
    let element = `
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 text-center text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${index + 1}
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            ${userId}
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            ${name}
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            ${result ?
            `<button onclick="showParticipantResult(${index})"  class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 text-center">Hasil</button>`
            : 'N/A'
        }
        </td>
    </tr>
    `
    $("#participant_list_table_body").append($(element))
}

const showParticipantResult = (index) => {
    console.log(participant_results[index])
    $("#participant_result_modal").removeClass("hidden")
    $("#participant_list_table").addClass("hidden")
    $("#participant_test_result").html(participant_results[index])
}

const toggleParticipantListTable = () => {
    $("#participant_list_table").toggleClass("hidden")
}

const closeParticipantResultModal = () => {
    $("#participant_result_modal").addClass("hidden")
    $("#participant_list_table").removeClass("hidden")
    $("#participant_test_result").html("")
}

const readQuestionFile = () => {
    console.log(Upload("fileQuestionUpload"))
}

const render_message = (message) => {
    toggleCollapse('message', true)
    $(".message").html(message)
}

const deleteRow = id => {
    let conf = confirm("anda yakin menghapus tes dengan id '" + id + "'")

    if (conf) {
        $("#loading").toggleClass("hidden")
        $.ajax({
            url: `${base_url}/operatorApi/delete_test/${id}`,
            type: "DELETE",
            success: function (data) {
                console.log(data)
                $("tbody").html(data.html)
                render_message(`Tes berhasil dihapus.`)
                $("#loading").toggleClass("hidden")
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error")
                $("#loading").toggleClass("hidden")
            }
        });
    }
    console.log(conf && id)
}

const UploadQuestionsFile = () => {
    //Reference the FileUpload element.
    var fileUpload = document.getElementById("fileQuestionUpload");
    console.log(fileUpload)
    //Validate whether File is valid Excel file.
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();

            //For Browsers other than IE.
            if (reader.readAsBinaryString) {
                reader.onload = function (e) {
                    ProcessExcelsQuestion(e.target.result);
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

                    ProcessExcelsQuestion(data);
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


const ProcessExcelsQuestion = (data) => {
    //Read the Excel File data.
    var workbook = XLSX.read(data, {
        type: 'binary'
    });
    //Fetch the name of First Sheet.
    var firstSheet = workbook.SheetNames[0];

    //Read all rows from First Sheet into an JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
    alert("data berhasil dimasukkan")
    excelRows.forEach(r => {
        questionRow.push(r["soal"])
    })

};  