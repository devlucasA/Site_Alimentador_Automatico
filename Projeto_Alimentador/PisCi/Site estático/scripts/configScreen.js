const cardsWrapper = document.querySelector(".cards-wrapper");
const buttonClose = document.querySelectorAll(".close-icon");
const cardMaster = document.querySelectorAll(".card-master");
const buttonBack = document.querySelectorAll(".return-arrow");
const advanceButton = document.querySelectorAll(".advance-button");
const input_def = document.querySelectorAll(".label_input_def b");
const divMask = document.querySelector(".div_mask");
const meals = document.querySelectorAll(".meal");
const $input1 = $("#input1");
const $input2 = $("#input2");
const $input3 = $("#input3");
const $input4 = $("#input4");
const $input5 = $("#input5");
const $input6 = $("#input6");
const $food1 = $("#food1");
const $food2 = $("#food2");
const $food3 = $("#food3");
const $food4 = $("#food4");
const $food5 = $("#food5");
const $food6 = $("#food6");
const $input7 = $("#input7");
const $input8 = $("#input8");
const $input9 = $("#input9");
const $input10 = $("#input10");
const $input11 = $("#input11");
const $input12 = $("#input12");

var $saveButton = $("#save-button");

// Definir o tamanho dos inputs conforme o tamanho do conteúdo:
//input.innerText = 'Lambari'

// Calcular qtd. de ração:
function CalcFeedAmount() {
  if ($input4.val() < 5) {
    $input5.val(
      parseFloat(($input3.val() * $input4.val() * 0.14) / 1000).toFixed(2)
    );
  } else if ($input4.val() >= 5 && $input4.val() < 10) {
    $input5.val(
      parseFloat(($input3.val() * $input4.val() * 0.08) / 1000).toFixed(2)
    );
  } else if ($input4.val() >= 10 && $input4.val() < 20) {
    $input5.val(
      parseFloat(($input3.val() * $input4.val() * 0.05) / 1000).toFixed(2)
    );
  } else if ($input4.val() >= 20 && $input4.val() < 50) {
    $input5.val(
      parseFloat(($input3.val() * $input4.val() * 0.045) / 1000).toFixed(2)
    );
  } else if ($input4.val() >= 50 && $input4.val() < 150) {
    $input5.val(
      parseFloat(($input3.val() * $input4.val() * 0.034) / 1000).toFixed(2)
    );
  } else if ($input4.val() >= 150 && $input4.val() < 250) {
    $input5.val(
      parseFloat(($input3.val() * $input4.val() * 0.03) / 1000).toFixed(2)
    );
  } else if ($input4.val() >= 250 && $input4.val() < 400) {
    $input5.val(
      parseFloat(($input3.val() * $input4.val() * 0.022) / 1000).toFixed(2)
    );
  } else if ($input4.val() >= 400 && $input4.val() < 600) {
    $input5.val(
      parseFloat(($input3.val() * $input4.val() * 0.014) / 1000).toFixed(2)
    );
  } else if ($input4.val() >= 600 && $input4.val() < 800) {
    $input5.val(
      parseFloat(($input3.val() * $input4.val() * 0.01) / 1000).toFixed(2)
    );
  } else if ($input4.val() >= 800 && $input4.val() < 1300) {
    $input5.val(
      parseFloat(($input3.val() * $input4.val() * 0.008) / 1000).toFixed(2)
    );
  } else if ($input4.val() > 1300) {
    $input5.val(
      parseFloat(($input3.val() * $input4.val() * 0.006) / 1000).toFixed(2)
    );
  }
}

// Indicar o tipo de ração e frequência de arraçoamento:
function kindFeed() {
  if ($input4.val() < 5) {
    $food1.attr("selected", "selected");
    $input7.val(5);
  }
  if ($input4.val() >= 5 && $input4.val() < 10) {
    $input7.val(4);
    if ($input4.val() >= 5 && $input4.val() < 50) {
      $food2.attr("selected", "selected");
    }
  }
  if ($input4.val() >= 10 && $input4.val() < 250) {
    $input7.val(3);
    if ($input4.val() >= 5 && $input4.val() < 50) {
      $food2.attr("selected", "selected");
    }
    if ($input4.val() >= 50 && $input4.val() < 150) {
      $food3.attr("selected", "selected");
    }
    if ($input4.val() >= 150 && $input4.val() < 250) {
      $food4.attr("selected", "selected");
    }
  }
  if ($input4.val() > 250) {
    $input7.val(2);
    if ($input4.val() >= 250 && $input4.val() < 800) {
      $food5.attr("selected", "selected");
    }
    if ($input4.val() >= 800) {
      $food6.attr("selected", "selected");
    }
  }
}


