const Table = require('cli-table')
const Chalk = require('chalk')



class View{
  constructor(){

  }

  static showHelp(){
    var t = new Table({
      head : ['No.','Function List','Usage' ]
    });

    t.push(
      [Chalk.blue("1."),Chalk.red("node todo.js"),Chalk.green("help")],
      ['2.','node todo.js list','showing all of your task'],
      ['3.','node todo.js add(task content)','add task'],
      ['4.','node todo.js findByID(id)','show your searched task by id'],
      ['5.','node todo.js delete(task_id)','delete your task by id'],
      ['6.','node todo.js complete(task_id)','complete your task by id'],
      ['7.','node todo.js uncomplete(task_id)','uncomplete your task by id'],
      ['8.','node todo.js list:sortAsc','sort ascending'],
      ['9.','node todo.js list:sortDesc','sort descending'],
      ['10.','node todo.js showComplete','show completed task'],
      ['11.','node todo.js showUncomplete','show uncomplete task']
    )

    console.log("" + t);
  }

  static showList(detailList){
    var t = new Table({
      head : ['No.','Finished?','To Do List','Tags'],

    })

    for(let i = 0;i<detailList.length;i++){
        t.push([Chalk.blue(i+1+'. '),Chalk.red(detailList[i].status),detailList[i].task,detailList[i].tag])
      }
    console.log("" + t)
  }

  static showFilter(detailList){
    var t = new Table({
      head : ['No.','Finished?','To Do List','Tags']
    })
    for(let i = 0;i<detailList.length;i++){
      t.push([detailList[i].id+'. ',detailList[i].status,detailList[i].task,detailList[i].tag]);
    }
    console.log("" + t);
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
