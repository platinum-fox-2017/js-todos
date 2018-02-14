class View {
  constructor() {

  }
  static doNothing() {
    console.log('help');
  }

  static showHelp() {
    console.log('list');
    console.log('add <task_content>');
    console.log('findById <task_id>');
    console.log('delete <task.id>');
    console.log('complete <task_id>');
    console.log('uncomplete <task_id>');
  }

  static showList(data_from_cont) {
    let beautify = ''
    for (var i = 0; i < data_from_cont.length; i++) {
      // console.log(data_from_cont[i].task);
      beautify = `${i+1}. ${data_from_cont[i].status} ${data_from_cont[i].task}`
      console.log(beautify);
    }
  }

  static showAdd(data_from_cont){
    console.log(`Added ${data_from_cont} to your TODO list...`);
  }

  static showFind(data_from_cont) {
    console.log(data_from_cont);
  }

  static viewDeleted(data_from_cont) {
    console.log(`Deleted ${data_from_cont} from your TODO list...`);
  }

  static viewComplete(data_from_cont) {
    let beautify = ''
    for (var i = 0; i < data_from_cont.length; i++) {
      // console.log(data_from_cont[i].task);
      beautify = `${i+1}. ${data_from_cont[i].status} ${data_from_cont[i].task}`
      console.log(beautify);
    }
  }

  static viewUncomplete(data_from_cont) {
    let beautify = ''
    for (var i = 0; i < data_from_cont.length; i++) {
      // console.log(data_from_cont[i].task);
      beautify = `${i+1}. ${data_from_cont[i].status} ${data_from_cont[i].task}`
      console.log(beautify);
    }
  }
}

module.exports = View
