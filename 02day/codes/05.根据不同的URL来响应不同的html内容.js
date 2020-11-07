//调用模块
const http = require('http')
    //构建服务器
const server = http.createServer()

// 绑定事件

server.on('request', (req, res) => {
    //获取url地址
    const url = req.url
        //定义反应变量
    let content = '<h1>404 not found!</h1>'
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>其他页面</h1>'
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(content)
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})