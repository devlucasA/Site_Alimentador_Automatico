// FAZER ARRAYS DAS VARIÁVEIS
// TIRAR O $ DAS VARIÁVEIS DECLARADAS
// CAMELCASE EM TODAS AS VARIÁVEIS
// COLOCAR $ NO LUGAR DE QUERYSELECTOR

const cardsWrapper = document.querySelector(".cards-wrapper");
const buttonClose = document.querySelectorAll(".close-icon");
const cardMaster = document.querySelectorAll(".card-master");
const buttonBack = document.querySelectorAll(".return-arrow");
const advanceButton = document.querySelectorAll(".advance-button");
const input_def = document.querySelectorAll(".label_input_def b");
const divMask = document.querySelector(".div-mask");
const meals = document.querySelectorAll(".meal");
const $input1 = $('#input1');
const $input2 = $('#input2');
const $input3 = $('#input3');
const $input4 = $('#input4');
const $input5 = $('#input5');
const $input6 = $('#input6');
const $food1 = $('#food1');
const $food2 = $('#food2');
const $food3 = $('#food3');
const $food4 = $('#food4');
const $food5 = $('#food5');
const $food6 = $('#food6');
const $input7 = $('#input7');
const $input8 = $('#input8');
const $input9 = $('#input9');
const $input10 = $('#input10');
const $input11 = $('#input11');
const $input12 = $('#input12');

var $saveButton = $('#save-button');


// Definir o tamanho dos inputs conforme o tamanho do conteúdo:
//input.innerText = 'Lambari'

// Calcular qtd. de ração:
function CalcFeedAmount() {

    if ($input4.val() < 5) {$input5.val((parseFloat($input3.val() * $input4.val() * 0.14 / 1000)).toFixed(2));}
    else if ($input4.val() >= 5 && $input4.val() < 10) {$input5.val((parseFloat($input3.val() * $input4.val() * 0.08 / 1000)).toFixed(2));}
    else if ($input4.val() >= 10 && $input4.val() < 20) {$input5.val((parseFloat($input3.val() * $input4.val() * 0.05 / 1000)).toFixed(2));}
    else if ($input4.val() >= 20 && $input4.val() < 50) {$input5.val((parseFloat($input3.val() * $input4.val() * 0.045 / 1000)).toFixed(2));}
    else if ($input4.val() >= 50 && $input4.val() < 150) {$input5.val((parseFloat($input3.val() * $input4.val() * 0.034 / 1000)).toFixed(2));}
    else if ($input4.val() >= 150 && $input4.val() < 250) {$input5.val((parseFloat($input3.val() * $input4.val() * 0.03 / 1000)).toFixed(2));}
    else if ($input4.val() >= 250 && $input4.val() < 400) {$input5.val((parseFloat($input3.val() * $input4.val() * 0.022 / 1000)).toFixed(2));}
    else if ($input4.val() >= 400 && $input4.val() < 600) {$input5.val((parseFloat($input3.val() * $input4.val() * 0.014 / 1000)).toFixed(2));}
    else if ($input4.val() >= 600 && $input4.val() < 800) {$input5.val((parseFloat($input3.val() * $input4.val() * 0.01 / 1000)).toFixed(2));}
    else if ($input4.val() >= 800 && $input4.val() < 1300) {$input5.val((parseFloat($input3.val() * $input4.val() * 0.008 / 1000)).toFixed(2));}
    else if ($input4.val() > 1300) {$input5.val((parseFloat($input3.val() * $input4.val() * 0.006 / 1000)).toFixed(2));}

}

// Indicar o tipo de ração e frequência de arraçoamento:
function kindFeed() {
    if ($input4.val() < 5) { $food1.attr("selected", "selected"); $input7.val(5);}

    if ($input4.val() >= 5 && $input4.val() < 10) {
        $input7.val(4);
        if ($input4.val() >= 5 && $input4.val() < 50) { $food2.attr("selected", "selected");}
    }
    if ($input4.val() >= 10 && $input4.val() < 250) {
        $input7.val(3);
        if ($input4.val() >= 5 && $input4.val() < 50) { $food2.attr("selected", "selected");}
        if ($input4.val() >= 50 && $input4.val() < 150) { $food3.attr("selected", "selected");}
        if ($input4.val() >= 150 && $input4.val() < 250) { $food4.attr("selected", "selected");}
  
    }
    if ($input4.val() > 250) {
        $input7.val(2);
        if ($input4.val() >= 250 && $input4.val() < 800) { $food5.attr("selected", "selected");}
        if ($input4.val() >= 800) { $food6.attr("selected", "selected");}
    }
}

