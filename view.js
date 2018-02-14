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

    static list_created(option,task){
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
            console.log(`${task.indexOf(arrTemp[i])+1}. ${ToDoView.done_to_char(arrTemp[i].done)} ${arrTemp[i].task} [${arrTemp[i].tag.join(", ")}]`);
        }

    }

    static tag(option, task, tags){
        if(tags != undefined){
            console.log(`Tagged task "${task[option-1].task}" with tags ${tags.join(" ")}`);
        }
    }

    static list_filter(tags, task){
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
                console.log(`${task.indexOf(arrTemp[i])+1}. ${ToDoView.done_to_char(arrTemp[i].done)} ${arrTemp[i].task} [${arrTemp[i].tag.join(", ")}]`);
            }
        }
    }

    static list_completed(option, task){
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
                console.log(`${task.indexOf(arrTemp[i])+1}. ${ToDoView.done_to_char(arrTemp[i].done)} ${arrTemp[i].task} [${arrTemp[i].tag.join(", ")}]`);
            }
        }
    }

    static list(option,task) {
        for (let i = 0; i < task.length; i++) {
            console.log(`${i+1}. ${ToDoView.done_to_char(task[i].done)} ${task[i].task} [${task[i].tag.join(", ")}]`);
        }
    }

    static add(input) {
        console.log(`Added "${input}" to your TODO list...`);
    }

    static findById(option, task) {
        console.log(`${option}. ${ToDoView.done_to_char(task[option-1].done)} ${task[option-1].task}`);
    }

    static delete(data,option) {
        console.log(`Deleted "${data[option-1].task}" from your TODO list...`);
    }
}

module.exports = {View: ToDoView};
