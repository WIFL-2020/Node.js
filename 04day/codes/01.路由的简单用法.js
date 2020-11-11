const express = require('express')
const app = express('')
    //挂载路由
app.get('/', (req, res) => {
    res.send('Hellow word')
})
app.post('/', (req, res) => {
    res.send('Post Request')
})

app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})