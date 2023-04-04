const ChartDay = document.querySelector("#ph_day");
const ChartWeek = document.querySelector("#ph_week");
const TodayBtn = document.querySelector("#ph_today");
const WeekBtn = document.querySelector("#last_week_ph");

function openChart (btn){
    if(btn == TodayBtn){
        TodayBtn.classList.add("button_selected");
        WeekBtn.classList.remove("button_selected");
        ChartDay.classList.remove("hidden");
        ChartWeek.classList.add("hidden");
    }
    else {
        TodayBtn.classList.remove("button_selected");
        WeekBtn.classList.add("button_selected");
        ChartDay.classList.add("hidden");
        ChartWeek.classList.remove("hidden");
    }
}

setTimeout(()=>{
    // pH POR DIA
    function getPh(variable, token, callback) {
    var url = 'https://industrial.api.ubidots.com/api/v1.6/variables/' + variable + '/values';
    var headers = {
    'X-Auth-Token': token,
    'Content-Type': 'application/json'
    };
    
    $.ajax({
    url: url,
    method: 'GET',
    headers: headers,
    success: function (res) {
    callback(res.results);
    }
    });
    }
    
    var chart = Highcharts.chart('ph_day', {
    chart: {
    type: 'line'
    },
    title: {
    text: 'Variação do pH água:'
    },
    xAxis: {
    type: 'datetime',
    },
    credits: {
    enabled: false
    },
    series: [{
    showInLegend: false,
    data: []
    }]
    });
    
    getPh(PH, TOKEN, function (values) {
    var data = values.map(function (value) {
    return [value.timestamp, value.value];
    });
    
    chart.series[0].setData(data);
    });
    
    }, 100)

//Ph MÉDIo SEMANA

setTimeout(()=>{
    // Pegar o ph:
    function getPhWeek(variable, token, callback) {
    var url = 'https://industrial.api.ubidots.com/api/v1.6/variables/' + variable + '/values';
    var headers = {
    'X-Auth-Token': token,
    'Content-Type': 'application/json'
    };
    
    $.ajax({
    url: url,
    method: 'GET',
    headers: headers,
    success: function (res) {
    callback(res.results);
    }
    });
    }
    
    var chart = Highcharts.chart('ph_week', {
    chart: {
    type: 'column'
    },
    title: {
    text: 'pH médio da água ao longo dos últimos 7 dias'
    },
    xAxis: {
    type: 'datetime',
    labels: {
        format: '{value:%d/%m}',
        }
    },
    credits: {
    enabled: false
    },
    series: [{
    showInLegend: false,
    data: []
    }]
    });
    
    getPhWeek(PH, TOKEN, function (values) {
    var data = values.map(function (value) {
    return [value.timestamp, value.value];
    });
    
    chart.series[0].setData(data);
    });
    
    }, 100)
