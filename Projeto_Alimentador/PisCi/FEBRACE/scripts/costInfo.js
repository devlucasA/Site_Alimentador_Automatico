const inputDef = document.querySelector(".input_def");
const saveIcon = document.querySelector("#save_icon");
const editCostIcon = document.querySelector("#edit_cost");
const editGPDIcon = document.querySelector("#edit_GPD");
const divMask = document.querySelector(".div_mask");
const GPDDiv = document.querySelector(".GPD_card");
const lastWeight = document.querySelector("#last_weight");
const lastDate = document.querySelector("#last_date");
const penultWeight = document.querySelector("#penult_weight");
const penultDate = document.querySelector("#penult_date");
const GPDResult = document.querySelector("#GPD_result");
const GPDOutput = document.querySelector("#GPD_output");
const TCAReal = document.querySelector("#real_TCA");
const TCAExpected = document.querySelector("#expected_TCA");
const costFoodOutput = document.querySelector("#cost-food");
const relativeCostOutput = document.querySelector("#relative-cost");


let costFood = 0;

//Recarregar:
function reload_widget() {
  location.reload();
}

//Calcular a TCA esperada:
function calcExpectedTCA(weight) {
  let tca = 0;
  if (weight < 10) {
    tca = 1;
  }
  if (weight >= 10 && weight < 50) {
    tca = 1.1;
  }
  if (weight >= 50 && weight < 150) {
    tca = 1.2;
  }
  if (weight >= 150 && weight < 250) {
    tca = 1.3;
  }
  if (weight >= 250 && weight < 400) {
    tca = 1.4;
  }
  if (weight >= 400 && weight < 600) {
    tca = 1.6;
  }
  if (weight >= 600 && weight < 800) {
    tca = 1.7;
  }
  if (weight >= 800 && weight < 1300) {
    tca = 1.8;
  }
  if (weight > 1300) {
    tca = 2;
  }
  TCAExpected.innerHTML = "&nbsp" + tca;
}

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

  GPDOutput.innerHTML = "&nbsp" + GPD;

  lastWeight.value = weight2;
  penultWeight.value = weight1;
  lastDate.value =
    "Data: " +
    new Date(date2).getDate().toString() +
    "/" +
    new Date(date2).getMonth().toString() +
    "/" +
    new Date(date2).getFullYear().toString();
  penultDate.value =
    "Data: " +
    new Date(date1).getDate().toString() +
    "/" +
    new Date(date1).getMonth().toString() +
    "/" +
    new Date(date1).getFullYear().toString();

  WeightGain = GPD;

  calcExpectedTCA(weight2);
});

// Editar custo da ração:
function editCost(editIcon) {
  inputDef.removeAttribute("disabled");
  saveIcon.classList.remove("hidden");
  editIcon.classList.add("hidden");
}

// Postar no Ubidots o novo custo da ração:
function postCost(input, callback) {
  const url = "https://industrial.ubidots.com/api/v1.6/collections/values";

  const headers = {
    "Content-Type": "application/json",
    "X-Auth-Token": TOKEN,
  };

  $.ajax({
    url: url,
    method: "POST",
    headers: headers,
    success: function (res) {
      callback(res.value);
    },
    data: JSON.stringify([
      {
        variable: FOOD_COST,
        value: input.value,
      },
    ]),
  });
}

function saveCost() {
  postCost(inputDef, function (value) {
    console.log("Enviado!");
  });
  inputDef.setAttribute("disabled", "disabled");
  saveIcon.classList.add("hidden");
  editCostIcon.classList.remove("hidden");
}

// Postar os resultados das biometrias para calcular o GPD:
function postWeight2(date2, weight2, callback) {
  const url = "https://industrial.ubidots.com/api/v1.6/collections/values";

  const headers = {
    "Content-Type": "application/json",
    "X-Auth-Token": TOKEN,
  };

  $.ajax({
    url: url,
    method: "POST",
    headers: headers,
    success: function (res) {
      callback(res.value, res.context);
    },
    data: JSON.stringify([
      {
        variable: WEIGHT_FISH,
        value: weight2,
        context: { key: date2 },
      },
    ]),
  });
}

