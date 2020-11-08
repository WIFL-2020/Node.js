//调用模块
const express = require('express')
const app = express()

app.use(express.static('../素材/clock'))
    // app.use(express.static('../code/files'))cls


app.listen(80, () => {
    console.log('express running at http://127.0.0.1');
})