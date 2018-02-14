"use strict"

const ToDoController = require("./controller.js")

var MyArgv = ToDoController.commandController(process.argv);

let command = MyArgv[0];
let option = MyArgv[1];
let additional = MyArgv[2];

ToDoController.control(command, additional, option)