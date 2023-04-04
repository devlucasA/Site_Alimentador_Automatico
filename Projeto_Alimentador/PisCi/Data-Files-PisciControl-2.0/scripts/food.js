//QUANTIDADE DE RAÇÃO NO RESERVATÓRIO

const lastFeedTime = $("#last_feed_time");
const temp = $("#temp");
const consumptionStatus = $("#consumption");
const idealFood = $("#ideal_food");
const foodProvided = $("#food_provided");
const typeFood = $("#type_food")

const lastUmi = document.querySelector("#last_update_umi")
const UmiMetric = document.querySelector("#umi_metric")
const statusUmi = document.querySelector("#statusUmi");
const divstatusUmi = document.querySelector("#div_status_umi")

const FoodMetric = document.querySelector("#food_metric");
	
// Pegar a qtd de ração no reservatório
let qtdFoodReservoir = 5;

function getFood(){
  
  let request = new XMLHttpRequest()
  let url = "https://script.google.com/macros/s/AKfycbwqbhTaPlHCuBSQMZe0j8BhNxFctzfLAcqphMOA_SjRbRbH8kUYjt9gOXuhF1vQfoimCg/exec"

  request.open("GET", url)
  request.send()

  request.onload = function() {

  const data = request.responseText

  LastData = data.split(',');
  const value = parseFloat(LastData[0]).toFixed(2)
  qtdFoodReservoir = value


  update = new Date (LastData[1])

            FoodMetric.innerHTML = value;
            const range = parseInt(value * 100 / 5);
            const progressbar = document.querySelector('.progress-bar');
            progressbar.style.setProperty('--progress', range);
            progressbar.dataset.content = range.toString() + "%";

            document.getElementById("last_update_food").innerHTML = update.getDate() + "/" + (update.getMonth()+1) + " - " +update.getHours() + ":" + update.getMinutes()
}
}
getFood()


function GetData(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function mainGet() {
  
  let data = GetData("https://script.google.com/macros/s/AKfycbydn9mZm8pI8Fvu82ruIpr6EzJrWSlPjFUI3Y1qwwDL6zkuiYrIlPPs9P71XCG7QbCJ/exec");
  let LastData = data.split(',');
  const time = new Date(LastData[4])
  lastFeedTime.text(time.toLocaleDateString() + " - " + time.toLocaleTimeString('pt-BR')); 
  temp.text(": "+LastData[3]);

  let consumption = "";
  const tempValue = parseFloat(LastData[3]).toFixed(2)
          if(tempValue < 16) { consumption = "0%"}
          if(tempValue >= 16 && tempValue <= 19) { consumption = "60%"}
          if(tempValue >= 20 && tempValue <= 24) { consumption = "80%"}
          if(tempValue >= 25 && tempValue < 29) { consumption = "100%"}
          if(tempValue >= 30 && tempValue <= 32) { consumption = "80%"}
          if(tempValue > 32) { consumption = "0%"}
consumptionStatus.text(consumption);
idealFood.text(LastData[0])
foodProvided.text(LastData[2])
typeFood.text(LastData[1]);
}

mainGet()

  //MÉTRICA UMIDADE
  
  setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let value = this.responseText;
        UmiMetric.innerHTML = value;

        if(value <= 12) { statusUmi.innerHTML = "Umidade ideal da ração"; divstatusUmi.classList.add("great_status")}
        if(value > 12 && value <= 14) { statusUmi.innerHTML = "Fique atento! A ração pode começar a mofar"; divstatusUmi.classList.add("medium_status")}
        if(value > 14 && value <= 16) { statusUmi.innerHTML = "Alto risco de fungos e micotoxinas na ração. Observe a umidade"; divstatusUmi.classList.add("bad_status")}
        if(value > 16) { statusUmi.innerHTML = "Ração inadequada para o consumo. Realize a troca"; divstatusUmi.classList.add("terrible_status")}


      }
    };
//    xhttp.open("GET", "/temp_value", true);
    xhttp.open("GET", "/umidity_value", true);
    xhttp.send();
  
    var date = new Date();
    lastUmi.innerHTML = date.toLocaleDateString() + " - " + date.toLocaleTimeString('pt-BR');

  }, 2000 ) ;

// GET das últimas informações de arraçoamento usando a API Sheet dB
  /*
  setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        TempMetric.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "/value_ph", true);
    xhttp.send();
  }, 2000 ) ;
  */
/*
  function GetData(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
  }
  
  function mainGet() {
    
    let data = GetData("https://sheetdb.io/api/v1/6kvbc9frc7pwp");
    console.log(data);
    let TableUserDatas = JSON.parse(data);
    const LastData = TableUserDatas[TableUserDatas.length - 1];
    console.log(LastData)
    const time = new Date(LastData.data)
    lastFeedTime.text(time.toLocaleDateString() + " - " + time.toLocaleTimeString('pt-BR')); 
    temp.text(": "+LastData.temp);

    let consumption = "";
    const tempValue = parseFloat(LastData.temp).toFixed(2)
            if(tempValue < 16) { consumption = "0%"}
            if(tempValue >= 16 && tempValue <= 19) { consumption = "60%"}
            if(tempValue >= 20 && tempValue <= 24) { consumption = "80%"}
            if(tempValue >= 25 && tempValue < 29) { consumption = "100%"}
            if(tempValue >= 30 && tempValue <= 32) { consumption = "80%"}
            if(tempValue > 32) { consumption = "0%"}
  consumptionStatus.text(consumption);
  idealFood.text(TableUserDatas[0].qtd_ideal)
  foodProvided.text(LastData.qtd_fornecida)
  typeFood.text(TableUserDatas[0].tipo_racao);
  }
  
  mainGet()

  */