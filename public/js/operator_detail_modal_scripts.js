let participant_results = []

let detail_data = {}
let result_index = 0;


const exportToSpreadSheet = () => {
    let data_to_export = [];
    participant_results.forEach((d, i) => {
        let data = {
            No: i + 1,
            ID: d.user_id,
            Nama: d.name,
            Hasil: d.result ? d.result.test_final_score.final_result : 'N/A'
        }
        data_to_export.push(data)
    })

    let binaryWS = XLSX.utils.json_to_sheet(data_to_export);

    // Create a new Workbook
    var wb = XLSX.utils.book_new()

    // Name your sheet
    XLSX.utils.book_append_sheet(wb, binaryWS, 'Hasil Tes')

    // export your excel
    XLSX.writeFile(wb, 'Hasil Tes Kecermatan.xlsx');
}

const toTestPage = () => {
    console.log(`${base_url}/test/index/${detail_data.test_id}`)
    window.open(`${base_url}/test/index/${detail_data.test_id}`);
}

const editDetailMode = (el,) => {
    if (!$(el).hasClass("edit")) {
        $(`#detail_question_total`).html(`<input id="edit_question_total" type='number' class='rounded-lg border border-gray-200 w-16 text-black h-full' value='${detail_data.question_total}'>`)
        $(`#detail_duration`).html(`<input id="edit_duration" type='number' class='rounded-lg border border-gray-200 w-16 text-black h-full' value='${detail_data.duration}'>`)
        $(`#detail_test_start_at`).html(`<input id="edit_test_start_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${detail_data.test_start_at.replace(" ", "T")}'>`)
        $(`#detail_test_end_at`).html(`<input id="edit_test_end_at" type='datetime-local' class='rounded-lg border border-gray-200 w-40 text-xs px-0 pl-2 text-black h-full' value='${detail_data.test_end_at.replace(" ", "T")}'>`)
        $(el).addClass("edit")
        $("#update-detail-test-button").removeClass("hidden")

    } else {
        $(el).removeClass("edit")
        renderDetailData(detail_data)
        $("#update-detail-test-button").addClass("hidden")
    }
}

const updateDetailTest = () => {
    let formData = new FormData();

    formData.append("id", detail_data.id)
    formData.append("question_total", $(`#edit_question_total`).val())
    formData.append("duration", $(`#edit_duration`).val())
    formData.append("test_start_at", $(`#edit_test_start_at`).val())
    formData.append("test_end_at", $(`#edit_test_end_at`).val())

    $.ajax({
        url: `${base_url}/operatorApi/update_test_detail`,
        type: "POST",
        cache: false,
        data: formData,
        processData: false,
        contentType: false,
        dataType: "JSON",
        success: function (data) {
            render_message(`Tes '${detail_data.test_id}' berhasil diupdate`)
            $("#test_list_table tbody").html(data.html)
            closeDetailModal()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("error")
            $("#modal-loading").toggleClass("hidden")
        }
    });
}

const deleteParticipantsTestResult = () => {
    let delete_is_confirmed = confirm("Anda Yaking menghapus Data ini, Peserta Harus mengulangi Tes Ini")
    let data = participant_results[result_index]
    let formData = new FormData();

    formData.append("result_test_id", data.id)

    if (delete_is_confirmed) {
        $.ajax({
            url: `${base_url}/operatorApi/delete_participant_result`,
            type: "POST",
            cache: false,
            data: formData,
            processData: false,
            contentType: false,
            dataType: "JSON",
            success: function (res) {
                render_message(`Hasil Tes Peserta '${data.user_id}' pada tes '${data.test_id}' berhasil dihapus`)
                closeDetailModal()
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error")
                $("#modal-loading").toggleClass("hidden")
            }
        });
    }
}

const copyTestURL = () => {
    navigator.clipboard.writeText(detail_data.test_id);
    $("#tooltip-copy-url").html("berhasil di salin")
}
const TestURLCopied = () => {
    $("#tooltip-copy-url").html("Salin ID Tes")
}

const closeDetailModal = () => {
    $("#participant_result_modal").addClass("hidden")
    $("#participant_list_table").addClass("hidden")
    $("#participant_result_table tbody tr").not(".participant-result-row").remove();
    participant_results = []
    detail_data = {}
    renderDetailData(detail_data)
    $("#update-detail-test-button").addClass("hidden")
    toggleModal("detailModal", false)

}
const openDetailModal = (id) => {
    toggleModal("detailModal", true)
    $("#modal-loading").toggleClass("hidden")
    $.ajax({
        url: `${base_url}/operatorApi/get_test_detail/${id}`,
        type: "GET",
        success: function (data) {
            detail_data = data.data
            renderDetailData(detail_data)
            renderDetailTable(data.participant_list)
            $("#modal-loading").toggleClass("hidden")
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("error")
            $("#modal-loading").toggleClass("hidden")
        }
    });
}


const renderDetailData = ({ test_id, question_total, duration, total_participant, test_start_at, test_end_at, auto, number_digits }) => {
    $(`#detail_test_id`).html(test_id ? test_id : '')
    $(`#detail_question_total`).html(question_total ? question_total : '')
    $(`#detail_duration`).html(duration ? duration : '')
    $(`#detail_total_participant`).html(total_participant ? total_participant : '0')
    $(`#detail_test_start_at`).html(test_start_at ? test_start_at : '')
    $(`#detail_test_end_at`).html(test_end_at ? test_end_at : '')
    $(`#detail_mode`).html(auto == 1 ? "Auto" : "Manual")
    $(`#detail_number_digits`).html(number_digits > 0 ? number_digits : '?')
    console.log(auto)
}

