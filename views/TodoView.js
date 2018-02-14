
class TodoView {
  static showAllCommand(){
    console.log('==========List of Command ===========');
    console.log('node todo.js help');
    console.log('node todo.js list');
    console.log('node todo.js add <task_content>');
    console.log('node todo.js findById <task_id>');
    console.log('node todo.js delete <task_id>');
    console.log('node todo.js complete <task_id>');
    console.log('node todo.js uncomplete <task_id>');
  }
  static showTodoList(list){
    for(var i = 0; i < list.length; i++){
      if(list[i].status > 0){
        var status = '[x]';
      } else {
        var status = '[ ]';
      }
      console.log(`${list[i].id}. ${status} ${list[i].name}`);
    }
  }
  static showSuccessAdded(name){
    console.log(`Added "${name}" to your TODO List`);
  }
  static showFailureAdding(){
    console.log('Fail To add TODO List! Check is you add the name?');
  }
  static showFindById(id,name){
    console.log(`${id}. ${name}`);
  }
  static failToFind(id){
    console.log(`No Todo With Id ${id}`);
  }
  static showSuccessDeleted(name){
    console.log(`Delete "${name}" from your TODO List...`);
  }
  static showFailToDelete(){
    console.log('Fail To Delete The Todo!');
  }
  static failToComplete(){
    console.log(`Fail To Complete Task`);
  }
  static failToUnComplete(){
    console.log(`Fail To UnComplete Task`);
  }
}

module.exports = TodoView;
