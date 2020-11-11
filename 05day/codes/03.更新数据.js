//导入模块
const mysql = require('mysql')
    //建立连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'itcast'
})

//声明插入的对象
// const user = { id: 6, username: 'wcc', password: 'wandajituan00' }
//     //d待执行语句
// const sqlstr = 'update user SET username=?, password=? where id=?'

// //调用db.query()执行sql语句 的同时，
// db.query(sqlstr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) {
//         console.log('更新数据成功');
//     }
// })

const user = { id: 6, username: 'wsc', password: 'wanda' }

const sqlstr = 'update user set? where id=?'

db.query(sqlstr, [user, user.id], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRoms === 1) {
        console.log('更新数据成功');
    }
})