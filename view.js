const chalk = require('chalk');

class View{
	constructor(){

	}
	static callHelp(){
		console.log(`$ node todo.js`)
		console.log(chalk.yellow('type like this to show all command---> ')+chalk.red.bgWhite.bold('$ node todo.js help '))
		
	}
	static showHelp(){
		console.log(`$ node todo.js`)
		console.log(`$ node todo.js help`)
		console.log(`$ node todo.js list`)
		console.log(`$ node todo.js add <task content>`)
		console.log(`$ node todo.js findById <task id>`)
		console.log(`$ node todo.js delete <task id>`)
		console.log(`$ node todo.js complete <task id>`)
		console.log(`$ node todo.js uncomplete <task id>`) 

	}


}

module.exports = View