function postWeight1(date1, weight1, callback) {
  const url = "https://industrial.ubidots.com/api/v1.6/collections/values";

  const headers = {
    "Content-Type": "application/json",
    "X-Auth-Token": TOKEN,
  };

  $.ajax({
    url: url,
    method: "POST",
    headers: headers,
    success: function (res) {
      callback(res.value, res.context);
    },
    data: JSON.stringify([
      {
        variable: WEIGHT_FISH,
        value: weight1,
        context: { key: date1 },
      },
    ]),
  });
}

// Calcular o GPD no card:
function calcGPD() {
  const date2 = new Date(lastDate.value);
  const date1 = new Date(penultDate.value);
  const weight2 = lastWeight.value;
  const weight1 = penultWeight.value;

  const difDays = Math.abs(date2 - date1) / (1000 * 3600 * 24);
  const difWeight = weight2 - weight1;

  const GPD = parseFloat(difWeight / difDays).toFixed(2);

  GPDResult.innerHTML = GPD;
}

// Fechar o card GPD:
function closed() {
  GPDDiv.classList.add("hidden");
  divMask.style.opacity = "100%";
}

// Abrir o card GPD:
function openGPDCard() {
  divMask.style.opacity = "50%";
  GPDDiv.classList.remove("hidden");
}

//Salvar as novas biometrias no ubidots ao clicar no botão:
function saveGPD() {
  postWeight1(new Date(penultDate.value), penultWeight.value, function (value) {
    setTimeout(() => {
      postWeight2(
        new Date(lastDate.value),
        lastWeight.value,
        function (value) {}
      );
    }, 1000);
  });

  closed();
  console.log("Enviado");
  //setTimeout(()=> {
  // window.location.reload();
  //}, 2000)
}

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

// Calcular TCA real:

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

//TABELA

function  tableF() {

  FoodPerDay.forEach((day) => { 
    const table = document.querySelector(".tbody")
    const newRow = document.createElement("tr")
    const columnDate = document.createElement("td")
    const columnCost = document.createElement("td")

    console.log("a")
    table.appendChild(newRow);
    newRow.appendChild(columnDate);
    newRow.appendChild(columnCost);


    columnDate.innerText = day.timestamp;
    columnCost.innerText = "R$ " + parseFloat((costFood / 25) * day.value).toFixed(2);
    
    })
}

$(document).ready(function () {
  $("#btnExport").click(function () {
      $("#tblExport").btechco_excelexport({
          containerid: "tblExport"
         , datatype: $datatype.Table
         , filename: 'CustoDiário - PisciControl'
      });
  });
});


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
//Fórmula de conversão alimentar
function TCA() {
  setTimeout(() => {
    console.log(FoodPerDay);
    console.log(WeightGain);
    console.log(amountFish);
    const LastDayFood = FoodPerDay[1].value;
    TCAReal.innerHTML =
      "&nbsp" +
      parseFloat(LastDayFood / ((WeightGain / 1000) * amountFish)).toFixed(2);
    console.log(FoodPerDay);
  }, 2500);
}
TCA();

// Pegar o cusot do banco de dados
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

// Fórmula para Cálculo do custo:
function costWeek() {
  getCost(FOOD_COST, function (data) {
    costFood = data.results[0].value;
    inputDef.value = costFood;

    setTimeout(() => {
      const valuesPerWeek = (array) => {
        const startIndex =
          array.length >= 7 ? array.length - 7 : array.length - array.length;
        const values = array.map(
          (item, index) => index >= startIndex && item.value
        );
        const sumValues = array.reduce((values, item) => {
          return values + item.value;
        }, 0);

        console.log(sumValues);
        const Result = parseFloat((costFood / 25) * sumValues).toFixed(2);
        costFoodOutput.innerHTML = "&nbsp" + Result;
        relativeCostOutput.innerHTML =
          "&nbsp" +
          parseFloat(Result / ((WeightGain * amountFish * 7) / 1000)).toFixed(
            2
          );
          tableF()
      };

      valuesPerWeek(FoodPerDay);
    }, 1000);
  });
}

costWeek();

