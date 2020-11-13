//导入 express模块
const express = require('express')

//创建 express的服务器实例
const app = express()

//

//导入cors中间件
const cors = require('cors')
    //讲cors注册为全局中间件
app.use(cors())

//配置解析application/x-www-form-urlencoded表的的中间件
app.use(express.urlencoded({ extended: false }))

//导入并使用路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

//调用方法 启动 web服务器
app.listen(3007, () => {
    console.log('api server running at http://127.0.0.1:3007');
})