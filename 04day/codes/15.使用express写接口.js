//导入模块
const express = require('express')
    //创建服务器
const app = express()

app.use('/api', require('./16.apiRouter'));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api/jsonp', (req, res) => {
    //定义JSONP接口
    //1.得到函数的名称
    const funcName = req.query.callback
        //2.定义要发送给客户端的数据对象
    const data = { name: 'zs', age: 22 }
        //3.拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
        //4.把拼接的字符串，响应给客户端
    res.send(scriptStr)
})

const cors = require('cors')
    //启动服务器
app.listen(80, () => {
    console.log('express running at http://127.0.0.1');
})