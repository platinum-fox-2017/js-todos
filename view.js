const chalk = require('chalk');
var Table = require("terminal-table");
var t = new Table();



class View{
  static showHelp(){
      t.push(
      [chalk.blue(`Daftar menu yang bisa di gunakan pada todo.js :`)]
      );
      console.log("" + t);
      console.log(chalk.magenta(`$node todo.js`))
      console.log(chalk.red(`$node todo.js help`))
      console.log(chalk.green(`$node todo.js list`))
      console.log(chalk.yellow(`$node todo.js add<task_content>`))
      console.log(chalk.cyanBright(`$node todo,js findById<task_id>`))
      console.log(chalk.magenta(`$node todo.js delete<task_id>`))
      console.log(chalk.cyanBright(`$node todo.js complete <task_id>`))
      console.log(chalk.yellow(`$node todo.js uncomplete <task_id>`))
      console.log(chalk.green(`$node todo.js list: created asc|desc`))
      console.log(chalk.red(`$node todo.js list: completed asc|desc`))
      console.log(chalk.cyanBright(`$node todo.js tag (<task_id><tag_name1><tag_name2>.....<tag_name_N>`))
      console.log(chalk.red(`$node todo.js filter: <tag_name>`))
  }

  static showData(data){
    t.push(
    [chalk.cyanBright(`daftar list hari ini :`)]
    );
    console.log(""+t)
    for(let i = 0 ; i < data.length ; i++){
      console.log(`${i+1}. ${data[i].status} ${data[i].task}`)
    }
  }

  static addData(data){
    t.push(
    [`added "${data}" to your TODO list`]
    );
    console.log(""+t)
  }

  static findData(data){
    t.push(
    [data]
    );
    console.log(""+t)
  }

  static showDelete(data){
    t.push(
    [`deleted "${data}" from you TODO list`]
    );
    console.log(""+t)
  }

  static listCreatedData(data,tanggal){
    t.push(
    [chalk.cyanBright(`daftar list hari ini yang disusun berdasarkan tanggal ${tanggal} :`)]
    );
    console.log(""+t)
    for(let i = 0 ; i < data.length ; i++){
      console.log(`${i+1}. ${data[i].status} ${data[i].task}`)
    }
  }

  static listCompletedData(data,tanggal){
    t.push(
    [chalk.cyanBright(`daftar yang sudah diselesaikan berdasarkan ${tanggal} :`)]
    );
    console.log(""+t)
    for(let i = 0 ; i < data.length ; i++){
      console.log(`${i+1}. ${data[i].status} ${data[i].task}`)
    }
  }

  static showTags(data,num){
    let index = Number(num)
    t.push(
    [`Tagged task "${data[index-1].task}"  with tags : ${data[index-1].tags}`]
    );
    console.log(""+t)
  }

  static showFilter(data){
    t.push(
    [`${data[1]+1}. ${data[0].task} [${data[0].tags}]`]
    );
    console.log(""+t)
  }

}

module.exports = View
