const Controller = require('./controller.js')
var input
var task_by_user

if(process.argv[2].indexOf('filter') === 0){
  input = 'filter'
  task_by_user = process.argv[2].split(':')[1]
} else{
  input = process.argv[2]
  task_by_user = process.argv.splice(3).join(' ')
}

// console.log(input);


Controller.toDo(input,task_by_user)
