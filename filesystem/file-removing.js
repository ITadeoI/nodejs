const fs = require('fs');

// fs.rmdirSync('./newDirectory');

try {
  fs.unlinkSync('./views/new.html');
  
  getFilesInDirectory();
} catch (err) {
  console.log(err + 'here is the error');
}

function getFilesInDirectory() {
  console.log("\nFiles present in directory:");
  let files = fs.readdirSync(__dirname);
  files.forEach(file => {
    console.log(file);
  });
}





