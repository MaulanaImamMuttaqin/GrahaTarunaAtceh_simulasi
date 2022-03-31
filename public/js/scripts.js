let nth_question = 0
let currentQuestion = ''
let started = false
let duration;
let timer;
let interval;
let index_num_removed = [];

let testStatus = {
    isStart: false,
    isFinish: false,
    currentTime: parseInt(TestConfiguration.duration),
    nth_question: 0,
    question_list
}
let score = {
    overall: {
        total: 0,
        wrong: 0,
        correct: 0
    },
    detail: []
}



$(document).ready(() => {
    // mengatur soal
    preTestConfiguration()
    // kasih event ke radio button kalau ditekan
    // $("input[name='answer']").each(() => {

    //     this.addEventListener("mouseup", onClickRadioButton)
    // })
    $('input[name="answer"]').each(function () {
        $(this).on("click", function () { onClickRadioButton(this) })
    })
});




// fungsi untuk mengatur konfigurasi awal dari test
const preTestConfiguration = () => {
    if (!getTestStatus()) {
        storeTestStatus(testStatus)
    } else {
        testStatus = JSON.parse(getTestStatus())
    }

    if (!TestConfiguration.auto) {
        TestConfiguration.number_digits = question_list[0].split("").length
    }
    // merender html container buat angka dan pilihan jawaban
    setNumberContainerAndChoices(TestConfiguration)
    duration = TestConfiguration.duration;

    if (testStatus.isStart) {
        console.log("test is start")
        continueTest();
    } else {

        storeScore(score)
        if (TestConfiguration.auto) {
            question_list = numbersGenerator(TestConfiguration)

            console.log(question_list)
        }
        else if (!TestConfiguration.auto) {

            console.log(TestConfiguration.number_digits)
            question_list = shuffle(question_list, TestConfiguration.question_total)
            console.log(question_list)
        }
        question_list.forEach(q => {
            score.detail.push({
                question_number: q,
                total: 0,
                wrong: 0,
                correct: 0,
                tot_diff: null,
                stability: null
            })
        })
        testStatus.question_list = question_list

        timer = duration
        renderTimer(timer)
        renderNthNumbers(0)
    }

}

function shuffle(array, left) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    array.splice(left, array.length - left);
    return array;
}


const continueTest = () => {
    console.log("continue test")
    nth_question = testStatus.nth_question
    score = JSON.parse(getScore())
    question_list = testStatus.question_list
    timer = testStatus.currentTime
    renderTimer(timer)
    renderNthNumbers(nth_question)
    startTest()
}

const resetNumberContainerAndChoices = () => {
    $("p.numbers").each(function () {
        $(this).html('0')
    })
}

const setNumberContainerAndChoices = ({ number_digits }) => {
    console.log("rendering ", number_digits)
    for (let i = 0; i < number_digits; i++) {
        renderNumberContainers((i + 10).toString(36))
        renderChoicesContainer((i + 10).toString(36))
    }
}

const roundNumber = (num, scale) => {
    if (!("" + num).includes("e")) {
        return +(Math.round(num + "e+" + scale) + "e-" + scale);
    } else {
        var arr = ("" + num).split("e");
        var sig = ""
        if (+arr[1] + scale > 0) {
            sig = "+";
        }
        return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
    }
}

const renderResult = (data) => {
    let roundedResults = roundNumber(data.test_final_score.final_result, 3)
    $("#final_result").html(`${roundedResults}`)
}

// const renderResult = (data) => {
//     let detail = data.detail
//     $(".all-total").html(data.overall.total)
//     $(".all-correct").html(data.overall.correct)
//     $(".all-wrong").html(data.overall.wrong)
//     $("#tot_answered").html(`${Object.keys(detail).length} dari ${question_list.length} soal terjawab`)

//     detail.forEach((d, index) => {
//         renderQuestionResult(index, d)
//     })
// }

