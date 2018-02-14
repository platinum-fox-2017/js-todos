const chalk = require('chalk')
const table = require('terminal-table')
const t = new table({
    borderStyle: 0,
    border: {
        sep: "║",
        topLeft: "╔", topMid: "╦", top: "═", topRight: "╗",
        midLeft: "╠", midMid: "╬", mid: "═", midRight: "╣",
        botLeft: "╚", botMid: "╩", bot: "═", botRight: "╝"
    }
});


class Todo {
    static printHelp() {
        t.push(['WELCOME TO TODO JS APPLICATION BY ANDREW'])
        console.log("" + t);
        console.log(`$ node todo.js help`)
    }
    static printCommand() {
        t.push(
            ['Command', 'Detail'],
            [''],
            ['$ node todo.js help', '# menampilkan command apa saja yang tersedia'],
            ['$ node todo.js list', '# Melihat daftar'],
            ['$ node todo.js add <task_content>', '# Menambahkan TODO ke dalam list'],
            ['$ node todo.js findById <task_id>', '# Melihat detail TODO sesuai \'task_id\' nya'],
            ['$ node todo.js delete <task_id>', '# Menghapus TODO sesuai \'task_id\' nya'],
            ['$ node todo.js complete <task_id>', '# Menandai status TODO selesai'],
            ['$ node todo.js uncomplete <task_id>', '# Menandai status TODO belum selesai'],
        )
        console.log("" + t)
    }

    static printList(list) {
        t.push(['ID', 'TASK', 'CREATED DATE', 'COMPLETE DATE', 'TAG'], [''])
        for (var key in list) {
            if (list[key].is_complete === true) {
                t.push([list[key].id, chalk.green(list[key].task), list[key].created_date, list[key].completed_date, list[key].tag])
            }
            else {
                t.push([list[key].id, chalk.red(list[key].task), list[key].created_date, list[key].completed_date, list[key].tag])
            }
        }
        console.log("" + t)
    }

    static printAddedTodo(task) {
        console.log(`Added "${chalk.green(`${task.join(' ')}`)}" to your TODO list...`);
    }

    static printResult(task) {
        console.log(`${task.id}.${task.task} `);
    }

    static printDeleted(task) {
        console.log(`Deleted ${chalk.red(`${task.task}`)} from your TODO list...`)
    }

    static printAddedtag(task) {
        console.log(`Tagged task "${task.task}" with tags: ${task.tag.join(' ')} `);
    }

    static printFilter(list) {
        for (const key in list) {
            console.log(`${list[key].id}. ${list[key].task} [${list[key].tag}]`);
        }
    }
}

module.exports = Todo