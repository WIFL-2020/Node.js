const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, '../files/3.txt'), 'utf8', function(err, dataStr) {
    if (err) return console.log('读取数据失败' + err.message);
    console.log('读取数据成功' + dataStr);
    fs.writeFile(path.join(__dirname, '../files/2.txt'), dataStr, function(err) {
        if (err) return console.log('写入数据失败' + err.message);
        console.log('写入数据成功' + dataStr);
    })
})