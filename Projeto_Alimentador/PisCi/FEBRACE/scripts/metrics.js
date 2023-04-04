
const relativeCostOutput = document.querySelector("#cost_metric");
const weekCost = document.querySelector("#last_week_cost");
const lastFeed = document.querySelector("#last_update_food");
const FoodMetric = document.querySelector("#food_metric");
const phMetric = document.querySelector("#ph_metric");
const lastpH = document.querySelector("#last_update_ph")
const phStatus = document.querySelector("#ph_status")
const divPHstatus = document.querySelector("#div_status_ph")
const lastTemp = document.querySelector("#last_update_temp")
const TempMetric = document.querySelector("#temp_metric")
const consumptionStatus = document.querySelector("#consumption_status");


//Calcular o GPD a partir do Ubidots:
function getWeight(variable, callback) {
  const url =
    "https://industrial.api.ubidots.com/api/v1.6/variables/" +
    variable +
    "/values";

  const headers = {
    "X-Auth-Token": TOKEN,
    "Content-Type": "application/json",
  };

  $.ajax({
    url: url,
    method: "GET",
    headers: headers,
    success: function (res) {
      callback(res);
    },
  });
}

var WeightGain = 0;
var amountFish = 0;

getWeight(WEIGHT_FISH, function (data) {
  const date2 = data.results[0]["context"].key;
  const date1 = data.results[1]["context"].key;

  const difDays = (new Date(date2) - new Date(date1)) / (1000 * 3600 * 24);

  const weight2 = data.results[0].value;
  const weight1 = data.results[1].value;

  const difWeight = weight2 - weight1;

  const GPD = difDays == 0 ? 0 : parseFloat(difWeight / difDays).toFixed(2);

  WeightGain = GPD;

});

// Pegar quantidade de peixes no tanque:
function getAmountFish(variable, callback) {
    const url =
      "https://industrial.api.ubidots.com/api/v1.6/variables/" +
      variable +
      "/values";
  
    const headers = {
      "X-Auth-Token": TOKEN,
      "Content-Type": "application/json",
    };
  
    $.ajax({
      url: url,
      method: "GET",
      headers: headers,
      success: function (res) {
        callback(res);
      },
    });
  }
  getAmountFish(AMOUNT_FISH, function (data) {
    const value = data.results[0].value;
    amountFish = value;
  });

  let costFood = 0;

// Pegar o custo do banco de dados
function getCost(variable, callback) {
  const url =
    "https://industrial.api.ubidots.com/api/v1.6/variables/" +
    variable +
    "/values";

  const headers = {
    "X-Auth-Token": TOKEN,
    "Content-Type": "application/json",
  };

  $.ajax({
    url: url,
    method: "GET",
    headers: headers,
    success: function (res) {
      callback(res);
    },
  });
}


// Pegar a última quantidade de ração fornecida em um dia:
function getFoodProvided(variable, callback) {
    const url =
      "https://industrial.api.ubidots.com/api/v1.6/variables/" +
      variable +
      "/values";
  
    const headers = {
      "X-Auth-Token": TOKEN,
      "Content-Type": "application/json",
    };
  
    $.ajax({
      url: url,
      method: "GET",
      headers: headers,
      success: function (res) {
        callback(res);
      },
    });
  }

const results = [];
const FoodPerDay = [];

getFoodProvided(AMOUNT_FOOD_PROVIDED, function (data) {
  results.push(data.results);
  results[0].map(function (item) {
    const time = new Date(parseInt(item.timestamp));
    item.timestamp =
      time.getDate().toString() +
      "/" +
      (time.getMonth() + 1).toString() +
      "/" +
      time.getFullYear().toString();
  });

  results[0].reduce((group, item) => {
    if (!group[item.timestamp]) {
      group[item.timestamp] = { timestamp: item.timestamp, value: 0 };

      FoodPerDay.push(group[item.timestamp]);
    }

    group[item.timestamp].value += item.value;

    return group;
  }, {});
});

// Fórmula para Cálculo do custo:
function costWeek() {
  getCost(FOOD_COST, function (data) {
    costFood = data.results[0].value;

    setTimeout(() => {
      const valuesPerWeek = (array) => {
        const startIndex =
          array.length >= 7 ? array.length - 7 : array.length - array.length;
        const values = array.map(
          (item, index) => index >= startIndex && item.value
        );
        const sumValues = array.reduce((values, item) => {
          return values + item.value;
        }, -1);

        console.log(sumValues);
        const Result = parseFloat((costFood / 25) * sumValues).toFixed(2);
        relativeCostOutput.innerHTML = parseFloat(Result / ((WeightGain * amountFish * 7) / 1000)).toFixed(2);
        weekCost.innerHTML = Result;
      };

      valuesPerWeek(FoodPerDay);
    }, 1000);
  });
}

costWeek();





