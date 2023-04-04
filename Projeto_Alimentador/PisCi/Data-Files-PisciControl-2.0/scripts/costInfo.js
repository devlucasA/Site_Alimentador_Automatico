const inputCost = document.querySelector(".input_def");
const saveIcon = document.querySelector("#save_icon");
const editCostIcon = document.querySelector("#edit_cost");
const editGPDIcon = document.querySelector("#edit_GPD");
const divMask = document.querySelector(".div_mask");
const GPDDiv = document.querySelector(".GPD_card");
const lastWeight = document.querySelector("#last_weight");
const lastDate = document.getElementById("last_date");
const penultWeight = document.querySelector("#penult_weight");
const penultDate = document.querySelector("#penult_date");
const GPDResult = document.querySelector("#GPD_result");
const GPDOutput = document.querySelector("#GPD_output");
const TCAReal = document.querySelector("#real_TCA");
const TCAExpected = document.querySelector("#expected_TCA");
const weekCostOutput = document.querySelector("#week_cost");
const relativeCostOutput = document.querySelector("#relative-cost");
const msgError = document.getElementById("error_msg");

//TABELA


//getCostPerDay()

function  tableF() {


  let request = new XMLHttpRequest()
  let url = "https://script.google.com/macros/s/AKfycbzzRTvVjMW7o6RX9dBHyzuz5xq3uqFOxjsDQlPvbiTIUDtDsrYHp7a-1skzj7XHjgcm/exec"

  request.open("GET", url)
  request.send()

  request.onload = function() {
  let result = request.responseText;
  let data = JSON.parse(result).data;

      data.forEach(e => {

        const table = document.querySelector(".tbody")
        const newRow = document.createElement("tr")
        const columnDate = document.createElement("td")
        const columnQtd = document.createElement("td")
        const columnCost = document.createElement("td")
      
      
        table.appendChild(newRow);
        newRow.appendChild(columnDate);
        newRow.appendChild(columnQtd);
        newRow.appendChild(columnCost);

        console.log(e)
        columnDate.innerText = new Date(e[0]).toLocaleDateString();
        columnQtd.innerText = parseFloat(e[1]).toFixed(2) + " kg"
        columnCost.innerText = "R$ " + parseFloat(e[2]).toFixed(2);
      });

    }
    
}


tableF()

let atualDate = new Date()
const umDiaEmMs = 86400000;


//Postas as biometrias na planilha data_user
function PostDataScript(url, date1, date2) {

  let request = new XMLHttpRequest()

  let parameters = "?date1=" + date1 + "&date2=" + date2 + "&peso1=" + penultWeight.value + "&peso2="+ lastWeight.value 

  request.open("GET", url+parameters)
  request.send()
  console.log(request.responseText)
  return request.responseText
}


function validityFunc() {
  const inputs = [lastDate, lastWeight, penultDate, penultWeight]

  inputs.forEach(e => {
    if(e.value == ""){
      msgError.textContent = "Preencha todos os campos"
    }
  });

  Date1 = penultDate.value
  Date2 = lastDate.value

  console.log("data1: " + Date1)
  console.log("data2: " + Date2)

  if(new Date(Date1) >= new Date(Date2)) {
    msgError.textContent = "A penúltima biometria deve ter ocorrido antes da última"
  }
  else {


    if(new Date(Date1) > atualDate || new Date(Date2) > atualDate) {
      msgError.textContent = "Não é possível calcular a partir de uma data futura"
    }else{
      PostDataScript("https://script.google.com/macros/s/AKfycbz4ogKCeW8FsKpr-odl-YzfQxao9BvmsGm5Fg4-BTOS7d05dZ-IKKJDFShg3IzzX_TJ/exec", Date1, Date2)
    }
  }

}




let costFood = 0;



// Editar custo da ração:
function editCost(editIcon) {
  inputCost.removeAttribute("disabled");
  saveIcon.classList.remove("hidden");
  editIcon.classList.add("hidden");
}

//Postar custo da ração:
function postCost(){
  
  let request = new XMLHttpRequest()
  let date = new Date().toLocaleDateString()
  let url = "https://script.google.com/macros/s/AKfycbwheArqv_AyOrDyni_v05LSg_xs_iuPCgpNMMUwm3imAmGqRzoPvCOewf74srngnG0/exec"

  let parameters = "?date="+date+"&cost="+inputCost.value

  request.open("GET", url+parameters)
  request.send()
  console.log(request.responseText)

  inputCost.setAttribute("disabled", "disabled");
  saveIcon.classList.add("hidden");
  editCostIcon.classList.remove("hidden");

  console.log("Enviado!");

  return request.responseText
}

// Pegar o preço atual da ração
function getCost(){
  
  let request = new XMLHttpRequest()
  let url = "https://script.google.com/macros/s/AKfycby0Wi2hnInFAaHnHpEh_eLQOtwPYHpwSt7T8N3BnaG_rDth6Zh1Chjkkn8nif_orFaK/exec?read"

  request.open("GET", url)
  request.send()

  request.onload = function() {
  let data = request.responseText.split(',');

  inputCost.value = request.responseText
}

}

getCost()


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

  return tca;
}


// Pegar as demais variáveis de custos da planilha Biometry
function getCostInfos(){
  
  let request = new XMLHttpRequest()
  let url = "https://script.google.com/macros/s/AKfycbwl5PcB-M3V8pyeAh95yfImv3gxEk4Nn__lGIAzsuzh3B0ZEmxKpP8451hrwtNbPY_NCA/exec?read"

  request.open("GET", url)
  request.send()

  request.onload = function() {
  let data = request.responseText.split(',');

  console.log(data)
  GPDOutput.innerHTML = "&nbsp" + parseFloat(data[3]).toFixed(2)
  TCAReal.innerHTML = "&nbsp" + parseFloat(data[4]).toFixed(2)
  let TCAEx = calcExpectedTCA(parseFloat(data[6]).toFixed(2))
  TCAExpected.innerHTML = "&nbsp" + TCAEx;
  relativeCostOutput.innerHTML = "&nbsp" + parseFloat(data[5]).toFixed(2)
  weekCostOutput.innerHTML = "&nbsp" + parseFloat(data[6]).toFixed(2)}

}

getCostInfos()

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