// Abrir os inputs de horários de acordo com a frequência:
function activeSchedules() {
        meals.forEach(element => {
            element.classList.add("hidden");
        });
        if($input7.val() == 1) { meals[0].classList.remove("hidden");}
        if($input7.val() == 2) { meals[0].classList.remove("hidden"); meals[1].classList.remove("hidden");}
        if($input7.val() == 3) { meals[0].classList.remove("hidden"); meals[1].classList.remove("hidden"); meals[2].classList.remove("hidden");}
        if($input7.val() == 4) { meals[0].classList.remove("hidden"); meals[1].classList.remove("hidden"); meals[2].classList.remove("hidden"); meals[3].classList.remove("hidden");}
        if($input7.val() == 5) { meals[0].classList.remove("hidden"); meals[1].classList.remove("hidden"); meals[2].classList.remove("hidden"); meals[3].classList.remove("hidden"); meals[4].classList.remove("hidden");}
    };


// Abrir os cards de configuração:
function openModal() {
    cardsWrapper.classList.remove("hidden");
    divMask.style.opacity = "30%";
}

// Fechar modal:
function closed() {   
    cardsWrapper.classList.add("hidden");
    divMask.style.opacity = "100%";
}

// Voltar para o card anterior:
function back(buttonBack) {   
    const buttonNumber = buttonBack.className.replace(/[^0-9]/g,'')
    cardMaster[buttonNumber-2].classList.remove("hidden");
    cardMaster[buttonNumber-1].classList.add("hidden");
}

// Avançar para o próximo card:
function advance(submitButton) {   
    const buttonNumber = submitButton.className.replace(/[^0-9]/g,'')
    cardMaster[buttonNumber-1].classList.add("hidden");
    cardMaster[buttonNumber].classList.remove("hidden");
}

// Variáveis ubidots:
const TOKEN = 'BBFF-XZJulh8fbTcknZ3S4Dc7rQ0aZZZOty';
const KIND_FISH = "632b9f25a3b1bc26934a0863";
const AGE = "632b9fab880e54237d1c3512";
const AMOUNT_FISH = '6323b191fde0be0ed4d9799e';
const WEIGHT_FISH = "6323b186c933060e9b61627c";
const AMOUNT_FEED_IDEAL = "6323b1c46d47110b3356ced8";
const KIND_FEED = "632b9f4018d24d2e10572acd";
const FREQ = "6323b6046d47110b3356cedf";
const MEAL1 = "6323b1fcc933060e99296aec";
const MEAL2 = "6323b200fde0be0cd5733db0";
const MEAL3 = "6323b2079df2110b0bfbdf65";
const MEAL4 = "6323b20da3c1da08562f812b";
const MEAL5 = "6323b213f949ec0778885559";

//// Postar variável:

