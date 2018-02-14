const Controller = require('../controllers')
const chalk = require('chalk')
const Table = require('cli-table')
const table = new Table({
    head: ['ID','STATUS','TASK'],
    colWidths: [10,20,50]
})

class View {
    constructor() {

    }

    static getHelp() {
        console.log(`type help`)
    }

    static showCommand() {
        let commandlist = [`here's your command list`,`node todo.js help`,`node todo.js list`,`node todo.js list:created asc|dsc`,`node todo.js list:completed asc|dsc`,`node todo.js add <task_content>`,
    `node todo.js findById <task_id>`,`node todo.js delete <task_id>`,`node todo.js complete <task_id>`,
    `node todo.js uncomplete <task_id>`,`node todo.js tag <task_id> <tag_1> <tag_2> <tag_n>`,`node todo.js filter:<tag_name>`];
        console.log(commandlist.join('\n'))
    }

    static showData(input) {
        if(input.length === 0) {
            console.log(`You've got nothing to-do today`);
        } else {    
            for(let i = 0; i < input.length; i++) {
                if (input[i].status === '[X]') {
                    table.push([input[i].id,input[i].status,input[i].task])
                } else {
                table.push([input[i].id,input[i].status,input[i].task])
                }
            }
            console.log(table.toString())
        }
    }

    static addedAction(input) {
        console.log(chalk.blue(`Added ${input} to your TODO list`))
    }

    static deleteAction(input) {
        console.log(chalk.red(`Deleted ${input.task} from your TODO list`))
    }

    static addedTag(input) {
        let splitted = input.split(' ')
        let spliced = splitted.splice(1).join(',')
        console.log(`Successfully add ${spliced} to task with id ${+splitted[0]}`)
    }
}

module.exports = View