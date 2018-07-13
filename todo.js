const TodoController = require('./todoController');

let myArgv = process.argv;
let tags = [];
for(let i=0; i<myArgv.length; i++){
    if(i>3){
        tags.push(myArgv[i])
    }
}
let todo = TodoController.run(myArgv[2], myArgv[3], tags);