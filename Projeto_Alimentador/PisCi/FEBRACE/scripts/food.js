//QUANTIDADE DE RAÇÃO NO RESERVATÓRIO

const lastFeed = document.querySelector("#last_update_food");
const lastFeed2 = document.querySelector("#last_feed2");
const FoodMetric = document.querySelector("#food_metric");

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
	lastFeed.innerHTML = date.getDate() + "/" + (date.getMonth()+1) + " - " +date.getHours() + ":" + date.getMinutes();
    lastFeed2.innerHTML = date.getDate() + "/" + (date.getMonth()+1) + " - " +date.getHours() + ":" + date.getMinutes();;
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