const chalk = require('chalk');
const Table = require("cli-table");
let table = new Table({
	head: ['No','Status', 'TODO LIST']
, colWidths: [5, 8, 30]
});
let table2 = new Table({
	head: ['No', 'TODO LIST', 'Tags']
, colWidths: [5, 20, 30]
});
 
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
		console.log(chalk.yellow(`$ node todo.js tag <task_id> <tag_name>`))
		console.log(chalk.green(`$ node todo.js filter:<tag_name>`))
	
	}
	static showList(listdata){
		// console.log(listdata)
		// instantiate 
		
				
		console.log(`Your TODO list :`)
		for(let i =0;i<listdata.length;i++){
			if(listdata[i].status === 'complete'){
				table.push([i+1,'[X]',chalk.green(listdata[i].task)])
				// console.log(`${i+1}.[X] ${listdata[i].task}`)
			}else{
				// console.log(`${i+1}.[ ] ${listdata[i].task}`)
				table.push([i+1,'[ ]',chalk.yellowBright(listdata[i].task)])
			}
		}
		console.log(table.toString());
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
			console.log(`Succes tagged task " ${task} " with tags ${tag.split(' ').splice(1).join(',')}`)
		}else{
			console.log('Tag is already exist, no duplicate!!')
		}
		
	}

	static showFilterTag(filtered){
		for(let i=0;i<filtered.length;i++){
			table2.push([i+1+'. ',filtered[i].task ,' ['+chalk.blue(filtered[i].tags) +']'])
			// console.log(i+1+'. '+filtered[i].task+' ['+chalk.blue(filtered[i].tags) +']')
		}
		console.log(table2.toString());
	}



}

module.exports = View