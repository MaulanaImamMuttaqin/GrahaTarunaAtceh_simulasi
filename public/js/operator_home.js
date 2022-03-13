function renderDonutChart(data_ratio) {
    let ratio_array = [0, 0, 0]
    console.log(data_ratio)
    for (let a = 0; a <= 2; a++) {
        if (data_ratio[a]?.is_passed === '-') {
            ratio_array[2] = data_ratio[a].total
        } else if (data_ratio[a]?.is_passed === '1') {
            ratio_array[0] = data_ratio[a].total
        } else if (data_ratio[a]?.is_passed === '0') {
            ratio_array[1] = data_ratio[a].total
        }
    }
    const labels = [
        'Lulus',
        'Tidak Lulus',
        'Belum Mulai',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'My First ',
            data: ratio_array,
            backgroundColor: [
                'rgb(54, 83, 209)',
                'rgb(196, 69, 73)',
                'rgb(222, 220, 220)'
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    };

    const myChart = new Chart(
        document.getElementById('donut-chart'),
        config
    );
}


function renderBarChart(data_list) {
    console.log(data_list)

    const labels = []
    const backgroundColor = []
    const borderColor = []
    const scores = []

    data_list.forEach(d => {
        labels.push(d.test_id)
        backgroundColor.push('rgba(54, 83, 209, 0.2)')
        borderColor.push('rgb(48, 22, 242)')
        scores.push(parseFloat(d.score))
    })
    console.log(scores)
    const data = {
        labels: labels,
        datasets: [{
            label: 'Nilai Rata-Rata Tes',
            data: scores,
            backgroundColor,
            borderColor,
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            maintainAspectRatio: false
        },
    };


    const myChart = new Chart(
        document.getElementById('bar-chart'),
        config
    );
}

renderBarChart(avg_score_list)
renderDonutChart(count_ratio)