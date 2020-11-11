//导入mysql模块
const mysql = require('mysql')
    //建立与mysql数据库的连接关系
const db = mysql.createPool({
        // host: '192.168.85.138', // 数据库的 IP 地址
        host: '127.0.0.1', // 数据库的 IP 地址
        user: 'root', // 登录数据库的账号
        password: 'root', // 登录数据库的密码
        database: 'itcast', // 指定要操作哪个数据库 
    })
    //查询
const sql = `select*from user`
    //添加  插入
    // const sql = `insert into users (username, password) values ('雷公','十万伏特')`

//删除 
// const sql = 'delete from users where id=137'
//声明要插入到users 表中的数据对象
// const user = { username: 'tom', password: '123456' }

//待执行 sql语句
// const sqlstr = 'insert into users (username,password) value(?,?)'
//     //使用数组的形式，依次为 ？ 占位符指定具体的值
// db.query(sqlstr, [user.username, user.password], (err, results) => {
//     //插入失败
//     if (err) return console.log(err.message);

//     //插入成功
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功');
//     }
// })

//更新 id为 2的用户，把

//测试mysql模块能否正常工作
db.query(sql, (err, results) => {
    if (err) return console.log(err);
    console.log(results);
})

// const user = { username: 'Spider-Man', password: 'pcc123' }

//演示更新数据