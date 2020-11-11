//导入模块
const express = reqire('express')
    //创建服务器
const app = express()

//只会输出一个Hellow,第二个函数只是普通路由处理函数
app.get('/', (req, res) => {
    console.log('hellow');
})
app.get('/', (req, res) => {
    console.log('world');
})

//现在第二个参数就是一个中间件处理函数，当请求过来的时候，如果掉用了next（），会继续向下匹配请求方式和请求路径
app.get('/', (req, res, next) => {
    console.log('hello');
    next()
})

app.get('/', (req, res) => {
    console.log('world');
})

//全局生效的中间件处理函数，无论任何请求方式和请求地址都会走这里的处理程序
const md = (req, res, next) => {
    console.log('hello');
    next()
}
app.use(md)
app.get('/', (req, res) => {
    console.log('world');
})



//代码的输出结果
const express = require('express')
const app = express()

const mw1 = (req, res, next) => {
    console.log('调用了第一个局部生效的中间件');
    next()
}
const mw2 = (req, res, next) => {
    console.log('调用第二个局部生效的中间件');
    next()
}

app.listen(80, () => {
        console.log('app server at http://127.0.0.1');
    })
    //2.创建路由
app.get('/', [mw1, mw2], (req, res, next) => {
    console.log('hellow');
    next()
})
app.get('/', (req, res) => {
    console.log('world');
    res.send('user page')
})

//调用app.listen方法，指定端口号并启动web服务器
app.listen(8080, function() {
    console.log('Express server running at http://127.0.0.1');
})


//中间件的应用场景
//挂载请求信息
app.use((req, res, next) => {
    //获取到请求到达服务器的时间
    //为req对象，挂载自定义属性，从而把时间共享给后面的所有路由
    req.startTime = Date.now()
    next()
})

app.get('/', (req, res) => {
    res.send('Home page.' + req.startTime)
})

//网站的维护公告
//注意这个代码要写在所有路由的最前面
app.use((req, res) => {
    res.send('此网站正在维护中...')
})

//错误处理
app.get('/', (req, res) => {
        //1.1人为的制造错误
        throw Error('服务器内部发生了错误')
            //throw Error('服务器内部发生了错误')
            //如果说这样写，这时候错误处理中间件的第一个参数不再是一个错误对象了，而是字符串错误提示
            //throw '服务器内部发生了错误
        res.send('Home page')
    })
    //注意必须是4个参数，放到所有路由的最后
app.use((err, req, res, next) => {
    console.log('发生了错误' + err.message);
    res.send('Error:' + err.message)
})

//关于异步错误的处理
app.get('/', (req, res, next) => {
        false.readFile('/aa.txt', 'utf8', (err, data) => {
            if (err) {
                //可以把错误对象通过next函数传递给错误处理中间件的第一个参数
                return next(err)
            }
            res.send(data)
        })
    })
    //注意必须是4个参数，放到所有路由的最后
app.use((err, req, res, next) => {
    console.log('发生了错误！' + err.message);
    res.send('Error:' + err.message)
})

//404
//放到所有路由的最后面
app.use((req, res) => {
    res.send('404')
})

//解析前端传递数据
//application/json
app.use(express.json())
    //application/x-www-form-urlencoded
    //extended 是  false 的话，会使用内部的 querystring 模块进行解析，extended 是true 的话，会使用第三方的qs模块进行解析
app.use(express.urlencoded({ extended: false }))

//旧版（4.16之前）Express 解析数据的写法
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 模拟第三方的 body-parser
//body-parser2.js
const querystring = require('querystring')
module.exports = {
    urlencoded: obj => (req, res, next) => {
        //定义中间件具体的业务逻辑
        //1.定义一个str字符串，专门用来存储客户端发送过的请求数据
        let str = ''
            //2.监听req的data事件
        req.on('data', (chunk) => {
                str += chunk
            })
            //3.监听req的end事件
        req.on('end.extended') {
                //如果说传递的 extended是fasle 就是用内部的 querystring 模块去解析数据
                //在str中存放的是完整的请求体数据
                //name=ifer&age=18
                //{name:'ifer',age:18}
                //把解析好的数据挂载到req.body上面
                req.body = querystring.parse(str)
                next()
            }
            //如果说传递的extended是 true ，用第三方的qs模块去解析数据

    }
}

//外部使用就可以向像使用body-parset一样去使用了 
const bodyParser = require('./body-parser2')
app.use(bodyParser.urlencoded({ extended: false }))

//模拟req.query的实现
const url = require('url')
    //引入 express
const express = require('express')
    //创建服务器对象
const app = express()
    //自己也模拟一个req.query
app.use((req, res, next) => {
    // 只需要在这一步，把解析后的数据挂载到 req.query2 上面
    // console.log(req.url); // /?name=ifer&age=18
    // 如果说第二个参数不传递，解析出来的 query 是 name=ifer&age=18
    // 如果说第二个参数传递的是 true，解析出来的 query 是 { name: 'ifer', age: 18 }
    const { query, pathname } = url.parse(req.url, true)
    req.query2 = query
    next()
})
app.get('', (req, res) => {
    res.send(req.query2)
})
app.listen(3000, () => { console.log('Server running on http://locahost:3000'); })