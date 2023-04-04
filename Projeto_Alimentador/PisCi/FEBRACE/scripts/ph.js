const phMetric = document.querySelector("#ph_metric");
const lastpH = document.querySelector("#last_update_ph")
const phStatus = document.querySelector("#ph_status")
const divPHstatus = document.querySelector("#div_status_ph")

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
