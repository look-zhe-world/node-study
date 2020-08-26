// console.log(process.argv); // .slice(2)  为了解析命令行参数

/// 包 commander   yargs--- (webpack)
const commander = require("commander");
commander
  .option("-m,--mode <v>", "choose your mode dev | sit | pord 选择运行模式")
  .command('create').action((...param)=>{
    // param[0] 拿到的就是 parse(process.argv) 解析后的对象
    // param[1] 拿到的时解析对象的 args 值
    console.log(param, 'param ----');
  })    // 传入某个命令行命令时进行回调
  .version("0.0.1")
  .name('node')
  .usage('my-server')
  .parse(process.argv)
// console.log(commander.parse(process.argv));
