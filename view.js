class View {
    static help_menu() {
        console.log('node todo.js help # Show Help Menu');
        console.log('node todo.js list # Show to-do list');
        console.log('node todo.js add <task_content> # Add a new task to the to-do list');
        console.log('node todo.js find_by_id <task_id> # Show to-do according to task_id');
        console.log('node todo.js delete <task_id> # Delete to-do according to task_id');
        console.log('node todo.js complete <task_id> # Indicate complete to-do according to task_id');
        console.log('node todo.js uncomplete <task_id> # Indicate uncomplete to-do according to task_id');
    }
}
module.exports = View;