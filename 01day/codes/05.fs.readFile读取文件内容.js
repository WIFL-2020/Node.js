const path = require('path')
const fs = require('fs')

fs.readFile(path.join(__dirname, '..', 'files', '1.txt'), 'utf8', function(err, dataStr) {
    if (err) {
        return console.log("读取失败" + err.message);
    }
    console.log('读取数据成功' + dataStr);
})