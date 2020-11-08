//导入模块
const express = require('express')
    //创建服务器
const app = express()

app.get('/user/:id', (req, res) => {
    res.send({ name: 'zs', age: 20, sex: '男' })
    console.log(req.jqurey);
    console.log(req.params);
})
app.post('/', (req, res) => {
        res.send('请求成功')
    })
    //启动服务器
app.listen(80, () => {
    console.log('express server at http://127.0.0.1');
})