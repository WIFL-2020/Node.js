const express = require('express')

const router = express.Router()

//导入用户路由处理函数模块
const userHander = require('../router_handler/user')


//创建路由对象

//注册
router.post('/reguser', userHander.regUser)


// 登录
router.post('/login', userHander.login)

// 将路由对象共享出去 
module.exports = router