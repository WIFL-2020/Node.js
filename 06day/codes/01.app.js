//导入模块
const express = require('express')
    //创建服务器
const app = express()

//安装并导入JWT相关的两个包 ，分别是jsonwebtoken 和 express-jwt
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

//允许跨域资源共享
const cors = require('cors')
app.use(cors())

//托管静态页面
app.use(express.static('./01.session案例/pages'))
    //解析POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

//调用 

//TODO_01:请配置 Session中间件 
const session = require('express-session')
app.use(
    session({
        secret: 'itheima',
        resave: false,
        saveUninitialized: true
    })
)

app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
})