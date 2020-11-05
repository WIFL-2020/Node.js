const path = require('path')

let user = '/a/b/c/index.html'
const username = path.basename(user)
console.log(username);
const usernames = path.basename(user, '.html')
console.log(usernames);

const nickname = path.extname(user)
console.log(nickname);

const sex = '/csa/aga/inc/index.html/'
const sexs = path.basename(sex)
const sec = path.extname(sex)
console.log(sexs);
console.log(sec);