// Abrir os inputs de horários de acordo com afrequência: 
function activeSchedules() {
  meals.forEach((element) => {
    element.classList.add("hidden");
  });
  if ($input7.val() == 1) {
    meals[0].classList.remove("hidden");
  }
  if ($input7.val() == 2) {
    meals[0].classList.remove("hidden");
    meals[1].classList.remove("hidden");
  }
  if ($input7.val() == 3) {
    meals[0].classList.remove("hidden");
    meals[1].classList.remove("hidden");
    meals[2].classList.remove("hidden");
  }
  if ($input7.val() == 4) {
    meals[0].classList.remove("hidden");
    meals[1].classList.remove("hidden");
    meals[2].classList.remove("hidden");
    meals[3].classList.remove("hidden");
  }
  if ($input7.val() == 5) {
    meals[0].classList.remove("hidden");
    meals[1].classList.remove("hidden");
    meals[2].classList.remove("hidden");
    meals[3].classList.remove("hidden");
    meals[4].classList.remove("hidden");
  }
}

// Abrir os cards de configuração:
function openModal() {
  cardsWrapper.classList.remove("hidden");
  divMask.classList.remove("hidden");
}

// Fechar modal:
function closed(element) {
  cardsWrapper.classList.add("hidden");
  divMask.classList.add("hidden");
}

// Voltar para o card anterior:
function back(buttonBack) {
  const buttonNumber = buttonBack.className.replace(/[^0-9]/g, "");
  cardMaster[buttonNumber - 2].classList.remove("hidden");
  cardMaster[buttonNumber - 1].classList.add("hidden");
}

// Avançar para o próximo card:
function advance(submitButton) {
  const buttonNumber = submitButton.className.replace(/[^0-9]/g, "");
  cardMaster[buttonNumber - 1].classList.add("hidden");
  cardMaster[buttonNumber].classList.remove("hidden");
}


