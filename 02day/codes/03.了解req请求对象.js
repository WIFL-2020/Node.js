//调用模块
const http = require('http')
const server = http.createServer()
    //监听事件
server.on('request', (req, res) => {
        const url = req.url
        const method = req.method
        const str = `请求的地址为${url},请求的种类时${method}`
            // console.log(str);
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end(str)
    })
    //启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})