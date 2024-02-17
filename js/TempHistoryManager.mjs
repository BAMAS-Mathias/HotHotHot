class TempHistoryManager{

    constructor(historyCanvaId) {
        this._historyContainerElemId = historyCanvaId;
        this.chart = new Chart(document.getElementById(historyCanvaId), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Temperature',
                    data: [],
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
        })
    }

    update(temp){
        this.addValue(temp);
    }

    addValue(temp){
        this.chart.data.labels.push(temp.date)
        this.chart.data.datasets[0].data.push(temp.value);
        this.chart.update();
    }
}

export {TempHistoryManager}