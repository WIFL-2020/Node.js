//引入模块
const mysql = require('mysql')
    //建立连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'itcast'
})

const user = { username: 'czc', password: '123456' }

const sqlstr = 'insert into user SET ?'

//使用数组的形式，依次为？ 占位符指定具体的值
db.query(sqlstr, user, (err, results) => {
    //插入失败
    if (err) return console.log(err.message);

    //插入成功
    if (results.affectedRows === 1) {
        console.log('插入数据成功');
    }
})