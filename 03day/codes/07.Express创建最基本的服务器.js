//导入模块
const express = require('express')
    //创建Web服务器
const app = express()
    //调用app.listen 端口启动函数

//监听请求
app.get('../code/user', (req, res) => {
    res.send({ name: 'zs', age: 20, gender: '男' })
})
app.post('../code/user', (req, res) => {
    res.send('请求成功')
})
app.get('/', (req, res) => {
    console.log(req.query);
    res.send(req.query)
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    res.send(req.params)
})
app.get('/user/:ids:name', (req, res) => {
    console.log(req.params);
    res.end(req.params)
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})