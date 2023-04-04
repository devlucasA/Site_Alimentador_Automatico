const lastTemp = document.querySelector("#last_update_temp")
const TempMetric = document.querySelector("#temp_metric")
const consumptionStatus = document.querySelector("#consumption_status");
  
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