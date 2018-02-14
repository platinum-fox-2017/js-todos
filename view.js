const chalk = require('chalk');

class View{
	constructor(){

	}
	static callHelp(){
		console.log(`$ node todo.js`)
		console.log(chalk.yellow('type like this to show all command---> ')+chalk.red.bgWhite.bold('$ node todo.js help '))
		
	}
	static showHelp(){
		console.log('------------Comand list:-------------')
		console.log(`$ node todo.js`)
		console.log(chalk.red(`$ node todo.js help`))
		console.log(chalk.magenta(`$ node todo.js list`))
		console.log(chalk.yellow(`$ node todo.js add "<task content>"`))
		console.log(chalk.green(`$ node todo.js findById <task id>`))
		console.log(chalk.blue(`$ node todo.js delete <task id>`))
		console.log(chalk.cyan(`$ node todo.js complete <task id>`))
		console.log(chalk.magentaBright(`$ node todo.js uncomplete <task id>`))

	}
	static showList(listdata){
		// console.log(listdata)
		console.log(`Your TODO list :`)
		for(let i =0;i<listdata.length;i++){
			if(listdata[i].status === 'complete'){
				console.log(`${i+1}.[X] ${listdata[i].task}`)
			}else{
				console.log(`${i+1}.[ ] ${listdata[i].task}`)
			}
		}
	}

	static addTodo(input){
		console.log(`Success on adding " ${input} " to your TODO list!!!`)
	}
	static findById(data){
		console.log(data)
	}
	static deleteTodo(dataDel){
		console.log(`Deleted " ${dataDel[0].task} " from your TODO list...`)
	}


}

module.exports = View