//QUANTIDADE DE RAÇÃO NO RESERVATÓRIO
// Pegar variáveis do Ubidots:
	
function getDateFood(token, variable, callback) {
	const url = 'https://industrial.api.ubidots.com/api/v1.6/variables/' + variable + '/values';
	
	const headers = {
	'X-Auth-Token': token,
	'Content-Type': 'application/json'
	};
	
	$.ajax({
	url: url,
	method: 'GET',
	headers: headers,
	success: function (res) {
	callback(res);
	}
	});
	}
	getDateFood(TOKEN, AMOUNT_FOOD_PROVIDED, function (data) {
	const timestamp = data.results[0].timestamp;
	var date = new Date(timestamp);
	lastFeed.innerHTML = date.getDate() + "/" + (date.getMonth()+1) + " - " +date.getHours() + ":" + date.getMinutes();;
	});
	
	
	// Pegar variáveis do Ubidots:
	
	function getFoodInReservoir(token, variable, callback) {
	const url = 'https://industrial.api.ubidots.com/api/v1.6/variables/' + variable + '/values';
	
	const headers = {
	'X-Auth-Token': token,
	'Content-Type': 'application/json'
	};
	
	$.ajax({
	url: url,
	method: 'GET',
	headers: headers,
	success: function (res) {
	callback(res);
	}
	});
	}
	getFoodInReservoir(TOKEN, RESERVOIR, function (data) {
	
	
	const value = data.results[0].value;
	FoodReservoir = value;
	console.log(FoodReservoir);
	FoodMetric.innerHTML = value;
	
    const range = parseInt(value * 100 / 5);
    const progressbar = document.querySelector('.progress-bar');
    progressbar.style.setProperty('--progress', range);
    progressbar.dataset.content = range.toString() + "%";

});


//MÉTRICA PH

	// Pegar variáveis do Ubidots:
	
	function getpH(token, variable, callback) {
        const url = 'https://industrial.api.ubidots.com/api/v1.6/variables/' + variable + '/values';
        
        const headers = {
        'X-Auth-Token': token,
        'Content-Type': 'application/json'
        };
        
        $.ajax({
        url: url,
        method: 'GET',
        headers: headers,
        success: function (res) {
        callback(res);
        }
        });
        }
        getpH(TOKEN, PH, function (data) {
        
        
        const value = data.results[0].value;
        const timestamp = data.results[0].timestamp;
	    var date = new Date(timestamp);
	    lastpH.innerHTML =  date.getDate() + "/" + (date.getMonth()+1) + " - " +date.getHours() + ":" + date.getMinutes();;

        phMetric.innerHTML = value;

        if(value < 5.4 || value > 9) { phStatus.innerHTML = "Péssimo"; divPHstatus.classList.add("terrible_status")}
        if(value >= 5.5 && value <= 5.9 || value >= 8.6 && value <= 9) { phStatus.innerHTML = "Ruim"; divPHstatus.classList.add("bad_status")}
        if(value >= 6 && value <= 6.3 || value >= 8 && value <=8.5) { phStatus.innerHTML = "Médio"; divPHstatus.classList.add("medium_status")}
        if(value >= 6.4 && value <= 6.7 || value >= 7.6 && value < 8) { phStatus.innerHTML = "Bom"; divPHstatus.classList.add("god_status")}
        if(value >= 6.8 && value <= 7.5) { phStatus.innerHTML = "Excelente"; divPHstatus.classList.add("great_status")}
    
    });


    //MÉTRICA TEMPERATURA
	// Pegar variáveis do Ubidots:
	
	function getTemp(token, variable, callback) {
        const url = 'https://industrial.api.ubidots.com/api/v1.6/variables/' + variable + '/values';
        
        const headers = {
        'X-Auth-Token': token,
        'Content-Type': 'application/json'
        };
        
        $.ajax({
        url: url,
        method: 'GET',
        headers: headers,
        success: function (res) {
        callback(res);
        }
        });
        }
        getTemp(TOKEN, TEMP, function (data) {
        
        
        const value = data.results[0].value;
        const timestamp = data.results[0].timestamp;
	    var date = new Date(timestamp);
	    lastTemp.innerHTML =  date.getDate() + "/" + (date.getMonth()+1) + " - " +date.getHours() + ":" + date.getMinutes();;

        TempMetric.innerHTML = value;

        if(value < 16) { consumptionStatus.innerHTML = "0%"; }
        if(value >= 16 && value <= 19) { consumptionStatus.innerHTML = "60%";}
        if(value >= 20 && value <= 24) { consumptionStatus.innerHTML = "80%";}
        if(value >= 25 && value < 29) { consumptionStatus.innerHTML = "100%";}
        if(value >= 30 && value <= 32) { consumptionStatus.innerHTML = "80%";}
        if(value > 32) { consumptionStatus.innerHTML = "0%";}
    
    });