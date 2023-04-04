const lastTemp = document.querySelector("#last_update_temp")
const TempMetric = document.querySelector("#temp_metric")
const consumptionStatus = document.querySelector("#consumption_status");
const statusTemp = document.querySelector("#statusTemp");
const divstatusTemp = document.querySelector("#div_status_temp")
  
  //MÉTRICA TEMPERATURA

  setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let value = this.responseText;
        TempMetric.innerHTML = value;
        if(value < 16) { consumptionStatus.innerHTML = "0%"; }
        if(value >= 16 && value <= 19) { consumptionStatus.innerHTML = "60%";}
        if(value >= 20 && value <= 24) { consumptionStatus.innerHTML = "80%";}
        if(value >= 25 && value < 29) { consumptionStatus.innerHTML = "100%";}
        if(value >= 30 && value <= 32) { consumptionStatus.innerHTML = "80%";}
        if(value > 32) { consumptionStatus.innerHTML = "0%";}

        if(value <= 8 || value > 35) { statusTemp.innerHTML = "Risco de morte"; divstatusTemp.classList.add("terrible_status")}
        if(value > 8 && value < 14 || value > 30 && value <= 35) { statusTemp.innerHTML = "Ruim"; divstatusTemp.classList.add("bad_status")}
        if(value >= 14 && value < 20) { statusTemp.innerHTML = "Regular"; divstatusTemp.classList.add("medium_status")}
        if(value >= 20 && value < 26) { statusTemp.innerHTML = "Quase bom"; divstatusTemp.classList.add("good_status")}
        if(value >= 26 && value <= 30) { statusTemp.innerHTML = "Excelente"; divstatusTemp.classList.add("great_status")}


      }
    };
    xhttp.open("GET", "http://192.168.15.12/temp_value", true);
    xhttp.send();
  
    var date = new Date();
    lastTemp.innerHTML = date.toLocaleDateString() + " - " + date.toLocaleTimeString('pt-BR');

  }, 2000 ) ;

//GRÁFICO TEMPERATURA
const ChartNow = document.querySelector("#temp_now");
const ChartDay = document.querySelector("#temp_day");
const ChartWeek = document.querySelector("#temp_week");

const NowBtn = document.querySelector("#btn_now_temp");
const DayBtn = document.querySelector("#btn_day_temp");
const WeekBtn = document.querySelector("#btn_week_temp");

function openChart (btn){
    if(btn == NowBtn){
        DayBtn.classList.remove("button_selected");
        NowBtn.classList.add("button_selected");
        WeekBtn.classList.remove("button_selected");
        
        ChartNow.classList.remove("hidden");
        ChartDay.classList.add("hidden");
        ChartWeek.classList.add("hidden");
    }

    if(btn == DayBtn) {
      DayBtn.classList.add("button_selected");
      NowBtn.classList.remove("button_selected");
      WeekBtn.classList.remove("button_selected");
      
      ChartNow.classList.add("hidden");
      ChartDay.classList.remove("hidden");
      ChartWeek.classList.add("hidden");
    }

    if(btn == WeekBtn){
      DayBtn.classList.remove("button_selected");
      NowBtn.classList.remove("button_selected");
      WeekBtn.classList.add("button_selected");
      
      ChartNow.classList.add("hidden");
      ChartDay.classList.add("hidden");
      ChartWeek.classList.remove("hidden");
    }

}

var chart = Highcharts.chart('temp_now', {
  chart: {
  type: 'line'
  },
  title: {
  text: 'Variação da temperatura da água:'
  },
  xAxis: {
  type: 'datetime',
  labels: {
    format: '{value:%H:%M}',
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

  let tempData = [];

 setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let value = this.responseText;

        tempData.push(parseInt(value));
        //console.log(tempData)
  
      chart.series[0].setData(tempData);


      }
    };
    xhttp.open("GET", "http://192.168.15.12/temp_value", true);
    xhttp.send();
  
    var date = new Date();
    lastTemp.innerHTML = date.toLocaleDateString() + " - " + date.toLocaleTimeString('pt-BR');

  }, 2000 ) ;

    
    
    


//TEMPERATURA MÉDIA SEMANA
/*
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
    */

  
  