function postData(inputs, callback) {
    const hourMeal1 = inputs[7].val().split(':');
    const hourMeal2 = inputs[8].val().split(':');
    const hourMeal3 = inputs[9].val().split(':');
    const hourMeal4 = inputs[10].val().split(':');
    const hourMeal5 = inputs[11].val().split(':');

    var minMeal1 = (+hourMeal1[0]) * 60 + (+hourMeal1[1]);
    var minMeal2 = (+hourMeal2[0]) * 60 + (+hourMeal2[1]);
    var minMeal3 = (+hourMeal3[0]) * 60 + (+hourMeal3[1]);
    var minMeal4 = (+hourMeal4[0]) * 60 + (+hourMeal4[1]);
    var minMeal5 = (+hourMeal5[0]) * 60 + (+hourMeal5[1]);

  const url = 'https://industrial.ubidots.com/api/v1.6/collections/values';
  
  const headers = {
    'Content-Type': 'application/json',
    'X-Auth-Token': TOKEN
  };

  $.ajax({
    url: url,
    method: 'POST',
    headers: headers,
    success: function (res) {
  	  callback(res.value, res.context);
  	},
    data: JSON.stringify([
        {
            variable: KIND_FISH,
            value: 0,
            context: {"key" : inputs[0].val()},
        },
        {
            variable: AGE,
            value: parseInt(inputs[1].val(), 10),
            context: {"key" : ""},
        },
        {
            variable: AMOUNT_FISH,
            value: parseFloat(inputs[2].val(), 10),
            context: {"key" : ""},
        },
        {
            variable: WEIGHT_FISH,
            value: parseFloat(inputs[3].val(), 10),
            context: {"key" : new Date()},
        },
        {
            variable: AMOUNT_FEED_IDEAL,
            value: parseFloat(inputs[4].val(), 10),
            context: {"key" : ""},
        },
        {
            variable: KIND_FEED,
            value: 0,
            context: {"key" : inputs[5].val()},
        },
        {
            variable: FREQ,
            value: parseInt(inputs[6].val(), 10),
            context: {"key" : ""},
        },
        {
            variable: MEAL1,
            value: minMeal1,
            context: {"key" : inputs[7].val()},
        },
        {
            variable: MEAL2,
            value: minMeal2,
            context: {"key" : inputs[8].val()},
        },
        {
            variable: MEAL3,
            value: minMeal3,
            context: {"key" : inputs[9].val()},
        },
        {
            variable: MEAL4,
            value: minMeal4,
            context: {"key" : inputs[10].val()},
        },
        {
            variable: MEAL5,
            value: minMeal5,
            context: {"key" : inputs[11].val()},
        },
    ]),
  });
}

// Postar variáveis ao clicar em "Salvar"
$saveButton.on('click', function () {
    postData([$input1, $input2, $input3, $input4, $input5, $input6, $input7, $input8, $input9, $input10, $input11, $input12], function (value) {
        console.log('Enviado!');
      //  window.location.reload();
    });
   closed();
});


// Pegar variável do ubidots:

const varsUbidots = [
    KIND_FISH, AGE, AMOUNT_FISH, WEIGHT_FISH, AMOUNT_FEED_IDEAL, KIND_FEED, FREQ, MEAL1, MEAL2, MEAL3, MEAL4, MEAL5
];

const varUbidotsValues = {

}

const output1 = document.querySelector("#kind_fish");
const output2 = document.querySelector("#age");
const output3 = document.querySelector("#amount-fish");
const output4 = document.querySelector("#weight-fish");
const output5 = document.querySelector("#amount-feed-ideal");
const output6 = document.querySelector("#kind-feed");
const output7 = document.querySelector("#freq");
const output8 = document.querySelector("#meal1");
const output9 = document.querySelector("#meal2");
const output10 = document.querySelector("#meal3");
const output11 = document.querySelector("#meal4");
const output12 = document.querySelector("#meal5");
const output13 = document.querySelector("#feedForMeal");

function getDataFromVariable(token, callback) {
    const url = 'https://industrial.api.ubidots.com/api/v1.6/variables/';

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

const lastValues = [];
const context = [];

function ValuesInInputs () {
    setInterval(1)
    $input1.val(context[0])
    $input2.val(lastValues[1])
    $input3.val(lastValues[2])
    $input4.val(lastValues[3])
    $input5.val(lastValues[4])
    $input6.val(context[5])
    $input7.val(lastValues[6])
    $input8.val(context[7])
    $input9.val(context[8])
    $input10.val(context[9])
    $input11.val(context[10])
    $input12.val(context[11])

    console.log(lastValues[1])
}

function ValuesInOutputs() {
    output1.innerHTML = context[0];
    output2.innerHTML = lastValues[1];
    output3.innerHTML = lastValues[2];
    output4.innerHTML = lastValues[3];
    output5.innerHTML = lastValues[4];
    output6.innerHTML = context[5];
    output7.innerHTML = lastValues[6];
    output8.innerHTML = context[7];
    output9.innerHTML = context[8];
    output10.innerHTML = context[9];
    output11.innerHTML = context[10];
    output12.innerHTML = context[11];
    output13.innerHTML = (lastValues[4] / lastValues[6]).toFixed(2); 
}

getDataFromVariable (TOKEN, function (data) {
    varsUbidots.forEach(variable => {
        const varDef = data.results.filter((item) => item.id === variable);
        varDef.map((element) => { 
            lastValues.push(element.last_value['value']);
           
            context.push(element.last_value['context'].key);
             });
});
ValuesInOutputs()
ValuesInInputs()
    });

 