// const renderQuestionResult = (index, d) => {
//     let detail = `
//     <div class="flex items-center">
//         <div class="min-w-[100px]">
//             <span class="soal">${d.question_number}</span>
//         </div>
//         <span class="mx-2"><i class="fa-solid fa-arrow-right"></i></span>
//         <span class="total">${d.total}</span>/
//         <span class="correct">${d.correct}</span>/
//         <span class="wrong">${d.wrong}</span
//     </div>
//     `
//     $(".detail").append($(detail))
// }

const renderChoicesContainer = (choices) => {
    let choicesContainer = `
        <div class="flex flex-col text-center font-semibold ">
            <p>${choices}</p>
            <input class="questionChoices hover:cursor-pointer hover:bg-blue-300 focus:ring-0" type="radio" id="answer" name="answer"
                value="">
        </div>
    `
    $("#choices").append($(choicesContainer))
}


const renderNumberContainers = (choices) => {
    let numberContainer = `
        <div class="numbers-container">
            <h1 class="numbers ">0</h1>
            <h1 class="">${choices}</h1>
        </div>
    `
    $("#soal").append($(numberContainer))
}

const numbersGenerator = ({ question_total, number_digits }) => {
    let questions = []
    while (questions.length < question_total) {
        let number = []
        while (number.length < number_digits) {
            let number_digits = String(Math.floor(Math.random() * 10));
            if (!number.includes(number_digits)) number.push(number_digits)
        }
        questions.push(number.join(""))
    }

    return questions
}


// fungsi untuk memulai test
const startTest = () => {

    testStatus = {
        ...testStatus,
        isStart: true,
        isFinish: false
    }
    storeTestStatus(testStatus)
    setNumbers()
    setQuestion()

    if (!started) {
        startTimer()
    }
    $("#start-test").addClass("hidden")
    $("#soal").removeClass("hidden")
    $("#pertanyaan").removeClass("hidden")

}


// fungsi untuk menghentikan test
const TestFinish = () => {
    testStatus = {
        isStart: false,
        isFinish: false,
        currentTime: parseInt(TestConfiguration.duration),
        nth_question: 0,
        question_list
    }
    storeTestStatus(testStatus)
    clearInterval(interval)
    renderNthNumbers(question_list.length)
    $("#message").removeClass("hidden")
    $("#pertanyaan").addClass("hidden")
    $("#soal").addClass("hidden")
    resetNumberContainerAndChoices()

    calculateTestResult(score)
    renderResult(score)
    toggleModal('resultModal', true)

    uploadResult()
    console.log(score)
}

const calculateTestResult = (data) => {

    let tot_diff_total = data.detail.reduce((total, each) => {
        return total + each.tot_diff
    }, 0)

    let total_ketahanan = data.detail.reduce((total, each) => {
        return total + each.stability
    }, 0)

    let ketahanan = total_ketahanan / (data.detail.length - 1)
    let ketahanan_final = ketahanan * 0.3
    let ketelitian = 100 - (data.overall.wrong * 5)
    let ketelitian_final = ketelitian * 0.35
    let kecepatan = (data.overall.total / (40 * data.detail.length)) * 100
    let kecepatan_final = kecepatan * 0.35
    let final_result = ketahanan_final + ketelitian_final + kecepatan_final

    score["test_final_score"] = {
        ketahanan,
        ketelitian,
        kecepatan,
        kecepatan_final,
        ketelitian_final,
        ketahanan_final,
        final_result
    }
    score.overall.tot_diff_total = tot_diff_total
    score.overall.total_ketahanan = total_ketahanan
}

