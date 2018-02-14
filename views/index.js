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
      console.log(`${i+1}. ${list[i].done} ${list[i].task}`);
    }
  }
  showAdd(add){
    console.log(`Added "${add}" to your TODO list.`);
  }
  showById(id){
    console.log(id);
  }
  showDelete(id){
    console.log(`Deleted "${id}" from your TODO list.`);
  }
}

module.exports = Views
