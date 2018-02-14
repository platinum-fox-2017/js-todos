"use strict"

const fs = require('fs');
const path = './data.json';

class TODO {
	constructor() {}

	static list(data) {
		for (let i = 0; i < data.length; i++) {
			console.log(`${data[i].id}. ${data[i].todo}`);
		}
	}

	static add(path, data) {
		TODO.readFile(path, function (dataObj, callback) {
			let newObj = {
				id : (Number(dataObj[dataObj.length - 1].id) + 1).toString(),
				todo : data
			};

			dataObj.push(newObj);
			TODO.writeFile(path, dataObj);
		})
	}

	static readFile(path, callback) {
		fs.readFile(path, 'utf8', function (err, data) {
			if (err) console.log(err);
			else {
				let dataObj = JSON.parse(data);
				callback(dataObj);
			}
		});
	}

	static writeFile(path, data) {
		fs.writeFile(path, JSON.stringify(data), (err) => {
		  if (err) console.log(err);
		  else console.log(`Added ${data[data.length - 1].todo} to your TODO list...`);
		});
	}
}

let input_argv = process.argv;

switch (input_argv[2]) {
	case 'list': {
		TODO.readFile(path, TODO.list);
		break;
	}
	case 'add' : {
		TODO.add(path, input_argv[3]);
		break;
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