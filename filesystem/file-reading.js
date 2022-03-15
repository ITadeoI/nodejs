const fs = require('fs');

fs.readdir('./', (err, content) => {
  
  if (err) return err;
  
  fs.readFile(content.pop(), 'UTF-8', (err, content) => {
    
    console.log(content);
    
  });
});

