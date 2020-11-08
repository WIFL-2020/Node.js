// 这是包的入口文件

const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')


// const { dateFormat } = require('./src/dateFormat')
// const { htmlEscape, htmlUnEscape } = require('./src/htmlEscape')
// console.log(date);
// 向外暴露需要的成员
module.exports = {
    // ...dateFormat,
    // ...htmlEscape,
    // ...htmlUnEscape
    date,
    escape
}