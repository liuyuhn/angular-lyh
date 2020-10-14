var fs = require('fs');

fs.writeFile('mynewFile3.txt', 'This is my text.I want to update.', function (err){
    if (err) throw err;
    console.log('replaced!');
});