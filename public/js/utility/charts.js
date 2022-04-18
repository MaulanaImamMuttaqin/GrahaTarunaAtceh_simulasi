export function renderDonutChart(data_ratio, selector) {
    var _a, _b, _c;
    let ratio_array = [0, 0, 0];
    console.log(data_ratio);
    for (let a = 0; a <= 2; a++) {
        if (((_a = data_ratio[a]) === null || _a === void 0 ? void 0 : _a.status) === '-1') {
            ratio_array[2] = data_ratio[a].total;
        }
        else if (((_b = data_ratio[a]) === null || _b === void 0 ? void 0 : _b.status) === '1') {
            ratio_array[0] = data_ratio[a].total;
        }
        else if (((_c = data_ratio[a]) === null || _c === void 0 ? void 0 : _c.status) === '0') {
            ratio_array[1] = data_ratio[a].total;
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
    //@ts-ignore
    const myChart = new Chart(document.getElementById(selector), config);
}
export function renderBarChart(data_chart, selector) {
    console.log(data_chart);
    const labels = [];
    const backgroundColor = [];
    const borderColor = [];
    const scores = [];
    data_chart.forEach((d) => {
        labels.push(d.test_id);
        backgroundColor.push('rgba(54, 83, 209, 0.2)');
        borderColor.push('rgb(48, 22, 242)');
        scores.push(parseFloat(d.score));
    });
    console.log(scores);
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
    //@ts-ignore
    const myChart = new Chart(document.getElementById('selector'), config);
}
