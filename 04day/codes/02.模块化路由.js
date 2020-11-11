//引入模块
const express = require('express')
    //创建路由对象
const router = express.Router()
    //挂载路由
router.get('/', (req, res) => {
    console.log('我成功了');
    res.send('Get user list')
})
router.post('/', (req, res) => {
        console.log('好开心哦！');
        res.send('Add new user')
    })
    //向外导出路由对象
module.exports = router