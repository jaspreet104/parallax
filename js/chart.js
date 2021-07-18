var myChart1;
var xaxis;

function fillDates() {
    var xaxis = [];
    for (i = -300; i < 0; i++) {
        xaxis.push(moment().add(i, 'd').format("DD MMM YYYY"))
    }
    return xaxis;
}

function drawChart1(divName, stockName) {

    var words = stockName.split(" ");

    var myData =  stockData[words[0]];

    var ctx = document.getElementById(divName).getContext('2d');

    if (!xaxis) {
        xaxis = fillDates();
    }

    if (myChart1) {
        myChart1.destroy();
    }

    if (!myData) {
        return;
    }

    myChart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xaxis,
            datasets: [{
                label: stockName,
                data: myData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}
