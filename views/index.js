const chalk = require('chalk')

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
  }
  showList(list){
    for(let i=0; i<list.length; i++){
      console.log(`${i+1}. ${list[i].done} ${list[i].task} [${chalk.green(list[i].tag)}]`);
    }
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
