const Controller = require('./controller')

if(process.argv[2] === undefined  ){
	let input = process.argv[2]
	let input2 = process.argv.splice(3).join(' ')
	Controller.command(input,input2)
}
else if(process.argv[2].indexOf('filter') === -1){
	let input = process.argv[2]
	let input2 = process.argv.splice(3).join(' ')
	Controller.command(input,input2)

}else{
	let split = process.argv[2].split(':')
	let input = split[0]
	let input2 = split[1]
	Controller.command(input,input2)
}


