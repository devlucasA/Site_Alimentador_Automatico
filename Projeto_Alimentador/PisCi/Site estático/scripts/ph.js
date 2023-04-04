const lastPh = document.querySelector("#last_update_ph")
const PhMetric = document.querySelector("#ph_metric")
const consumptionStatus = document.querySelector("#consumption_status");
const phStatus = document.querySelector("#ph_status");
const divPHstatus = document.querySelector("#div_status_ph");
  
  //MÉTRICA TEMPERATURA
	// Pegar variáveis do Ubidots:
	
  setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let value = this.responseText;
        PhMetric.innerHTML = value;
        
        if(value < 5.4 || value > 9) { phStatus.innerHTML = "Péssimo"; divPHstatus.classList.add("terrible_status")}
        if(value >= 5.5 && value <= 5.9 || value >= 8.6 && value <= 9) { phStatus.innerHTML = "Ruim"; divPHstatus.classList.add("bad_status")}
        if(value >= 6 && value <= 6.3 || value >= 8 && value <=8.5) { phStatus.innerHTML = "Médio"; divPHstatus.classList.add("medium_status")}
        if(value >= 6.4 && value <= 6.7 || value >= 7.6 && value < 8) { phStatus.innerHTML = "Bom"; divPHstatus.classList.add("god_status")}
        if(value >= 6.8 && value <= 7.5) { phStatus.innerHTML = "Excelente"; divPHstatus.classList.add("great_status")}
      }
    };
    xhttp.open("GET", "http://192.168.15.12/ph_value", true);
    xhttp.send();
  
    var date = new Date();
    lastPh.innerHTML = date.toLocaleDateString() + " - " + date.toLocaleTimeString('pt-BR');

  }, 2000 ) ;

  console.log()
      
// G´RAFICO PH
const ChartNow = document.querySelector("#ph_now");
const ChartDay = document.querySelector("#ph_day");
const ChartWeek = document.querySelector("#ph_week");

const NowBtn = document.querySelector("#btn_now_ph");
const DayBtn = document.querySelector("#btn_day_ph");
const WeekBtn = document.querySelector("#btn_week_ph");

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

var chart = Highcharts.chart('ph_now', {
  chart: {
  type: 'line'
  },
  title: {
  text: 'Variação da ph da água:'
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

  let phData = [];

 setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let value = this.responseText;

        phData.push(parseInt(value));
        //console.log(phData)
  
      chart.series[0].setData(phData);


      }
    };
    xhttp.open("GET", "http://192.168.15.12/ph_value", true);
    xhttp.send();
  
    var date = new Date();
    lastPh.innerHTML = date.toLocaleDateString() + " - " + date.toLocaleTimeString('pt-BR');

  }, 2000 ) ;

    
  