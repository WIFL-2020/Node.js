const express = require('express')
const app = express('')
const mw = function(req, res, next) {
    console.log('这是一个最简单的中间件');
}
app.use(mw)
app.get('/', (req, res, next) => {
    console.log('hellow');
    res.send('hoa wo')
    next()
})
app.post('/', (req, res, next) => {
    res.send('bby')

})

app.listen(80, () => {
    console.log('app running at http://127.0.0.1');
})