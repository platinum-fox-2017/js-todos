"use strict"

const fs = require('fs');
const path = './data.json';

class TODOModels {
	static readFile(callback) {
		fs.readFile(path, 'utf8', function (err, data) {
			if (err) console.log(err);
			else {
				let dataObj = JSON.parse(data);
				callback(dataObj);
			}
		});
	}

	static writeFile(data, callback) {
		fs.writeFile(path, JSON.stringify(data), (err) => {
		  if (err) console.log(err);
		  callback();
		});
	}
}

module.exports = TODOModels;