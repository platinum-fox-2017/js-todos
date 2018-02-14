const chalk = require('chalk');

class Todo {
    static printHelp() {
        console.log(`$ node todo.js help`)
    }
    static printCommand() {
        console.log(`$ node todo.js help # menampilkan command apa saja yang tersedia
$ node todo.js list # Melihat daftar TODO
$ node todo.js add <task_content> # Menambahkan TODO ke dalam list
$ node todo.js findById <task_id> # Melihat detail TODO sesuai 'task_id' nya
$ node todo.js delete <task_id> # Menghapus TODO sesuai 'task_id' nya
$ node todo.js complete <task_id> # Menandai status TODO selesai
$ node todo.js uncomplete <task_id> # Menandai status TODO belum selesai`
        )
    }

    static printList(list) {
        for (var key in list) {
            if (list[key].is_complete === true) {
                console.log(`${list[key].id}. ${chalk.green(`${list[key].task}`)}`)
            } else {
                console.log(`${list[key].id}. ${chalk.red(`${list[key].task}`)}`)

            }
        }
    }

    static printAddedTodo(task) {
        console.log(`Added "${chalk.green(`${task.join(' ')}`)}" to your TODO list...`);
    }

    static printResult(task) {
        console.log(`${task.id}. ${task.task}`);
    }

    static printDeleted(task) {
        console.log(`Deleted ${chalk.red(`${task.task}`)} from your TODO list...`)
    }
}

module.exports = Todo