function reloadRefinEsp(){
  
function GetUrl(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

  GetUrl("http://192.168.15.12/reload_ref");


//main()

}




//Postas as variáveis na planilha data_user
function PostDataScript(url) {

  let inpVal = [
    $input1.val(),$input2.val(),$input3.val(),$input4.val(),$input5.val(),$input6.val().replace("%","%25"),
    $input7.val(),$input8.val(),$input9.val(),$input10.val(),$input11.val(),$input12.val()
  ]


  let request = new XMLHttpRequest()
  let date = new Date().toLocaleDateString()

  //Parâmetros para postar todas as variáveis na planilha
  let parameters = "?data="+date+"&especie="+inpVal[0]+"&idade="+inpVal[1]+"&qtd_peixes="+inpVal[2]+"&peso_medio="+inpVal[3]
  +"&qtd_ideal_dia="+inpVal[4]+"&tipo_racao="+inpVal[5]+"&frequencia="+inpVal[6]+"&ref1="+inpVal[7]+"&ref2="+inpVal[8]
  +"&ref3="+inpVal[9]+"&ref4="+inpVal[10]+"&ref5="+inpVal[11];

  ///URL para postar todas as variáveis na planilha
  let urlAll = "https://script.google.com/macros/s/AKfycbzEw386iXvLzx1azFhIxjwCxAuh9qkU4J4F0SdM31pzi63EpqFOD7NFW-aFU8vkB4Ti/exec" + parameters


  //URL para postar somente o horário da refeição 1
  let urlRef1 = "https://script.google.com/macros/s/AKfycbwTHYZ8nnvEAvVDTnod6jMwe3qxpiNu-Ev9wXDxTH4KxtXqbTcMKQuN2zAwcT_fkhMZVQ/exec?ref1=" +inpVal[7];
  

  request.open("GET", urlRef1)
  request.send()
  console.log(request.responseText)
  return request.responseText
}



// Postar variáveis ao clicar em "Salvar"
$saveButton.on("click", function () {
     PostDataScript("");
      console.log("Enviado!");

  reloadRefinEsp();
});



//Pegar as variáveis da planilha data_user
function GetDataScript(url) {

  let request = new XMLHttpRequest()
  request.open("GET", url)
  request.send()

  request.onload = function() {

  let data = request.responseText.split(',');

  console.log(request.responseText)
  console.log(data);
  $("#kind_fish").text(data[1]);
  $("#age").text(data[2]);
  $("#amount-fish").text(data[3]);
  $("#weight-fish").text(data[4]);
  $("#amount-feed-ideal").text(data[5]);
  $("#kind-feed").text(data[6]);
  $("#freq").text(data[7]);
  $("#feedForMeal").text(parseFloat(data[5]/data[7]).toFixed(2));


  data[8] == "" ? $("#label_ref1").addClass("hidden") :  $("#meal1").text(new Date (data[8]).getHours() + ":" + new Date (data[8]).getMinutes() );
  data[9] == "" ? $("#label_ref2").addClass("hidden") :  $("#meal2").text(new Date (data[9]).getHours() + ":" + new Date (data[9]).getMinutes() );
  data[10] == "" ? $("#label_ref3").addClass("hidden") :  $("#meal3").text(new Date (data[10]).getHours() + ":" + new Date (data[10]).getMinutes() );
  data[11] == "" ? $("#label_ref4").addClass("hidden") :  $("#meal4").text(new Date (data[11]).getHours() + ":" + new Date (data[11]).getMinutes() );
  data[12] == "" ? $("#label_ref5").addClass("hidden") :  $("#meal5").text(new Date (data[12]).getHours() + ":" + new Date (data[12]).getMinutes() ); 
  }

}

GetDataScript("https://script.google.com/macros/s/AKfycbzVINhZb1BG_tVZfg3Dq4EyvwXeOT5elTru-ODy_AlCVknLi_Hi3k_uDUpk5hGhfcty/exec?read")




//METRICAS

	// Pegar variáveis
	const TempMetric = document.querySelector("#temp_metric");
  const phMetric = document.querySelector("#ph_metric");
  const consumptionStatus = document.querySelector("#consumption_status");
  const phStatus = document.querySelector("#ph_status");
  const divPHstatus = document.querySelector("#div_status_ph");
  const FoodMetric = document.querySelector("#food_metric");
  const weekCostOutput = document.querySelector("#last_week_cost");
  const relativeCostOutput = document.querySelector("#relative_cost");


  const ways = ["temp", "ph"];

  setInterval(function ( ) {

  ways.forEach((url_name) => {
    const xhttp = new XMLHttpRequest(); 

    xhttp.onreadystatechange = function() {
       
        if (this.readyState == 4 && this.status == 200) {
           document.getElementById(url_name + "_metric").innerHTML = xhttp.responseText;

         

           if(url_name == ways[0]) {
            const value = parseFloat(xhttp.responseText).toFixed(2)
            if(value < 16) { consumptionStatus.innerHTML = "0%"; }
            if(value >= 16 && value <= 19) { consumptionStatus.innerHTML = "60%";}
            if(value >= 20 && value <= 24) { consumptionStatus.innerHTML = "80%";}
            if(value >= 25 && value < 29) { consumptionStatus.innerHTML = "100%";}
            if(value >= 30 && value <= 32) { consumptionStatus.innerHTML = "80%";}
            if(value > 32) { consumptionStatus.innerHTML = "0%";}
            }

            if(url_name == ways[1]) {
            const value = parseFloat(xhttp.responseText).toFixed(2)
            if(value < 5.4 || value > 9) { phStatus.innerHTML = "Péssimo"; divPHstatus.classList.add("terrible_status")}
            if(value >= 5.5 && value <= 5.9 || value >= 8.6 && value <= 9) { phStatus.innerHTML = "Ruim"; divPHstatus.classList.add("bad_status")}
            if(value >= 6 && value <= 6.3 || value >= 8 && value <=8.5) { phStatus.innerHTML = "Médio"; divPHstatus.classList.add("medium_status")}
            if(value >= 6.4 && value <= 6.7 || value >= 7.6 && value < 8) { phStatus.innerHTML = "Bom"; divPHstatus.classList.add("god_status")}
            if(value >= 6.8 && value <= 7.5) { phStatus.innerHTML = "Excelente"; divPHstatus.classList.add("great_status")}
            }
        }
    };
  
    xhttp.open("GET", "http://192.168.15.12/" + url_name + "_value", true);
    xhttp.send();

    const update = new Date();
    document.getElementById("last_update_" + url_name).innerHTML = update.getDate() + "/" + (update.getMonth()+1) + " - " +update.getHours() + ":" + update.getMinutes() + ":" + update.getSeconds();
    ;

  });
}, 2000 ) ;


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


// Pegar custo relativo e semanal
function getCostInfos(){
  
  let request = new XMLHttpRequest()
  let url = "https://script.google.com/macros/s/AKfycbwl5PcB-M3V8pyeAh95yfImv3gxEk4Nn__lGIAzsuzh3B0ZEmxKpP8451hrwtNbPY_NCA/exec?read"

  request.open("GET", url)
  request.send()

  request.onload = function() {
  let data = request.responseText.split(',');

  relativeCostOutput.innerHTML = "&nbsp" + parseFloat(data[5]).toFixed(2)
  weekCostOutput.innerHTML = "&nbsp" + parseFloat(data[6]).toFixed(2)}

}

getCostInfos()


setTimeout(()=> {

//NÃO HÁ ALERTAS NO MOMENTO
const NoAlerts = document.querySelector(".no_alerts")
const wrapperAlerts = document.querySelector(".wrapper_alerts")
const close = document.createElement("i");

console.log($(".no_alerts").siblings() )



        //FECHAR ALERTA
        close.onclick = function() {
            $(close).parent().remove();
            NoAlerts.classList.remove("hidden")
        }

 //apikey: 0d89eff8-78bc-409a-8c4b-821247d91971
    if (qtdFoodReservoir< 0.5) {  fetch('https://api.mynotifier.app', { method: 'POST' , headers: { 'Content-Type' : 'application/json'
        , }, body: JSON.stringify({ apiKey: '0d89eff8-78bc-409a-8c4b-821247d91971' , message: 'A ração está acabando!' ,
        description: 'A quantidade de ração disponível no reservatório é inferior a 0.5kg. É hora de reabastecer!' ,
        type: 'success' , project: "" , }), })

        const AlertDiv = document.createElement("div");
        const AlertP = document.createElement("p");
        const icon = document.createElement("i");


        wrapperAlerts.appendChild(AlertDiv);
        AlertDiv.appendChild(AlertP)
        AlertDiv.appendChild(close);

        close.classList.add("close_alert")
        close.classList.add("fa")
        close.classList.add("fa-close")
        icon.classList.add("fa-solid")
        icon.classList.add("fa-triangle-exclamation");
        AlertDiv.classList.add("alert");
        AlertDiv.classList.add("danger_alert");

        let date = new Date();
        AlertP.appendChild(icon);
        AlertP.innerText ="A quantidade de ração disponível no reservatório é inferior a 0.5kg. É hora de reabastecer! - " + date.getDate() + "/" + (date.getMonth()+1) + " - " +date.getHours() + ":" + date.getMinutes();
        
        NoAlerts.classList.add("hidden")
        
 }; 
}, 2500)

/*

//// FUNÇÃO PARA POSTAR AS VARIÁVEIS NO DATA_USER USANDO A API SHEETDB
function PostData(url, body) {
  console.log("Body = ", body);
  let request = new XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(body))

  request.onload = function() {
console.log(this.responseText)
}

return request.responseText
}


function CadUser(){
  event.preventDefault() 

  let url = "https://sheetdb.io/api/v1/ywnzuzbeaipou"
  let date = new Date()

  let body = [
    {
      data: date.toLocaleDateString(),
      especie: $input1.val(),
      idade: parseInt($input2.val(), 10),
      qtd_peixes: parseFloat($input3.val(), 10),
      peso_medio: parseFloat($input4.val(), 10),
      qtd_ideal_dia: parseFloat($input5.val(), 10),
      tipo_racao: $input6.val(),
      frequencia: parseInt($input7.val(), 10),
      ref1: $input8.val() + ":" + "00",
      ref2: $input9.val(),
      ref3: $input10.val(),
      ref4: $input11.val(),
      ref5: $input12.val()
    },
  ]

  PostData(url, body)

}






//FUNÇÃO PARA PEGAR VALORES DA PLANILHA DATA_USER USANDO A API SHEETDB

function GetData(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function main() {
  
  let data = GetData("https://sheetdb.io/api/v1/ywnzuzbeaipou");
  console.log(data);
  let TableUserDatas = JSON.parse(data);
  const LastData = TableUserDatas[TableUserDatas.length - 1];
  console.log(LastData)
  $("#kind_fish").text(LastData.especie);
  $("#age").text(LastData.idade);
  $("#amount-fish").text(LastData.qtd_peixes);
  $("#weight-fish").text(LastData.peso_medio);
  $("#amount-feed-ideal").text(LastData.qtd_ideal_dia);
  $("#kind-feed").text(LastData.tipo_racao);
  $("#freq").text(LastData.frequencia);
  $("#feedForMeal").text(LastData.qtd_ideal_vez);

  $("#meal1").text(LastData.ref1);
  $("#meal2").text(LastData.ref2);
  $("#meal3").text(LastData.ref3);
  $("#meal4").text(LastData.ref4);
  $("#meal5").text(LastData.ref5); 

}

main()
*/