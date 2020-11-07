//导入模块
// const http = require('http')
//     //创建实例
// const server = http.createServer()
//     //req是请求对象，包含了与客户端相关的数据和属性
// server.on('request', function(req) {
//         console.log();
//         const url = req.url
//         const method = req.method
//         const str = `Your request url is ${url},and request method is ${method}`
//         console.log(str);
//     })
//     //req.method是客户端请求的 merhod类型
// server.listen(8080, function() {
//     console.log('server running at http://127.0.0.1');
// })

//导入模块
const http = require('http')
const fs = require('fs')
const path = require('path')
    //创建服务器
const server = http.createServer()
    //调用方法
server.on('request', (req, res) => {
        //获取地址
        const url = req.url
            //判断请求类型以及
        let fpath = ''
        if (url === '/') {
            fpath = path.join(__dirname, '../code/clock/index.html')
        } else {
            fpath = path.join(__dirname, '../code/clock', url)
        }
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
                if (err) return res.end('404 not found!')
                res.end(dataStr)
            })
            // res.setHeader('Content-Type', 'text/html;charset=utf-8')
            // res.end()
    })
    //启动服务区
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})