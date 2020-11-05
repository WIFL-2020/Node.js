//导入fs 模块
const fs = require('fs')
const path = require('path')

//调用fs.readFile() 读取文件的内容
fs.readFile(path.join(__dirname, '../素材/成绩.txt'), 'utf8', function(err, dataStr) {
    //判断是否读取成功
    if (err) return console.log('读取学生信息失败' + err.message);
    console.log('读取信息成功' + dataStr);


    // console.log('读取文件成功！' + dataStr);
    //先把成绩的数据，按空客进行分割
    const arrOld = dataStr.split(' ')

    // console.log(arrOld);
    //循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
            arrNew.push(item.replace('=', ':'))
        })
        // console.log(arrNew);
        //把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')
        // console.log(newStr);

    // 调用fs.weiteFile() 方法， 把处理的成绩， 写入到新文件中
    fs.writeFile(path.join(__dirname, '../files/1.txt'), newStr, function(err) {
        if (err) return console.log('写入成绩失败' + err.message);
        console.log('写入成绩成功');
    })
})