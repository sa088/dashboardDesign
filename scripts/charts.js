document.addEventListener('DOMContentLoaded', function () {

    // Debit & Credit Overview Chart
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Debit',
                data: [10, 6, 4, 16, 8, 10, 12],
                backgroundColor: '#1A16F3',
                borderColor: '#1A16F3',
                borderWidth: 1,
                borderRadius: 10,
                borderSkipped: false,
                maxBarThickness: 15
            }, {
                label: 'Credit',
                data: [16, 14, 12, 10, 20, 6, 10],
                backgroundColor: '#FCAA0B',
                borderColor: '#FCAA0B',
                borderWidth: 1,
                borderRadius: 10,
                borderSkipped: false,
                barThickness: 15
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'start',
                    labels: {
                        usePointStyle: true,
                    }
                }
            },
            scales: {
                y: {
                    display: false,
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#718EBF',
                    }
                }
            },
            elements: {
                bar: {
                    borderRadius: 10,
                }
            }
        }
    });

    // Monthly Revenue Chart
    const ctx2 = document.getElementById('myChart2').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
            datasets: [{
                label: 'Revenue',
                data: [10000, 20000, 12000, 32000, 24000, 35000],
                borderColor: '#16DBCC',
                borderWidth: 3,
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 0,
                cubicInterpolationMode: 'monotone',
                tension: 0.5
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return '$' + value.toLocaleString();
                        },
                        maxTicksLimit: 6,
                        color: '#718EBF',
                    },
                    grid: {
                        drawBorder: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                        borderDash: [5, 5],
                    },
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        color: '#718EBF',
                    }
                }
            }
        }
    });

});
