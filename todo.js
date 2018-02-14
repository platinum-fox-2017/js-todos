
const TodoController = require('./controllers/TodoController.js');
const argv = process.argv;
var arrayFlag = [];
for(var i = 0; i < argv.length; i++){
  if(i == 2 ){
    var command = argv[i];
  } else if(i == 3 ){
    var flag = argv[i];
  } else {
    arrayFlag.push(argv[i])
  }
}
const todo = new TodoController(command,flag,arrayFlag);
todo.runCommand();
