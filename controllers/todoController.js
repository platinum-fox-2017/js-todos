'use strict'
const TodoModel = require('../models/todoModel');
const TodoView = require('../views/todoView');

class Todo{
    constructor(){}
    static process(input){
        return TodoView.help()
    }
}

module.exports = Todo