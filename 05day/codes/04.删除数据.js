//导入模块
const mysql = require('mysql')
    //创建连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'itcast'
})

// const sqlstr = 'delete from user where id=?'

// db.query(sqlstr, 6, (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRoms === 1) {
//         console.log('删除数据成功');
//     }
// })

//标记删除
db.query('UPDATE USER SET status=1 where id=?', 5, (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('删除数据成功');
    }
})