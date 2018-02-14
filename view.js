const chalk = require('chalk');
var Table = require('cli-table-redemption');
// var table = new Table({
//     head: ['No', 'Status', 'Task'],
//     colWidths: [10, 10, 50]
// });
var table = new Table({
    head: ['No', 'Status', 'Task'],
    colWidths: [10, 10, 30]
});

class View {
  constructor() {

  }

  static doNothing() {
    console.log(chalk.blue('Unknown command! please type `node todo.js help` for more information'));
  }

  static showHelp() {
    console.log(chalk.blue('list'));
    console.log(chalk.red('add <task_content>'));
    console.log(chalk.yellow('findById <task_id>'));
    console.log(chalk.green('delete <task.id>'));
    console.log(chalk.white('complete <task_id>'));
    console.log(chalk.blue('uncomplete <task_id>'));
  }

  static showList(data_from_cont) {


    let beautify = ''
    for (var i = 0; i < data_from_cont.length; i++) {
      // beautify = `${i+1}. ${data_from_cont[i].status} ${data_from_cont[i].task}`
      table.push([i+1, data_from_cont[i].status, data_from_cont[i].task]);
    }
    console.log(table.toString());
  }

  static showAdd(data_from_cont){
    console.log(`Added ${data_from_cont} to your TODO list...`);
  }

  static showFind(data_from_cont) {
    console.log(data_from_cont);
  }

  static viewDeleted(data_from_cont) {
    console.log(`Deleted ${data_from_cont} from your TODO list...`);
  }

  static viewComplete(data_from_cont) {
    let beautify = ''
    for (var i = 0; i < data_from_cont.length; i++) {
      // console.log(data_from_cont[i].task);
      beautify = `${i+1}. ${data_from_cont[i].status} ${data_from_cont[i].task}`
      console.log(beautify);
    }
  }

  static viewUncomplete(data_from_cont) {
    let beautify = ''
    for (var i = 0; i < data_from_cont.length; i++) {
      // console.log(data_from_cont[i].task);
      beautify = `${i+1}. ${data_from_cont[i].status} ${data_from_cont[i].task}`
      console.log(beautify);
    }
  }

  static viewListCompleted(data_from_cont) {
    let complete = ''
    for (var i = 0; i < data_from_cont.length; i++) {
      complete += `${data_from_cont[i]} ✅` + '\n'
    }
    console.log(complete);
  }

  static viewCreated(data_from_cont) {
    let created_at = ''
    for (var i = 0; i < data_from_cont.length; i++) {
      created_at += `${i+1}. ${data_from_cont[i].task}` + '\n'
    }
    console.log(created_at);
  }

  static viewTag(data_from_cont) {
    for (var i = 0; i < data_from_cont.length; i++) {
      console.log(`Tagged task ${data_from_cont[i].task} with tags: ${data_from_cont[i].tag}`);
    }
  }

  static viewFilter(data_from_cont) {
    for (var i = 0; i < data_from_cont.length; i++) {
      console.log(`${i+1}. ${data_from_cont[i].task} [${data_from_cont[i].tag}]`);
    }

  }

}

module.exports = View
