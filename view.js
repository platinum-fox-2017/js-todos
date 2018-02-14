const fs = require('fs');
class ToDoView {
  static viewHelper(input){
    for(let i=0; i<input.length; i++){
      console.log(`${input[i].list}`);
    }
  }

  static viewList(input){
    for(let i=0; i<input.length; i++){
      console.log(`${i+1}: ${input[i].complete} ${input[i].list}`);
    }
  }

  static viewAddList(input){
    console.log(`Added ${input} to your To Do List`);
  }

  static viewFindId(input){
    for(let i=0; i<input.length; i++){
      if((i+1).toString()===argv[3]){
        console.log(input[i].list);
      }
    }
  }

  static viewDataDelete(input){
    console.log(`Deleted ${input} from your To Do List`);
  }

  static viewFinished(input){
    for(let i=0; i<input.length; i++){
      console.log(`${i+1}: ${input[i].complete} ${input[i].list}`);
    }
  }

  static viewUnfinished2(input){
    for(let i=0; i<input.length; i++){
      console.log(`${i+1}: ${input[i].complete} ${input[i].list}`);
    }
  }
}

module.exports = ToDoView;