const uploadResult = () => {
    let formData = new FormData()
    formData.append('result_test_id', TestConfiguration.result_test_id)
    formData.append('result', JSON.stringify(score))

    $.ajax({
        url: `${base_url}/testApi/submit_result`,
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

// fungsi untuk memberikan event listener ke radio button
const onClickRadioButton = function (el) {
    let value = el.value


    if (value === undefined || value === "") return null

    // if (!score.detail[question_list[nth_question]]) score.detail[question_list[nth_question]] = initial_score

    if (!currentQuestion.includes(value)) {
        score.detail[nth_question].correct++
        score.overall.correct++
    } else {
        score.detail[nth_question].wrong++
        score.overall.wrong++
    }




    score.detail[nth_question].total++
    score.overall.total++

    if (nth_question > 0) {
        score.detail[nth_question].tot_diff = score.detail[nth_question - 1].total - score.detail[nth_question].total
        score.detail[nth_question].stability = 100 - (Math.abs(score.detail[nth_question].tot_diff) * 5)
    }



    storeScore(score)
    $(el).prop("checked", false)
    if (score.detail[nth_question].total >= 40) {
        renderNewNumbers()
        return;
    }
    setQuestion()

    // acak pertanyaan yang baru
}

// fungsi untuk menyimpan data ke dalam browser localstorage
const storeScore = (data) => {
    localStorage.setItem("score", JSON.stringify(data))
}

const getScore = () => {
    return localStorage.getItem("score")
}

const storeTestStatus = (data) => {
    localStorage.setItem("test_status", JSON.stringify(data))
}

const getTestStatus = () => {
    return localStorage.getItem("test_status")
}


// fungsi untuk mengacak angka untuk pertanyaan selanjutnya
const setQuestion = () => {
    // cetak pertanyaan secara random di kotak pertanyaan
    currentQuestion = question_list[nth_question] && question_list[nth_question].shuffle().split("")
    $(".question").html(currentQuestion)
}


// fungsi untuk mencetak angka dan value options ke html 
const setNumbers = () => {
    // mencetak angka dari soal ke html dan menset nilai optionsnya
    $(".numbers").each((i, obj) => {
        console.log(question_list[0])
        let value = question_list[nth_question].split("")
        obj.innerHTML = value[i]
    })
    $(".questionChoices").each((i, obj) => {
        obj.value = question_list[nth_question].split("")[i]
    })
}



// fungsi untuk memulai timer 
const startTimer = () => {
    started = true
    interval = setInterval(() => {

        timer--
        testStatus = {
            ...testStatus,
            currentTime: timer,
            nth_question
        }
        storeTestStatus(testStatus)
        if (timer < 0) {
            renderNewNumbers()
        }
        renderTimer(timer)

    }, 1000)
}



// fungsi untuk merender angka soal baru kalau timer sudah habis
const renderNewNumbers = () => {
    resetTimer()
    if (!(nth_question >= (question_list.length - 1))) {
        nth_question++
        renderNthNumbers(nth_question)
        setQuestion()
        setNumbers()
    } else {
        TestFinish()

    }
}



// fungsi untuk mereset timer
const resetTimer = () => {
    console.log(duration, "|", duration + 1)

    timer = parseInt(duration)
}

// fungsi untuk mencetak tinggal berapa soal lagi yang perlu di selesaikan
const renderNthNumbers = (n) => {
    $("#nth_question").html(question_list.length - n)
}


// fungsi untuk mencetak waktu dari timer ke html
const renderTimer = (time) => {

    let timeHMS = convertHMS(time)
    $("#timer").html(timeHMS)
}


// fungsi untuk mengubah waktu detik ke format jam:menit:detik
const convertHMS = (value) => {

    var date = new Date(null);

    date.setSeconds(value); // specify value for SECONDS here
    var result = date.toISOString().substr(11, 8);

    return result
}


// tambah method baru di obj String untuk mengacak karakter dalam string dan kurangin satu karakter
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length,
        rand;

    if (index_num_removed.length >= (n / 2)) index_num_removed = []

    do {
        rand = Math.floor(Math.random() * n)
    }
    while (index_num_removed.includes(rand))

    index_num_removed.push(rand)
    a.splice(rand, 1)
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }

    return a.join("");
}

