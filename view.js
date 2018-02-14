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
		console.log(chalk.yellow(`$ node todo.js add <task content>`))
		console.log(chalk.green(`$ node todo.js findById <task id>`))
		console.log(chalk.blue(`$ node todo.js delete <task id>`))
		console.log(chalk.cyan(`$ node todo.js complete <task id>`))
		console.log(chalk.magentaBright(`$ node todo.js uncomplete <task id>`))
		console.log(chalk.red(`$ node todo.js list:created asc|desc`))
		console.log(chalk.magenta(`$ node todo.js list:completed asc|desc`))
		console.log(chalk.yellow(`$ node todo.js tag <task_id> <tag_name_1> <tag_name_2>`))
		console.log(chalk.green(`$ node todo.js filter:<tag_name>`))
	
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
		console.log(chalk.green(`Success on adding " ${input} " to your TODO list!!!`))
	}
	static findById(data){
		console.log(data)
	}
	static deleteTodo(dataDel){
		console.log(chalk.red(`Deleted " ${dataDel[0].task} " from your TODO list...`))
	}
	static showAddedTag(task,tag){
		if(task !== 'duplicate tags'){
			console.log(`Succes tagged task " ${task} " with tags ${tag.split(' ').splice(1).join(' ')}`)
		}else{
			console.log('Tag is already exist, no duplicate!!')
		}
		
	}
	static showFilterTag(filtered){
		// console.log(filtered,'ini di view')
		for(let i=0;i<filtered.length;i++){
			console.log(`${i+1}. ${filtered[i].task} [ ${filtered[i].tags} ] `)
		}
	}



}

module.exports = View