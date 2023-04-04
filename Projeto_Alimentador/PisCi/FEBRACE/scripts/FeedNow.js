//// Postar variável:
const amountFoodInput = $("#amount-food");
const sendButton = $("#submit");
const outputTime = document.querySelector('#output-timestamp');
const outputReservoir = document.querySelector("#output-reservoir")


//const START_FEED = "6323b1f66d471105ef887b11";

let FoodReservoir = 0;



// Pegar variáveis do Ubidots:

function getDate(token, variable, callback) {
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
getDate(TOKEN, AMOUNT_FOOD_PROVIDED, function (data) {
const timestamp = data.results[0].timestamp;
var date = new Date(timestamp);
outputTime.innerHTML = date.getDate() + "/" + (date.getMonth()+1) + " - " +date.getHours() + ":" + date.getMinutes();;
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
FoodReservoir = value ;
console.log(FoodReservoir);
outputReservoir.innerHTML = value + " kg";

});

//


// Postar variáveis no Ubidots:

function postData(token, food, callback) {
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
callback(res.value);
},
data: JSON.stringify([
{
variable: AMOUNT_FOOD_PROVIDED,
value: food.val(),
},
{
variable: START_FEED,
value: 1,
},
{
variable: RESERVOIR,
value: parseFloat(FoodReservoir - amountFoodInput.val()).toFixed(2),
},
]),
});
}

// Postar variáveis ao clicar em "Salvar"
sendButton.on('click', function () {
if(amountFoodInput.val() > FoodReservoir) {
document.querySelector(".alert").classList.remove("hidden");
setTimeout(() => {document.querySelector(".alert").classList.add("hidden")}, 5000);
}
else {
postData(TOKEN, amountFoodInput, function (value) {
console.log('Enviado!');
});
document.querySelector(".notification").classList.remove("hidden");
setTimeout(() => {document.querySelector(".notification").classList.add("hidden")}, 5000);
outputReservoir.innerHTML = parseFloat(FoodReservoir - amountFoodInput.val()).toFixed(2);
setTimeout(() => {location.reload()}, 4000)
}

//const count = document.querySelector("#count");


});

const TempMetric = document.querySelector("#temp_metric")
  
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

        TempMetric.innerHTML = value;
    
    });