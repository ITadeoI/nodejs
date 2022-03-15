var path = require('path');

var name = 'alice in wonderland';

var upperCaseName = name.toUpperCase();

console.log(`new name variable in upperCaseName: ${upperCaseName}`);
console.log(__dirname);
console.log(path.basename(__filename));