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

// var dateTime = require('node-datetime');
// var dt = dateTime.create();
// var formatted = dt.format('Y-m-d H:M:S');
// let date = new Date();
// let old = new Date('2018-02-14T08:22:08.376Z');
// if (date < old) console.log(true);
// console.log(date.toString());

// console.log('abc'.split(':')[1]);