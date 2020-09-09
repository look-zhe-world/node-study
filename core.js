// 测试fs ， path 等模块

const fs = require('fs');
const path = require('path');

// 解析路径
// path.resolve 相当于拼接路径（当前目录加入参）
// path.resole == 最大的文件就是和 fs.readFileSync 一样，默认拼接的是 process.cwd() 的路径，容易出错
console.log(path.resolve('./fs-test/test.txt'));
console.log(path.resolve('./test.txt')); // F:\HTMLReact\test.txt
console.log(path.resolve('test.txt'));  // F:\HTMLReact\test.txt

// 使用 __dirname 
console.log(path.resolve(__dirname, './test.txt'));  // F:\HTMLReact\node-2020-08\test.txt
console.log(path.resolve(__dirname, './test.txt', '/'));  // 回到根目录  // F:\
console.log(path.join(__dirname, './test.txt', '/'));  // 只是拼接作用  // F:\HTMLReact\node-2020-08\test.txt\
// join 只是拼接，没有绝对路径的用法  path.resolve 一定时绝对路径，如果只是一个入参，会默认拼接 process.cwd();
console.log(path.extname('a.js')); // 取拓展名 .js


// 相对路径容易出错
// const res = fs.readFileSync('./fs-test/test.txt', 'utf-8');

// console.log(res, 'res');

// 判断文件是否存在
// fs.exists 
fs.existsSync  // 同步被废弃了，一般都用异步了