const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '/files/1.txt'), 'utf8', function(err, dataStr) {
    if (err) {
        return console.log(err.message);
    }
    console.log(dataStr);
})