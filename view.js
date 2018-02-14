// View
// Show the output to console log
class ToDoView {
    static help() {
        console.log("node todo.js");
        console.log("node todo.js help");
        console.log("node todo.js list");
        console.log("node todo.js add <task_content>");
        console.log("node todo.js finById <task_id>");
        console.log("node todo.js delete <task_id>");
        console.log("node todo.js complete <task_id>");
        console.log("node todo.js uncomplete <task_id>");
    }

    static done_to_char(boolean){
        if(boolean){
            return "[x]"
        }
        else {
            return "[ ]"
        }
    }

    static list(task) {
        for (let i = 0; i < task.length; i++) {
            console.log(`${i+1}. ${this.done_to_char(task[i].done)} ${task[i].task}`);
        }
    }

    static add(input) {
        console.log(`Added "${input}" to your TODO list...`);
    }

    static findById(input, task) {
        console.log(`${input}. ${this.done_to_char(task.done)} ${task.task}`);
    }

    static delete(task) {
        console.log(`Deleted "${task}" from your TODO list...`);
    }
}

module.exports = {View: ToDoView};
