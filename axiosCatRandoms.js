const axios = require('axios');

axios.get('https://catfact.ninja/fact').then((res) => {
  
  console.log(res.data);
  
}).catch((err) => {
  
  console.log(err);
  
});
