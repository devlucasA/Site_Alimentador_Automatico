const TOKEN = 'BBFF-XZJulh8fbTcknZ3S4Dc7rQ0aZZZOty';
const AMOUNT_FOOD_PROVIDED = "6323b1edfb74ce0a8ec2fa7d";

// Pegar a última quantidade de ração fornecida em um dia:
function getFoodProvided(variable, callback) {
  const url = 'https://industrial.api.ubidots.com/api/v1.6/variables/' + variable + '/values';

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

const results = [];
const FoodPerDay = [];

getFoodProvided(AMOUNT_FOOD_PROVIDED, function (data) {
  results.push(data.results);
  results[0].map(function(item){
    const time = new Date(parseInt(item.timestamp));
    item.timestamp = time.getDate().toString() + "/" + (time.getMonth()+1).toString() + "/" + time.getFullYear().toString();

  })

  results[0].reduce((group, item) => {
if (!group[item.timestamp]) {
  group[item.timestamp] = { timestamp: item.timestamp, value: 0 };
  
  FoodPerDay.push(group[item.timestamp]);
}

group[item.timestamp].value += item.value;

return group;
}, {});
});


// Gráfico de quantidade de ração fornecida por dia:
setTimeout(()=> {
  var chart = Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Quantidade de ração fornecida por dia'
    },
    xAxis: {
        type: "datetime",
        labels: {
            format: '{value:%d/%m}',
          }
    },
    credits: {
        enabled: false
    },
    series: [{
      showInLegend: false,   
      data: []
    }]
  });
  
  var data = FoodPerDay.map(function (item) {

  const [date] = item.timestamp.split(' ');
  const [day, month, year] = date.split('/');
  const Completedate = new Date(+year, month - 1, +day);
  console.log(FoodPerDay);
  return [Completedate.getTime(), item.value];
  
  });
  
  chart.series[0].setData(data);
}, 2000)
