const Controller = require('./controller')


if(process.argv[2].indexOf('filter') === 0){
	// console.log('adada')
	let split = process.argv[2].split(':')
	// console.log(split[0],'0000000000000')
	let input = split[0]
	let input2 = split[1]
	// console.log(input2)
	Controller.command(input,input2)
}else{
	// console.log('tidak ada')
	let input = process.argv[2]
	let input2 = process.argv.splice(3).join(' ')
	Controller.command(input,input2)
}


