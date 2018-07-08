const chalk = require('chalk')
var Table = require('cli-table')
var table = new Table({
    head: ['Number', 'To-Do List', 'Tags', 'Status']
  , colWidths: [10, 20, 20, 10]
})

class Views {
  constructor() {

  }
  showHelp(){
    console.log('help');
  }
  showCommand(){
    console.log('list');
    console.log('add <task_content>');
    console.log('findById <task_id>');
    console.log('delete <task_id>');
    console.log('complete <task_id>');
    console.log('uncomplete <task_id>');
    console.log('list:created <asc/desc>');
    console.log('list:completed <asc/desc>');
    console.log('list:uncompleted <asc/desc>');
    console.log('tag <tag>');
    console.log('filter:<tag>');
  }
  showList(list){
    for(let i=0; i<list.length; i++){
      // console.log(`${i+1}. ${list[i].done} ${list[i].task} [${chalk.green(list[i].tag)}]`);
      table.push([i+1, list[i].task, chalk.green(list[i].tag), list[i].done])
    }
    console.log(table.toString());
  }
  showAdd(add){
    console.log(chalk.cyan(`Added "${chalk.blue(add)}" to your TODO list.`));
  }
  showById(id){
    console.log(id);
  }
  showDelete(id){
    console.log(chalk.magenta(`Deleted "${chalk.red(id)}" from your TODO list.`));
  }
  showTag(tag){
    console.log(tag);
  }
}

module.exports = Views
