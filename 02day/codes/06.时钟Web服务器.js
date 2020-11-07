//引入模块
const http = require('http')
const fs = require('fs')
const path = require('path')
    //创建服务器
const server = http.createServer()
    //为其绑定request事件
server.on('request', (req, res) => {
    //获取地址
    const url = req.url
        //判断输入的地址
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, '../素材/clock/index.html')
    } else {
        fpath = path.join(__dirname, '../素材/clock', url)
    }
    //读取服务器的数据
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) return res.end('404 not found!')
        res.end(dataStr)
    })
})

//启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})