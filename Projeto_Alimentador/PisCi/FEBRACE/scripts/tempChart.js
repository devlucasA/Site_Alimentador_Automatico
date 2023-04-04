const ChartDay = document.querySelector("#temp_day");
const ChartWeek = document.querySelector("#temp_week");
const TodayBtn = document.querySelector("#temp_today");
const WeekBtn = document.querySelector("#last_week_temp");

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
    // TEMPERATURA POR DIA
    function getTemp(variable, token, callback) {
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
    
    var chart = Highcharts.chart('temp_day', {
    chart: {
    type: 'line'
    },
    title: {
    text: 'Variação da temperatura da água:'
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
    
    getTemp(TEMP, TOKEN, function (values) {
    var data = values.map(function (value) {
    return [value.timestamp, value.value];
    });
    
    chart.series[0].setData(data);
    });
    
    }, 100)

//TEMPERATURA MÉDIA SEMANA

setTimeout(()=>{
    // Pegar a temperatura:
    function getTempWeek(variable, token, callback) {
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
    
    var chart = Highcharts.chart('temp_week', {
    chart: {
    type: 'column'
    },
    title: {
    text: 'Temperatura média da água ao longo dos últimos 7 dias'
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
    
    getTempWeek(TEMP, TOKEN, function (values) {
    var data = values.map(function (value) {
    return [value.timestamp, value.value];
    });
    
    chart.series[0].setData(data);
    });
    
    }, 100)