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

    static list_created(task,option){
        let arrTemp = task.map(x=>x);
        if(option==undefined || option=='dsc'){
            arrTemp.sort((a,b) => {
                if((new Date(a.date)) >(new Date(b.date)))
                    return -1;
                else if((new Date(a.date)) <(new Date(b.date)))
                    return 1
                return 0;
            })
        }
        else{
            arrTemp.sort((a,b) => {
                if((new Date(a.date)) >(new Date(b.date)))
                    return 1;
                else if((new Date(a.date)) <(new Date(b.date)))
                    return -1
                return 0;
            });
        }
        for (let i = 0; i < arrTemp.length; i++) {
            console.log(`${task.indexOf(arrTemp[i])+1}. ${this.done_to_char(arrTemp[i].done)} ${arrTemp[i].task}`);
        }

    }

    static tag(task, tags){
        if(tags != undefined){
            console.log(`Tagged task "${task}" with tags ${tags.join(" ")}`);
        }
    }

    static list_filter(task, tags){
        let arrTemp = task.map(x=>x);
        arrTemp.sort((a,b) => {
            if((new Date(a.date)) >(new Date(b.date)))
                return -1;
            else if((new Date(a.date)) <(new Date(b.date)))
                return 1
            return 0;
        });

        for (let i = 0; i < arrTemp.length; i++) {
            if(arrTemp[i].tag.indexOf(tags)!=-1)
            {
                console.log(`${task.indexOf(arrTemp[i])+1}. ${this.done_to_char(arrTemp[i].done)} ${arrTemp[i].task}`);
            }
        }
    }

    static list_completed(task){
        let arrTemp = task.map(x=>x);
        arrTemp.sort((a,b) => {
            if((new Date(a.date)) >(new Date(b.date)))
                return -1;
            else if((new Date(a.date)) <(new Date(b.date)))
                return 1
            return 0;
        });

        for (let i = 0; i < arrTemp.length; i++) {
            if(arrTemp[i].done==true)
            {
                console.log(`${task.indexOf(arrTemp[i])+1}. ${this.done_to_char(arrTemp[i].done)} ${arrTemp[i].task}`);
            }
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
