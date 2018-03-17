// var fs = require('fs');
//
// var text = fs.readFileSync(process.argv[2]);
//
//
// console.log(text.toString().split('\n').length -1);

var fs = require('fs');

console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length -1);
