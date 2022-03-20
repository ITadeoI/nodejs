var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/ip.json',
  params: {q: '83.41.148.28'},
  headers: {
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    'x-rapidapi-key': '46c3c06dc6msha3592b40bec5d16p1c5145jsn5e3fbe8d9e94'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});