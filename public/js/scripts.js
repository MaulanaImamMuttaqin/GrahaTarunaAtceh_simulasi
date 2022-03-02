let question_list = []
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
    detail: {}
}



$(document).ready(() => {
    // mengatur soal
    preTestConfiguration()
    // kasih event ke radio button kalau ditekan
    $("input[name='answer']").each(() => {
        this.addEventListener("mouseup", onClickRadioButton)
    })
});

// fungsi untuk mengatur konfigurasi awal dari test
const preTestConfiguration = () => {
    if (!getTestStatus()) {
        storeTestStatus(testStatus)
    } else {
        testStatus = JSON.parse(getTestStatus())
    }

    // merender html container buat angka dan pilihan jawaban
    setNumberContainerAndChoices(TestConfiguration)
    duration = TestConfiguration.duration;
    if (testStatus.isStart) {
        continueTest();

    } else {

        storeScore(score)
        question_list = numbersGenerator(TestConfiguration)
        testStatus.question_list = question_list

        timer = duration
        renderTimer(timer)
        renderNthNumbers(0)
    }

}

const continueTest = () => {
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
    for (let i = 0; i < number_digits; i++) {
        renderNumberContainers((i + 10).toString(36))
        renderChoicesContainer((i + 10).toString(36))
    }
}

const renderResult = (data) => {
    let detail = data.detail
    $(".all-total").html(data.overall.total)
    $(".all-correct").html(data.overall.correct)
    $(".all-wrong").html(data.overall.wrong)
    $("#tot_answered").html(`${Object.keys(detail).length} dari ${question_list.length} soal terjawab`)

    Object.entries(detail).forEach(([key, value], index) => {
        renderQuestionResult(index, key, value)

    })
}

const renderQuestionResult = (index, key, prop) => {
    let detail = `
    <div class="flex items-center">
        <div class="min-w-[100px]">
            <span class="soal">${key}</span>
        </div>
        <span class="mx-2"><i class="fa-solid fa-arrow-right"></i></span>
        <span class="total">${prop.total}</span>/
        <span class="correct">${prop.correct}</span>/
        <span class="wrong">${prop.wrong}</span>
    </div>
    `
    $(".detail").append($(detail))
}

const renderChoicesContainer = (choices) => {
    let choicesContainer = `
        <div class="flex flex-col text-center font-semibold">
            <input class="questionChoices hover:cursor-pointer" type="radio" id="answer" name="answer"
                value="">
            <p>${choices}</p>
        </div>
    `
    $("#choices").append($(choicesContainer))
}


const renderNumberContainers = (choices) => {
    let numberContainer = `
        <div class="numbers-container">
            <p class="numbers ">0</p>
            <p>${choices}</p>
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

    $("#pertanyaan").removeClass("hidden")
    $("#start-test").addClass("hidden")
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
    resetNumberContainerAndChoices()
    renderResult(score)

    toggleModal('resultModal', true)

    uploadResult()
}


const uploadResult = () => {
    let formData = new FormData()
    formData.append('result_test_id', TestConfiguration.result_test_id)
    formData.append('result', JSON.stringify(score))

    $.ajax({
        url: `http://localhost:8080/test/submit_result/`,
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
const onClickRadioButton = (e) => {
    let initial_score = {
        total: 0,
        wrong: 0,
        correct: 0
    }


    let value = e.target.value
    if (value === undefined || value === "") return null

    if (!score.detail[question_list[nth_question]]) score.detail[question_list[nth_question]] = initial_score

    if (!currentQuestion.includes(value)) {
        score.detail[question_list[nth_question]].correct++
        score.overall.correct++
    } else {
        score.detail[question_list[nth_question]].wrong++
        score.overall.wrong++
    }

    score.detail[question_list[nth_question]].total++
    score.overall.total++


    e.target.checked = false
    storeScore(score)
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
        if (timer < 0) renderNewNumbers()
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

