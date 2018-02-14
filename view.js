const chalk = require('chalk');

class View{
    constructor(){}
    static helpFunctionView(){
        console.log(chalk.green(`node todo.js`))
        console.log(chalk.green(`node todo.js help`))
        console.log(chalk.green(`node todo.js list`))
        console.log(chalk.green(`node todo.js add <task_content>`))
        console.log(chalk.green(`node todo.js findById <task_id`))
        console.log(chalk.green(`node todo.js delete <task_id>`))
        console.log(chalk.green(`node todo.js complete <task_id>`))
        console.log(chalk.green(`node todo.js uncomplete < task_id>`))
    }

    static listView(data){
        const view = data.map(each=>{
            let tag = View.olahTags(each.tags)
            if(each.status === true){
                console.log(chalk.green(`${each.id}. [X] ${each.task} ${tag}`))
            }else{
                console.log(chalk.green(`${each.id}. [ ] ${each.task} ${tag}`))
            }  
        })
    }

    static olahTags(tags){
        if(tags.length === 0){
            return ''
        }
        let string = ""
        for(let [index,value] of tags.entries()){
            if(index === tags.length - 1){
                string += value
            }else{
                string += value + ","
            }
        }

        return "[" + string + "]"
    }

    static deleteView(data){
        console.log(chalk.green(`Deleted ${data.task} from your TODO list...`))
    }

    static addView(data){
        console.log(chalk.green(`Added ${data.task} to your TODO list...`))
    }

    static sortView(data){
        for(let [index,value] of data.entries()){
            if(value.status === true){
                console.log(chalk.green(`${index+1}. [X] ${value.task}`))
            }else{
                console.log(chalk.green(`${index+1}. [ ] ${value.task}`))
            } 
        }
    }

    static addTagView(data){
        console.log(chalk.green(`Tagged task "${data[0]} with tags: ${data[1]}"`))
    }
}

module.exports = View