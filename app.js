const Controller = require('./controller');

let command = process.argv.slice(2)


Controller.commandManage(command)
