class View {
  static help() {
    let command = [
      "$node todo.js",
      "$node todo.js help",
      "$node todo.js list",
      "$node todo.js list:created asc|desc",
      "$node todo.js list:completed asc|desc",
      "$node todo.js add <task_content>",
      "$node todo.js findById <task_id>",
      "$node todo.js delete <task_id>",
      "$node todo.js complete <task_id>",
      "$node todo.js uncomplete <task_id>",
      "$node todo.js tag <task_id> <tag_name1> <tag_name2> ...",
      "$node todo.js filter:<tag_name>"
    ];
    for (let i = 0; i < command.length; i++) {
      console.log(command[i]);
    }
  }

  static list(list) {
    for (let i = 0; i < list.length; i++) {
      let status = "";
      if (!list[i].status) {
        status = "[ ]";
      } else {
        status = "[x]";
      }
      console.log(`${i + 1}. ${status} ${list[i].task}`);
    }
  }

  static add() {
    console.log(`You've added a new task!`);
  }

  static findById(id, status, task) {
    console.log(`${id}. ${status} ${task}`)
  }

  static delete() {
    console.log(`You've deleted one task!`);
  }

  static complete() {
    console.log(`You've modified your todo list!`);
  }

  static uncomplete() {
    console.log(`You've modified your todo list!`);
  }

  static listCreated(createdSort) {
    let status = "";
    for(let i = 0; i < createdSort.length; i++) {
      if (!createdSort[i].status) {
        status = "[ ]";
      } else {
        status = "[x]";
      }
      console.log(`${i+1}. ${status} ${createdSort[i].task}`);
    }
  }

  static listCompleted(completed) {
    let status = `[x]`
    for(let i = 0; i < completed.length; i++) {
      console.log(`${i+1}. ${status} ${completed[i].task}`);
    }
  }

  static tag() {
    console.log(`You've added new tags to your task!`);
  }

  static filter(tagged) {
    for(let i = 0; i < tagged.length; i++) {
      console.log(tagged[i])
    }
  }
}

module.exports = View