"use strict"

const ModelTodo = require ('./model.js')
const ViewTodo = require ('./view.js')

class ControlTodo{
    constructor(){
        this._syntax = syntax
        this._valueList = valueList
    }
    
    static command(){
        switch(syntax){
            default: 
                console.log('you will call "help"')
                break
            case 'help':
                let result = [
                    '$ node todo.js',
                    '$ node todo.js help',
                    '$ node todo.js list',
                    '$ node todo.js add "<task_content>"',
                    '$ node todo.js findById <task_id>',
                    '$ node todo.js delete <task_id>',
                    '$ node todo.js complete <task_id>',
                    '$ node todo.js uncomplete <task_id>',
                ]
                result = result.join('\n')
                return console.log(result)
                break
            case 'list':
                ViewTodo.showList()
                break
            case 'add':
                ModelTodo.addList(valueList)
                break
            case 'findById':
                ModelTodo.searchId(valueList)
                break
            case 'delete':
                ModelTodo.deleteId(valueList)
                break
            case 'complete':
                ModelTodo.completeId(valueList)
                break
            case 'uncomplete':
            ModelTodo.uncompleteId(valueList)
                break
            
        }
    }
}

module.export = ControlTodo

const syntax = process.argv[2]
const valueList = process.argv[3]

let todo = new ControlTodo()
ControlTodo.command(syntax)
// console.log(valueList)

