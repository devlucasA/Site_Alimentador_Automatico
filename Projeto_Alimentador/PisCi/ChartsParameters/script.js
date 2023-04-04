const TOKEN = 'BBFF-XZJulh8fbTcknZ3S4Dc7rQ0aZZZOty';
const PH = "6348bedd2e48aa046cf2ed7e";
const TEMP = "6323af1cfb74ce0a8ec2fa79";


//Pegar o PH
function getPH(variable, token, callback) {
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

var chart = Highcharts.chart('ph', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Variação do pH da água:'
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

getPH(PH, TOKEN, function (values) {
  var data = values.map(function (value) {
    return [value.timestamp, value.value];
  });
  
  chart.series[0].setData(data);
});



setTimeout(()=>{
// Pegar a temperatura:
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

var chart = Highcharts.chart('temp', {
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

}, 2000)
