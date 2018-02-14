class Views {
  constructor() {

  }
  showHelp(){
    console.log('help');
  }
  showCommand(){
    console.log('list');
    console.log('add <task_content>');
    console.log('findById <task_id>');
    console.log('delete <task_id>');
    console.log('complete <task_id>');
    console.log('uncomplete <task_id>');
  }
  showList(list){
    for(let i=0; i<list.length; i++){
      console.log(`${i+1}. ${list[i]}`);
    }
  }
  showAdd(add){
    console.log(`Added "${add}"" to your TODO list.`);
  }
  showById(id){
    console.log(id);
  }
}

module.exports = Views
