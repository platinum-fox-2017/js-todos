const chalk = require('chalk');
const Table = require('cli-table');

let table = new Table({
    head: ['NO', 'STATUS', 'TO DO']
  , colWidths: [5, 10, 20]
});
let table2 = new Table({
    head: ['NO', 'STATUS', 'TAG']
  , colWidths: [5, 10, 20]
});

class View{
    static showHelp(){
        console.log(chalk.blue('node todo.js'))
        console.log(chalk.blue('node todo.js help'))
        console.log(chalk.blue('node todo.js list'))
        console.log(chalk.yellow('node todo.js add <task_content>'))
        console.log(chalk.yellow('node todo.js findById <task_id>'))
        console.log(chalk.yellow('node todo.js delete <task_id>'))
        console.log(chalk.green('node todo.js complete <task_id>'))
        console.log(chalk.green('node todo.js uncomplete <task_id>'))
        console.log(chalk.green('node todo.js created'))
        console.log(chalk.magentaBright('node todo.js outstanding'))
        console.log(chalk.magentaBright('node todo.js outstanding asc'))
        console.log(chalk.magentaBright('node todo.js outstanding desc'))
        console.log(chalk.green('node todo.js completed <task_id>'))
        console.log(chalk.green('node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>'))
        console.log(chalk.green('node todo.js filter <tag_name>'))
    }
    static showList(data){
        for (let i = 0; i<data.length; i++){
            if(data[i].status === true){
                table.push([i+1, `[x]`, chalk.blue(data[i].task)])              
            }else{
                table.push([i+1, `[ ]`, chalk.red(data[i].task)])                                 
            }
        }
        console.log(table.toString());
    }
    static addData(task){
        console.log(`Added "${task}" to your TODO list`)
    }
    static showById(id){
        if(id !== ''){
            console.log(`${id}`)            
        }else{
            console.log('id tidak ditemukan')
        }
    }
    static deleteById(task){
        console.log(`Deleted "${task}" from your TODO list`)
    }
    static showCompletedTask(completedTask){
        for (let i = 0; i<completedTask.length; i++){
                console.log(`${i+1}. [x] ${completedTask[i]}`)              
        }
    }
    static showTagedTask(data, num){
        let index = Number(num) 
        console.log(`Tagged task "${data[index-1].task}" with tag: ${data[index-1].tag}`)
    }

    static showFilter(data){
        for (let i = 0; i<data.length; i++){
            table2.push([i+1, data[i].task, [data[i].tag]])
        }
        console.log(table2.toString());
    }
}

module.exports = View