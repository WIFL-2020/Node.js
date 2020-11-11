//导入模块
const express = require('express')
    //创建
const app = express()
    //导入路由模块
app.use(require('./02.模块化路由.js'))
    //注册路由模块
app.use('/api', require('./02.模块化路由'))
app.listen(80, () => {
    console.log('http://127.0.0.1');
})