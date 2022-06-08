window.onload = () => {
    let chartTextColor = '#b9b9b9'
    let optionsLine = {
        chart: {
            height: "100%",
            width: "130%",
            foreColor: chartTextColor,
            toolbar: { show: false },
            type: 'line',
            zoom: { enabled: false },
            dropShadow: { enabled: false }
        },
        tooltip: { theme: "dark", style: { fontFamily: 'Inter' } },
        stroke: { curve: 'smooth', width: 2 },
        colors: ["#00F790", '#F7AA00'],
        series: [
            { name: "Produced", data: [2, 5, 7, 4, 2, 7] },
            { name: "Discarded", data: [5, 8, 9, 4, 9, 3] }
        ],
        markers: { size: 0, strokeWidth: 0, },
        grid: { borderColor: '#3d3d3d' },
        labels: [1, 2, 3, 4, 5, 6],
        xaxis: { 
            tooltip: { enabled: false },
            labels: { style: { colors: chartTextColor, fontFamily: 'Inter' } }
        },
        yaxis: {
            forceNiceScale: true,
            labels: { style: { colors: [chartTextColor], fontFamily: 'Inter' } }
        },
        legend: { position: 'bottom', horizontalAlign: 'center', fontFamily: 'Inter' },
        responsive: [
            {
                breakpoint: 1000,
                options: {
                }
            }
        ]
    }

    let chartLine = new ApexCharts(document.querySelector('#chart'), optionsLine);
    chartLine.render();
}