const renderDetailTable = (data) => {
    $("#participant_list_table_body").html("")

    if (data.length !== 0) {
        data.forEach((row, index) => {
            row.result = JSON.parse(row.result)
            participant_results.push(row)
            render_participant_list_detail(index + 1, row.user_id, row.name, row.result)
        })
    } else {
        render_participant_list_detail("-", "-", "-", null)
    }

    console.log(participant_results)
}




const render_participant_list_detail = (index, userId, name, result) => {
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
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            ${result ?
            result.test_final_score.final_result
            : 'N/A'
        }
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            ${result ?
            `<button onclick="showParticipantResult(${index - 1})"  class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 text-center">Hasil</button>`
            : 'N/A'
        }
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            ${name !== '-' ?
            `<button onclick="deleteParticipant(${index - 1})"  class="text-white bg-red-500 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center">
                    <i class="fa-solid fa-trash-can"></i>  
                </button>`
            : 'N/A'
        }
        </td>
    </tr>
    `
    $("#participant_list_table_body").append($(element))
}

const deleteParticipant = (index) => {

    let data = participant_results[index]
    console.log(data)
    let delete_is_confirmed = confirm("Anda Yaking menghapus Peserta ini, Peserta tidak akan dapat mengikuti tes ini lagi")

    let formData = new FormData();

    formData.append("result_test_id", data.id)

    if (delete_is_confirmed) {
        $.ajax({
            url: `${base_url}/operatorApi/delete_participant`,
            type: "POST",
            cache: false,
            data: formData,
            processData: false,
            contentType: false,
            dataType: "JSON",
            success: function (res) {
                render_message(`Peserta '${data.user_id}' pada tes '${data.test_id}' berhasil dihapus`)
                closeDetailModal()
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error")
                $("#modal-loading").toggleClass("hidden")
            }
        });
    }
}


const showParticipantResult = (index) => {
    result_index = index;
    console.log(participant_results[index].result)
    $("#participant_result_modal").removeClass("hidden")
    $("#participant_list_table").addClass("hidden")
    renderParticipantTestResult()
    // $("#participant_test_result").html(participant_results[index].result)
}
const Round = (num) => {
    if (typeof num === "string") {
        num = parseFloat(num)
    }
    return Math.round((num + Number.EPSILON) * 100) / 100
}
const renderParticipantTestResult = () => {
    let data = participant_results[result_index]
    $("#participant_result_name").html(data.name)
    $("#participant_result_id").html(data.user_id)
    $("#participant_result_is_passed").html(data.is_passed == 1 ? "Lulus" : "Tidak Lulus")
    $("#participant_result_final_result").html(Round(data.result.test_final_score.final_result))
    $("#participant_result_final_result").removeClass("bg-blue-500 bg-red-500")
    $("#participant_result_final_result").addClass(data.is_passed == 1 ? 'bg-blue-500' : 'bg-red-500')
    $("#participant_result_speed").html(Round(data.result.test_final_score.kecepatan))
    $("#participant_result_speed_final").html(Round(data.result.test_final_score.kecepatan_final))
    $("#participant_result_accuracy").html(Round(data.result.test_final_score.ketelitian))
    $("#participant_result_accuracy_final").html(Round(data.result.test_final_score.ketelitian_final))
    $("#participant_result_endurance").html(Round(data.result.test_final_score.ketahanan))
    $("#participant_result_endurance_final").html(Round(data.result.test_final_score.ketahanan_final))
    $("#participant_result_factor_total").html(Round(data.result.test_final_score.ketahanan + data.result.test_final_score.ketelitian + data.result.test_final_score.kecepatan))
    $("#participant_result_final_result_total").html(Round(data.result.test_final_score.final_result))
    $("#participant_result_total_answered").html(Round(data.result.overall.total))
    $("#participant_result_total_wrong").html(Round(data.result.overall.wrong))
    $("#participant_result_total_correct").html(Round(data.result.overall.correct))

    renderParticipantTestResultTable(data.result.detail)
    // $("#participant_result_accuracy").html(data.result.test_final_score.)

}

const renderParticipantTestResultTable = (data) => {
    let table_body = ''
    data.forEach((d, i) => {
        let element =
            `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-1 text-center text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${i + 1}
            </td>
            <td class="py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                ${d.question_number}
            </td>
            <td class="py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                ${d.total}
            </td>
            <td class="py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                ${d.wrong}
            </td>
            <td class="py-1 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                ${d.correct}
            </td>
        </tr>`
        table_body += element
    })

    $("#participant_result_table tbody").prepend(table_body)
}
const toggleParticipantListTable = () => {
    $("#participant_list_table").toggleClass("hidden")
    $("#participant_result_modal").addClass("hidden")
    $("#participant_result_table tbody tr").not(".participant-result-row").remove();
}

const closeParticipantResultModal = () => {
    $("#participant_result_modal").addClass("hidden")
    $("#participant_list_table").removeClass("hidden")
    $("#participant_result_table tbody tr").not(".participant-result-row").remove();
    // $("#participant_test_result").html("")
}