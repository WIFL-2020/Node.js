const express = require('express')

const app = express()

app.use((req, res) => {
    console.log('网站维护中。。。');
})
const m1 = (req, res, next) => {
    console.log('这是中间件函数');
    next()
}
app.get('/', (req, res, next) => {
    res.send('这是一个简单的中间件函数')
    next()
})
app.post('/', (req, res, next) => {

})


app.listen(80, () => {
    console.log('helow word!');
})