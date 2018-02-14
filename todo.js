"use strict"

const fs = require('fs');

function bantuan(){
    let fiturs = ['help                   Tampilkan command yang tersedia',
                  'list                   Melihat daftar TODO',
                  'add <task_content>     Menambahkan TODO kedalam List',
                  'findById <task_id>     Melihat detail TODO sesuai task_id nya ',
                  'delete <task_id>       Menghapus TODO sesuai task_id',
                  'complete <task_id>     Menandai status TODO selesai',
                  'uncomplete <task_id>   Menandai status TODO yang belom selesai']

    for(let i=0; i<fiturs.length; i++){
        console.log(fiturs[i])

    }
}

function list(){
    fs.readFile('./data.json', 'utf8', function (err, data){
    if (err) throw err
    let list = JSON.parse(data)
    let listArr = []
    for(let i=0; i<list.length; i++){
        if(list[i].status === true){
            console.log(`${i+1} ${'[x]'} ${list[i].task}`)
        } else {
            console.log(`${i+1} ${'[ ]'} ${list[i].task}`)
        }
        listArr.push(list[i])
    }
    let listUpdate = JSON.stringify(listArr) // format utk menyimpan di format JSON

    fs.writeFile('./data.json', listUpdate)

    })
}

function add(){
    fs.readFile('./data.json', 'utf8', addList) 
}
function addList(err, data){
    if (err) throw err
    let getValueAdd = _argv[3] // inputan dari terminal (string)
    let list = JSON.parse(data)

    list.push({task: getValueAdd, status: false})
    let listUpdate = JSON.stringify(list)

    fs.writeFile('./data.json', listUpdate)
}

function findById(){
    fs.readFile('./data.json', 'utf8', findList) 
}

function findList(err, data){
    if (err) throw err
    let getValueAdd = _argv[3] // inputan ID dari terminal (string)
    let list = JSON.parse(data)
    for(let i=0; i<list.length; i++){
        if(Number(getValueAdd) === (i+1)){
            console.log(`${i+1} ${list[i].task}`)
        }
    }
}

function deleteById(){
    fs.readFile('./data.json', 'utf8', deleteList)
}

function deleteList(err, data){
    if (err) throw err
    let getValueAdd = _argv[3] // inputan ID dari terminal (string)
    let list = JSON.parse(data)

    let listArr = []
    for(let i=0; i<list.length; i++){
        listArr.push(list[i])
    }
    console.log('Delete "' + listArr[getValueAdd-1].task + '" from your TODO list..')
    listArr.splice((getValueAdd-1), 1)
    let listUpdate = JSON.stringify(listArr)

    fs.writeFile('./data.json', listUpdate)
}

function completeId(){
    fs.readFile('./data.json', 'utf8', completeList)
}
function completeList(err, data){
    if (err) throw err
    let getValueAdd = _argv[3] // inputan ID dari terminal (string)
    let list = JSON.parse(data)

    for(let i=0; i<list.length; i++){
        if(Number(getValueAdd) === (i+1)){
            list[i].status = true
        }
    }

    let listArr = []
    for(let i=0; i<list.length; i++){
        if(list[i].status === true){
            console.log(`${i+1} ${'[x]'} ${list[i].task}`)
        } else {
            console.log(`${i+1} ${'[ ]'} ${list[i].task}`)
        }
        listArr.push(list[i])
    }

    let listUpdate = JSON.stringify(listArr)
    fs.writeFile('./data.json', listUpdate)
}

function uncomplete(){
    fs.readFile('./data.json', 'utf8', uncompleteList)
}

function uncompleteList(err, data){
    if (err) throw err
    let getValueAdd = _argv[3] // inputan ID dari terminal (string)
    let list = JSON.parse(data)

    for(let i=0; i<list.length; i++){
        if(Number(getValueAdd) === (i+1)){
            list[i].status = false
        }
    }

    let listArr = []
    for(let i=0; i<list.length; i++){
        if(list[i].status === true){
            console.log(`${i+1} ${'[x]'} ${list[i].task}`)
        } else {
            console.log(`${i+1} ${'[ ]'} ${list[i].task}`)
        }
        listArr.push(list[i])
    }

    let listUpdate = JSON.stringify(listArr)
    fs.writeFile('./data.json', listUpdate)
}







var _argv = process.argv;
let execute;
switch(_argv[2]){
    case 'help': execute = bantuan(); break;
    case 'list': execute = list() ; break;
    case 'add': execute = add() ; break;
    case 'findById': execute = findById() ; break;
    case 'delete': execute = deleteById() ; break;
    case 'complete': execute = completeId() ; break;
    case 'uncomplete': execute = uncomplete() ; break;
    default : execute = bantuan();
}


// console.log(execute)


