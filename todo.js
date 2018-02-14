"use strict"

class ToDo{
    constructor(){

    }
    static command(argvInput){
        switch(argvInput[2]){
            default: 
                console.log('you will call help')
                break
            case 'help':
                let result = [
                    '$ node todo.js',
                    '$ node todo.js help',
                    '$ node todo.js list',
                    '$ node todo.js add <task_content>',
                    '$ node todo.js findById <task_id>',
                    '$ node todo.js delete <task_id>',
                    '$ node todo.js complete <task_id>',
                    '$ node todo.js uncomplete <task_id>',
                ]
                return result.join('\n')
                break
            case 'list':
                console.log('ini list anda')
                break
            case 'add':
                console.log('add list anda')
                break
            case 'findById':
                console.log('cari list anda by ID')
                break
            case 'delete':
                console.log('silahkan hapus list anda')
                break
            case 'complete':
                console.log('task list anda yang complete')
                break
            case 'uncomplete':
                console.log('task list anda yang belum selesai')
                break
        }
    }
}

const syntax = process.argv

let todo = new ToDo()
console.log(ToDo.command(syntax))

