//导入数据库操作模块：
const db = require('../db/index')
    //导入bcryptjs模块
const bcrypt = require('bcryptjs')

//注册用户的处理函数
exports.regUser = (req, res) => {
    // return res.send('reguser OK')

    const userinfo = req.body

    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, message: '用户名和密码不能为空！' })
    }
    //定义语句
    const sql = `select * from ev_users where username=?`
        //对注册做判断

    db.query(sql, [userinfo.username], function(err, results) {
        if (err) {
            // return res.send({ status: 1, message: err.message })
            return res.send({ status: 1, message: err.message })
        }
        if (results.length > 0) {
            return res.send({ status: 1, message: '用户名被占用,请使用其他用户名!' })
        }
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
            //定义需要插入的语句
        const sql = 'insert into ev_users set ?'
            //调用 db.query方法
        db.query(sql, { username: userinfo.username, password: userinfo.password }, function(err, results) {
            //如果执行sql语句失败
            if (err) return res.send({ status: 1, message: err.message })
                //如果执行sql成功
                // console.log(results);
            if (results.affectedRows !== 1) {
                return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
            }
            res.send({ status: 0, message: '注册成功' })
        })
    })
}

//登录的处理函数
exports.login = (req, res) => {
    res.send('login OK')
}