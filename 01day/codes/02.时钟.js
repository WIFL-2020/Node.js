//引入模块
const fs = require('fs')
const path = require('path')

//定义正则表达式规则
const regStyle = /<style>[\s\S]*<\/style>/
const regJS = /<script>[\s\S]*<\/script>/

//读取数据
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', function(err, dataStr) {
    if (err) return console.log('读取数据成功！' + err.message);
    console.log('读取成功' + dataStr);
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHtml(dataStr)
})

//定义获取CSS样式的方法
function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './clocks/index.css'), newCSS, function(err) {
        if (err) return console.log('写入CSS样式失败' + err.message);
        console.log('写入CSS样式成功');
    })
}

//定义获取JS脚本的方法
function resolveJS(htmlStr) {
    const r2 = regJS.exec(htmlStr)
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './clocks/index.js'), newJS, function(err) {
        if (err) return console.log('写入JS脚本失败' + err.message);
        console.log('写入JS脚本成功');
    })
}

//定义获取HTML结构的方法
function resolveHtml(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regJS, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './clocks/index.html'), newHTML, function(err) {
        if (err) return console.log('写入HMTL结构失败' + err.message);
        console.log('写入HTML结构成功')
    })
}