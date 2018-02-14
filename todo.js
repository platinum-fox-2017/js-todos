const TODOControls = require('./control.js');

let input_argv = process.argv;

let command = input_argv[2];
let options = input_argv[3];
if (command == 'add') {
	let temp = [];
	for (var i = 3; i < input_argv.length; i++) temp.push(input_argv[i]);
	options = temp.join(' ');
}

let TODO = new TODOControls({ command: command, option: options});
TODO.execute();