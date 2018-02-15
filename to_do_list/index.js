"use strict"

const controller = require('./controller.js')

let startToDo = process.argv
console.log(startToDo);

controller.execute(startToDo[2], startToDo[3])
