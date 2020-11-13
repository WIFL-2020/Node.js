//导入模块
const mysql = require('mysql')
    //创建数据库连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'my_db_01'
})

//向外共享db数据库的连接对象
module.exports = db