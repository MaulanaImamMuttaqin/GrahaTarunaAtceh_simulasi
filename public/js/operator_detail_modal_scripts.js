let participant_results = []

let detail_data = {}
let result_index = 0;

const editDetailMode = (el) => {
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
    toggleModal("detailModal", false)
    editDetailMode($(".edit"))
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


const renderDetailData = ({ test_id, question_total, duration, total_participant, test_start_at, test_end_at }) => {
    $(`#detail_test_id`).html(test_id ? test_id : '')
    $(`#detail_question_total`).html(question_total ? question_total : '')
    $(`#detail_duration`).html(duration ? duration : '')
    $(`#detail_total_participant`).html(total_participant ? total_participant : '')
    $(`#detail_test_start_at`).html(test_start_at ? test_start_at : '')
    $(`#detail_test_end_at`).html(test_end_at ? test_end_at : '')
}

const renderDetailTable = (data) => {
    $("#participant_list_table_body").html("")

    if (data.length !== 0) {
        data.forEach((row, index) => {
            row.result = JSON.parse(row.result)
            participant_results.push(row)
            render_participant_list_detail(index, row.user_id, row.name, row.result)
        })
        return;
    }
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
    result_index = index;
    console.log(participant_results[index].result)
    $("#participant_result_modal").removeClass("hidden")
    $("#participant_list_table").addClass("hidden")
    renderParticipantTestResult()
    // $("#participant_test_result").html(participant_results[index].result)
}

const renderParticipantTestResult = () => {
    let data = participant_results[result_index]
    console.log(data)
    $("#participant_result_name").html(data.name)
    $("#participant_result_id").html(data.user_id)
    $("#participant_result_final_result").html(data.result.test_final_score.final_result)
    $("#participant_result_speed").html(data.result.test_final_score.kecepatan)
    $("#participant_result_speed_final").html(data.result.test_final_score.kecepatan_final)
    $("#participant_result_accuracy").html(data.result.test_final_score.ketelitian)
    $("#participant_result_accuracy_final").html(data.result.test_final_score.ketelitian_final)
    $("#participant_result_endurance").html(data.result.test_final_score.ketahanan)
    $("#participant_result_endurance_final").html(data.result.test_final_score.ketahanan_final)
    $("#participant_result_factor_total").html(data.result.test_final_score.ketahanan + data.result.test_final_score.ketelitian + data.result.test_final_score.kecepatan)
    $("#participant_result_final_result_total").html(data.result.test_final_score.final_result)
    $("#participant_result_total_answered").html(data.result.overall.total)
    $("#participant_result_total_wrong").html(data.result.overall.wrong)
    $("#participant_result_total_correct").html(data.result.overall.correct)

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
}

const closeParticipantResultModal = () => {
    $("#participant_result_modal").addClass("hidden")
    $("#participant_list_table").removeClass("hidden")
    $("#participant_result_table tbody tr").not(".participant-result-row").remove();
    // $("#participant_test_result").html("")
}