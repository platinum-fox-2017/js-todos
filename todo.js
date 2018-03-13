const Controller = require('./controller')


const input = process.argv[2]
const task_from_user = process.argv[3]
const more_task = process.argv[4]


Controller.doSomething(input, task_from_user, more_task)
