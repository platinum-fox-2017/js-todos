class View {
    static help_menu() {
        console.log('====================HELP  MENU===========================');
        console.log('node todo.js help # Show Help Menu');
        console.log('node todo.js list # Show to-do list');
        console.log('node todo.js add <task_content> # Add a new task to the to-do list');
        console.log('node todo.js find_by_id <task_id> # Show to-do according to task_id');
        console.log('node todo.js delete <task_id> # Delete to-do according to task_id');
        console.log('node todo.js complete <task_id> # Indicate complete to-do according to task_id');
        console.log('node todo.js uncomplete <task_id> # Indicate uncomplete to-do according to task_id');
        console.log('=========================================================');
    }
    static to_do_list(data){
        console.log('=========================================================');
        data.forEach((v,i,a)=>{
            console.log(`NO-${i}-----------${v.status}${v.task}//${v.created_at}//${v.completed_date}`);
        });
        console.log('=========================================================');
    }
    static add_to_do(new_task){
        console.log(`Added ${new_task} to your to-do list`);
    }
    static find_by_id(data){
        console.log(data);
    }
    static delete_to_do(delete_task){
        console.log(`Deleted ${delete_task} from your to_do list`);
    }
    static tag(array){
        console.log(`Tagged task ${array[0].task} with tags: ${array[0].tag}`);
    }
    static filter(array){
        array.forEach((v,i,a)=>{
            console.log(`${v.task} [${v.tag}]`);
        })
    }
}
module.exports = View;