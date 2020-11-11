const express = require('express')
const app = express()

//中间件的解析处理 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.get('/', (req, res) => {
    res.send('')
})
app.post('/', (req, res) => {
    res.send('')
})


app.listen(80, () => {

})