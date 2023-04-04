
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

// Pegar quantidade de ração no reservatório:
function getReservoir(variable, callback) {
    const url = 'https://industrial.api.ubidots.com/api/v1.6/variables/' + variable +
    '/values';
    
    const headers = {
    'X-Auth-Token': TOKEN,
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
    getReservoir(RESERVOIR, function (data) {
    const value = data.results[0].value;
    console.log(value);
    if (value < 0.5) {  fetch('https://api.mynotifier.app', { method: 'POST' , headers: { 'Content-Type' : 'application/json'
        , }, body: JSON.stringify({ apiKey: '0d89eff8-78bc-409a-8c4b-821247d91971' , message: 'A ração está acabando!' ,
        description: 'A quantidade de ração disponível no reservatório é inferior a 0.5kg. É hora de reabastecer!' ,
        type: 'success' , project: "" , }), })

        const AlertDiv = document.createElement("div");
        const AlertP = document.createElement("p");
        const icon = document.createElement("i");


        wrapperAlerts.appendChild(AlertDiv);
        AlertDiv.appendChild(AlertP)
        AlertP.appendChild(icon);
        AlertDiv.appendChild(close);

        close.classList.add("close_alert")
        close.classList.add("fa")
        close.classList.add("fa-close")
        icon.classList.add("fa-solid")
        icon.classList.add("fa-triangle-exclamation");
        AlertDiv.classList.add("alert");
        AlertDiv.classList.add("danger_alert");

        const timestamp=data.results[0].timestamp; var date=new Date(timestamp); 
        const text = document.createTextNode("A quantidade de ração disponível no reservatório é inferior a 0.5kg. É hora de reabastecer! - " + date.getDate() + "/" + (date.getMonth()+1) + " - " +date.getHours() + ":" + date.getMinutes());
        AlertP.appendChild(text)

        NoAlerts.classList.add("hidden")
        
 } });