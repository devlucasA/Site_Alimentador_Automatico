//// Postar variável:
const amountFoodInput = $("#amount-food");
const sendButton = $("#submit");
const outputTime = document.querySelector('#output-timestamp');
const outputReservoir = document.querySelector("#output-reservoir")
const tempMetric = document.getElementById("temp_metric")


let qtdFoodReservoir = 0

// Pegar a qtd de ração no reservatório
function getFood(){
  
  let request = new XMLHttpRequest()
  let url = "https://script.google.com/macros/s/AKfycbwqbhTaPlHCuBSQMZe0j8BhNxFctzfLAcqphMOA_SjRbRbH8kUYjt9gOXuhF1vQfoimCg/exec"

  request.open("GET", url)
  request.send()

  request.onload = function() {
  let data = request.responseText;
  let LastData = data.split(',');
    outputReservoir.innerText = LastData[0] + " kg"

  qtdFoodReservoir = LastData[0]
}
}
getFood()

// Ligar e Desligar o motor:
function openRotor() {
const alertDiv = document.getElementById("alert")

console.log(typeof parseFloat(qtdFoodReservoir))
console.log(typeof parseFloat(amountFoodInput.val()))

  if(parseFloat(amountFoodInput.val()) > parseFloat(qtdFoodReservoir)) {
    alertDiv.classList.remove("hidden")
    alertDiv.innerText = "A quantidade que você inseriu não pode ser fornecida. Verifique a quantidade de ração no reservatório"
    setInterval(() => {alertDiv.classList.add("hidden")}, 5000);
  }
  else if(amountFoodInput.val() < 0) {
    alertDiv.classList.remove("hidden")
    alertDiv.innerText = "Não é possível colocar números negativos"
  }

  else {

    document.querySelector(".notification").classList.remove("hidden");
    setInterval(() => {document.querySelector(".notification").classList.add("hidden")}, 8000);

    outputReservoir.innerText = parseFloat(qtdFoodReservoir-amountFoodInput.val()).toFixed(2) + " kg"

  let request = new XMLHttpRequest()
  request.open("GET", "http://192.168.15.12/ledon" + "?foodprovided=" + amountFoodInput.val(), false) // url para ligar o motor
  request.send();
  let foodProvidedIn5Sec = 5; // variável que define o quanto de ração o sistema distribui em 5 segundos
  let time = parseFloat(5 * 1000 * amountFoodInput.val() / foodProvidedIn5Sec).toFixed(2) // Variável que define quanto tempo o motor ficará ligado para fornecer a quantidade de ração especificada
  console.log(amountFoodInput.val())

  setTimeout(() => {
    fetch('http://192.168.15.12/ledoff')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }, 5000)


  request.open("GET", "https://script.google.com/macros/s/AKfycbwUhYvNoGI2RK8oA5Ty78M5vwgi1cut7rmKh7ZeAgCSLTygAbT9Irat7NWOCO--Gjvnrw/exec" + "?qtd=" + amountFoodInput.val())
  request.send()  

}
  //// Postar variável:
  /*
function PostData() {
  let request = new XMLHttpRequest()
  request.open("POST", "https://sheetdb.io/api/v1/6kvbc9frc7pwp", true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(amountFoodInput.val()))

return request.responseText
}

PostData()

*/
}


sendButton.on('click', function () {
  
openRotor()

})


	// Pegar Temp
  setInterval(function ( ) {

    const xhttp = new XMLHttpRequest(); 

    xhttp.onreadystatechange = function() {
       
        if (this.readyState == 4 && this.status == 200) {
          let value = this.responseText;
          tempMetric.innerText = value;
        }
    };
  
    xhttp.open("GET", "http://192.168.15.12/temp_value", true);
    xhttp.send();

    ;

}, 2000 ) ;

//ULTIMO ARRAÇOAMENTO
function GetLastFeed(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function mainFeed() {
  
  let data = GetLastFeed("https://script.google.com/macros/s/AKfycbydn9mZm8pI8Fvu82ruIpr6EzJrWSlPjFUI3Y1qwwDL6zkuiYrIlPPs9P71XCG7QbCJ/exec");
  let LastData = data.split(',');
  const time = new Date(LastData[4])
  outputTime.innerHTML = time.toLocaleDateString() + " - " + time.toLocaleTimeString('pt-BR');

}

mainFeed()
