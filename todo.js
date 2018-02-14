const Controllers = require('./controllers')

let command
let task
if(process.argv[2].indexOf('filter') === 0){
  let split = process.argv[2].split(':')
  command = split[0]
  task = split.splice(1)
}
else{
  command = process.argv[2]
  task = process.argv.splice(3).join(' ')
}

let controllers = new Controllers
controllers.input(command, task)
