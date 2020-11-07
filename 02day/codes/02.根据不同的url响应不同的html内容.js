//导入模块
const http = require('http')
    //创建服务器
const server = http.createServer()
    //监听事件
server.on('request', (req, res) => {
        const url = req.url
        let content = '<h1>404 not found!</h1>'

        if (url === '/' || url === '/index.html') {
            content = '<h1>首页</h1>'
        } else if (url === '/about.html') {
            content = '<h1>其他页面</h1>'
        }
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end(content)

    })
    //启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})