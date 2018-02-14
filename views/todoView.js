'use strict'
const chalk = require('chalk');
const log = console.log;
const Table = require('cli-table2');
let table = new Table({
    head: [chalk.cyanBright.bold('Number'), chalk.cyanBright.underline('Complete?'), chalk.cyanBright.bold('Todo Input'), chalk.cyanBright.dim
        ('Tags')],
    colWidths: ['10%', '10%', '25%', '25%'],
    chars: {
        'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
        , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
        , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
        , 'right': '║', 'right-mid': '╢', 'middle': '│'
    }
});
class TodoView {
    constructor() {}
    static list(data) {
        data.map(element => {
            let complete = chalk.redBright('[ ]')
            if (element.complete) {
                complete = chalk.greenBright('[✓]')
                element.content = chalk.greenBright(element.content)
                element.tags = chalk.greenBright(element.tags)
            }
            let rowObj = {};
            rowObj[chalk.yellowBright(element.id)] = [complete, chalk.redBright(element.content), chalk.redBright(element.tags)];
            table.push(rowObj);
        })
        console.log(table.toString());
    }
    static help() {
        log(chalk.cyan('Todo Input:'));
        log(chalk.red('1. help'))
        log(chalk.yellow('2. list'))
        log(chalk.green('3. add {content}'))
        log(chalk.blue('4. findById {id}'))
        log(chalk.magenta('5. delete {id}'))
        log(chalk.cyanBright('6. complete {id}'))
        log(chalk.redBright('7 uncomplete {id}'))
        log(chalk.yellowBright('8. list:outstanding asc|desc'))
        log(chalk.greenBright('9. list:completed asc|desc'))
        log(chalk.blueBright('10. tag {id} {tagName1} {tagName2} .... {tagNameN}'))
        log(chalk.magentaBright('11. filter:tag'))
        log(chalk.white('12. delete {id} nameTag'))
    }
}

module.exports = TodoView