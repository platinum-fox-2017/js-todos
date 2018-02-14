const Table = require('terminal-table')
const Chalk = require('chalk')

class View{
  constructor(){

  }

  static showHelp(){
    console.log('=========HELP=============');
    console.log('list command todo.js');
    console.log('1. node todo.js help');
    console.log('2. node todo.js list (for showing all of your task)');
    console.log('3. node todo.js add <task_content>');
    console.log('4. node todo.js findByID <task_id>');
    console.log('5. node todo.js delete <task_id>');
    console.log('6. node todo.js complete <task_id>');
    console.log('7. node todo.js uncomplete <task_id>')
    console.log('8. node todo.js list:sortAsc (sort ascending)')
    console.log('9. node todo.js list:sortDesc (sort descending)');
    console.log('10. node todo.js showComplete (show completed task)');
    console.log('11. node todo.js showUncomplete (show uncomplete task)');
  }

  static showList(detailList){
    for(let i = 0;i<detailList.length;i++){
      if(detailList[i].tag.length == 0){
        console.log(i+1+'. '+detailList[i].status+' '+detailList[i].task)
      } else {
        console.log(i+1+'. '+detailList[i].status+' '+detailList[i].task+' tag: '+detailList[i].tag)
      }
    }
  }

  static showFilter(detailList){
    for(let i = 0;i<detailList.length;i++){
      console.log(detailList[i].id+'. '+detailList[i].status+' '+detailList[i].task+' tag: '+detailList[i].tag);
    }
  }


  static showAddedTask(task_by_user){
    console.log("Added " + task_by_user + " to your TODO list...")
  }

  static findTaskByIndex(searchID){
    console.log(searchID)
  }


  static showDeletedTask(deleteTugas){
    console.log("Deleted " + deleteTugas + " from your TODO list...")
  }

}


module.exports = View
