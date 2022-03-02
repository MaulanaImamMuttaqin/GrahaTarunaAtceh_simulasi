
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
        // console.log($(this))
        // console.log(e.target)
        let formData = new FormData(this)

        formData.append("test_id", Math.floor(100000000 + Math.random() * 900000000))
        $.ajax({
            url: "http://localhost:8080/operator/add_test",
            type: "POST",
            cache: false,
            data: formData,
            processData: false,
            contentType: false,
            dataType: "JSON",
            success: function (data) {
                $("tbody").html(data.html)
                render_message("Data berhasil ditambahkan.")
                $(this).trigger("reset");
                toggleModal('addModal', false)
                $("#loading").toggleClass("hidden")
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error")
                $("#loading").toggleClass("hidden")
            }
        });
    })
})


const render_message = (message) => {
    toggleCollapse('message', true)
    $(".message").html(message)
}

const deleteRow = id => {
    let conf = confirm("anda yakin menghapus tes dengan id '" + id + "'")

    if (conf) {
        $("#loading").toggleClass("hidden")
        $.ajax({
            url: `http://localhost:8080/operator/delete_test/${id}`,
            type: "DELETE",
            success: function (data) {
                console.log(data)
                $("tbody").html(data.html)
                render_message("Tes berhasil dihapus.")
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

