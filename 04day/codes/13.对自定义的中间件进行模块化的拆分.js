const url = require('url')

const express = require('express')

const app = express()

app.use((req, res, next) => {
    //如果  
    const { query } = url.parse(req, url, true)
    req.query2 = query
    next()
})

app.get('/', (req, res) => {
    res.send(req.query2)
})

app.listen(80, () => {
    console.log('Server running on http://127.0.0.1');
})