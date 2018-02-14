const Controller = require('./controller')


const input = process.argv[2]
const task_from_user = process.argv.slice(3).join(' ')


Controller.doSomething(input, task_from_user)
