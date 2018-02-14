const Controller = require('../controllers')

class View {
    constructor() {

    }

    static getHelp() {
        console.log(`type help`)
    }

    static showCommand() {
        let commandlist = [`here's your command list`,`node todo.js help`,`node todo.js list`,`node todo.js add <task_content>`,
    `node todo.js findById <task_id>`,`node todo.js delete <task_id>`,`node todo.js complete <task_id>`,
    `node todo.js uncomplete <task_id>`];
        console.log(commandlist.join('\n'))
    }

    static showData(input) {
        if(input.length === 0) {
            console.log(`You've got nothing to-do today`);
        } else {
            for(let i = 0; i < input.length; i++) {
                console.log(`${input[i].id}. ${input[i].status} ${input[i].task}`)
            }
        }
    }

    static addedAction(input) {
        console.log(`Added ${input} to your TODO list`)
    }

    static deleteAction(input) {
        console.log(`Deleted ${input.task} from your TODO list`)
    }
}

module.exports = View