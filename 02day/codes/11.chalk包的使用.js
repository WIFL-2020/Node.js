//控制打印颜色
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
//控制时间
const moment = require('moment')
const dt = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(chalk.red(dt));