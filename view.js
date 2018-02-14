const chalk = require('chalk');
const Table = require("terminal-table");


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
        console.log(chalk.green(`node todo.js list:created < asc/desc>`))
        console.log(chalk.green(`node todo.js list:completed < asc/desc>`))
        console.log(chalk.green(`node todo.js tag < task_id><tags>`))
        console.log(chalk.green(`node todo.js filter < task_id>`))
    }

    static listView(data){
        let table = new Table({
            width: [10, 10, 20, 30]
          });
        const view = data.map(each=>{
            let tampung = []
            let tag = View.olahTags(each.tags)
            if(each.status === true){
                tampung.push(each.id)
                tampung.push("[X]")
                tampung.push(each.task)
                tampung.push(tag)
            }else{
                tampung.push(each.id)
                tampung.push("[ ]")
                tampung.push(each.task)
                tampung.push(tag)
            }
            table.push(tampung)  
        })

        console.log(chalk.green(""+ table))
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
        let table = new Table({
            width: [10, 10, 20, 30]
          });
        for(let [index,value] of data.entries()){
            let tag = View.olahTags(value.tags)
            let tmp = []
            if(value.status === true){
                tmp.push(index+1)
                tmp.push("[X]")
                tmp.push(value.task)
                tmp.push(tag)
            }else{
                tmp.push(index+1)
                tmp.push("[ ]")
                tmp.push(value.task)
                tmp.push(tag)
            }
            table.push(tmp) 
        }
        console.log("" + table)
    }

    static addTagView(data){
        console.log(chalk.green(`Tagged task "${data[0]} with tags: ${data[1]}"`))
    }
}

module.exports = View