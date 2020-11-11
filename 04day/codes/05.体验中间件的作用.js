//导入模块
const express = require('express')
    //创建函数
const app = express()

// const mw = function(req, res, next) {
//         console.log('这是一个最简单的中间件函数');
//         next()
//     }
//全集生效的中间件
// app.use(mw)

//这是一个简化的全局中间件
app.use((req, res, next) => {
    // console.log('这是一个最简单的中间件函数');
    const time = Date.now()
    req.startTime = time
    next()
})

app.get('/', (req, res) => {
    // console.log('调用了这个路由');
    res.send('Home page' + req.startTime)

})
app.get('/user', (req, res) => {
        // console.log('没有调用这个路由');
        res.send('你好啊' + req.startTime)
    })
    //启动服务器
app.listen(80, () => {
    console.log('app server running at http://127.0.0.1');
})