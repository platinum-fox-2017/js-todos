"use strict"

const fs = require('fs');
const dataJSON = './data.json';

class TODO {
	constructor() {}

	static list(data) {
		for (let i = 0; i < data.length; i++) {
			console.log(`${data[i].id}. ${data[i].todo}`);
		}
	}

	static readFile(dataJSON, callback) {
		fs.readFile('data.json', 'utf8', function (err, data) {
			if (err) console.log(err);
			else {
				let dataObj = JSON.parse(data);
				callback(dataObj);
			}
		});
	}
}

let input_argv = process.argv;

switch (input_argv[2]) {
	case 'list': {
		TODO.readFile(dataJSON, TODO.list);
		break;
	}
	case 'add' : {

	}
	case 'findById' : {

	}
	case 'delete' : {

	}
	case 'complete' : {

	}
	case 'uncomplete' : {

	}
	default : console.log(
		`Usage: node "JS Todos.js" <command>

where <command> is one of:
	help			menampilkan command apa saja yang tersedia
	list			melihat daftar TODO
	add <task_content>	menambahkan TODO ke dalam list
	findById <task_id>	melihat detail TODO sesuai \`task_id\` nya
	delete <task_id>	menghapus TODO sesuai \`task_id\` nya
	complete <task_id>	menandai status TODO selesai
	uncomplete <task_id>	menandai status TODO belum selesai
		`
		);
}