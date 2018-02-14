'use strict'
const Controller = require('./controllers')

let input = process.argv
let command = process.argv[2]
let data = input.splice(3).join(' ')

Controller.getCommand(command, data)