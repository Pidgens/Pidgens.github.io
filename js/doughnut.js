
// Any of the following formats may be used
var ctx = document.getElementById("myChart").getContext("2d");
ctx.canvas.width = 50;
ctx.canvas.height = 50;
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Python", "Blank"],
        datasets: [{
            label: 'PYTHON',

            data: [15, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255,255,255, 0.9)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(0,0,0,0)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
            display: true,
            text: 'PYTHON'
        },
        legend: {
            display: false,
        }

    }

});

var javaChart = document.getElementById("javaChart").getContext("2d");
javaChart.canvas.width = 50;
javaChart.canvas.height = 50;
var javaChart = new Chart(javaChart, {
    type: 'doughnut',
    data: {
        labels: ["Java", "Blank"],
        datasets: [{
            label: "JAVA",

            data: [15, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(0,0,0,0)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(0,0,0,0)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
            display: true,
            text: 'JAVA'
        },
        legend: {
            display: false,
        }


    }

});


var cChart = document.getElementById("cChart").getContext("2d");
cChart.canvas.width = 50;
cChart.canvas.height = 50;
var cChart = new Chart(cChart, {
    type: 'doughnut',
    data: {
        labels: ["C", "Blank"],
        datasets: [{
            label: 'C',
            data: [15, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255,255,255, 0.9)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(0,0,0,0)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
            display: true,
            text: 'C'
        },
        legend: {
            display: false,
        }


    }

});