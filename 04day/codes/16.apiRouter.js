//导入模块
const express = require('express')
    //创建服务器
const router = express.Router()

//导入路由模块
router.get('/get', (req, res) => {
    const query = req.query

    res.send({
        status: 0,
        msg: 'GET 请求成功！',
        date: query
    })
})

//定义post接口
router.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST 请求成功！',
        data: body
    })
})