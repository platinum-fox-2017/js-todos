const chalk = require('chalk');
class View{
    static showHelp(){
        console.log(chalk.blue('node todo.js'))
        console.log(chalk.blue('node todo.js help'))
        console.log(chalk.blue('node todo.js list'))
        console.log(chalk.yellow('node todo.js add <task_content>'))
        console.log(chalk.yellow('node todo.js findById <task_id>'))
        console.log(chalk.green('node todo.js delete <task_id>'))
        console.log(chalk.green('node todo.js complete <task_id>'))
        console.log(chalk.green('node todo.js uncomplete <task_id>'))
    }
    static showList(data){
        for (let i = 0; i<data.length; i++){
            if(data[i].status === true){
                console.log(`${i+1}. [x] ${data[i].task}`)              
            }else{
                console.log(`${i+1}. [ ] ${data[i].task}`)                             
            }
        }
    }
    static addData(task){
        console.log(`Added "${task}" to your TODO list`)
    }
    static showById(id){
        console.log(`${id}`)
    }
    static deleteById(task){
        task !='' ? console.log(`Deleted "${task}" from your TODO list`) : 'id tidak ditemukan'
        
    }
}

module.exports = View