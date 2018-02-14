const fs = require('fs') 

class Command {
  static help() {
    let command = ['$node todo.js', '$node todo.js help', '$node todo.js list', '$node todo.js add <task_content>', '$node todo.js findById <task_id>', '$node todo.js delete <task_id>', '$node todo.js complete <task_id>', '$node todo.js uncomplete <task_id>', '$node todo.js list:created asc|desc', '$node todo.js list:completed asc|desc', '$node todo.js tag <task_id> <tag_name1> <tag_name2> ...', '$node todo.js filter:<tag_name>']
    for(let i = 0; i < command.length; i++) {
      console.log(command[i])
    }
  }

  static list() {
    let data = fs.readFile('./data.json', 'utf8', function read(err, data) {
      if(err) {
        console.log(err)
      } else {
        let list = JSON.parse(data)
        // console.log(list)
        for(let i = 0; i < list.length; i++) {
          let status = ''
          if(!list[i].status) {
            status = '[ ]'
          } else {
            status = '[x]'
          }
          console.log(`${i+1}. ${status} ${list[i].task}`)
        }
      }
    })
  }

  static add() {
    let data = fs.readFile('./data.json', 'utf8', function read(err, data) {
      if(err) {
        console.log(err)
      } else {
        let list = JSON.parse(data)
        let date = new Date()
        list.push({task: `${argv[3]}`, status: false, created_at: date.getTime(), finished_at: false, tag: []})
        fs.writeFile('./data.json', JSON.stringify(list), (err) => {
          if (err) throw err;
          console.log(`You've added a new task!`);
        });
      }
    })
  }

  static findById() {
    let data = fs.readFile('./data.json', 'utf8', function read(err, data) {
      if(err) {
        console.log(err)
      } else {
        let list = JSON.parse(data)
        for(let i = 1; i <= list.length; i++) {
          if(argv[3] == i) {
            console.log(`${i}. ${list[i].status} ${list[i-1].task}`)
          }
        }
      }
    })
  }

  static delete() {
    let data = fs.readFile('./data.json', 'utf8', function read(err, data) {
      if(err) {
        console.log(err)
      } else {
        let list = JSON.parse(data)
        for(let i = 1; i <= list.length; i++) {
          if(argv[3] == i) {
            list.splice(i-1, 1);
            fs.writeFile('./data.json', JSON.stringify(list), (err) => {
              if (err) throw err;
              console.log(`You've deleted one task!`);
            });
          }
        }
      }
    })
  }

  static complete() {
    let data = fs.readFile('./data.json', 'utf8', function read(err, data) {
      if(err) {
        console.log(err)
      } else {
        let list = JSON.parse(data)
        let date = new Date()
        for(let i = 1; i <= list.length; i++) {
          if(argv[3] == i) {
            list[i-1].status = true
            list[i-1].finished_at = date.getTime()
            fs.writeFile('./data.json', JSON.stringify(list), (err) => {
              if (err) throw err;
              console.log(`You've modified your todo list!`);
            });
          }
        }
      }
    })
  }

  static uncomplete() {
    let data = fs.readFile('./data.json', 'utf8', function read(err, data) {
      if(err) {
        console.log(err)
      } else {
        let list = JSON.parse(data)
        for(let i = 1; i <= list.length; i++) {
          if(argv[3] == i) {
            list[i-1].status = false
            fs.writeFile('./data.json', JSON.stringify(list), (err) => {
              if (err) throw err;
              console.log(`You've modified your todo list!`);
            });
          }
        }
      }
    })
  }

  static listCreated() {
    let data = fs.readFile('./data.json', 'utf8', function read(err, data) {
      if(err) {
        console.log(err)
      } else {
        let list = JSON.parse(data)
        // console.log(list)
        let dateSort = list.slice(0);
        if(argv[3] === 'asc') {
          dateSort.sort(function(a, b) {
            return a.created_at - b.created_at;
          });
        } else if(argv[3] === 'desc') {
          dateSort.sort(function(a, b) {
            return b.created_at - a.created_at;
          });
        }
        // console.log(dateSort);
        for(let i = 0; i < dateSort.length; i++) {
          let status = ''
          if(!dateSort[i].status) {
            status = '[ ]'
          } else {
            status = '[x]'
          }
          console.log(`${i+1}. ${status} ${dateSort[i].task}`)
        }
      }
    })
  }

  static listCompleted() {
    let data = fs.readFile('./data.json', 'utf8', function read(err, data) {
      if(err) {
        console.log(err)
      } else {
        let list = JSON.parse(data)
        // console.log(list)
        let dateSort = list.slice(0);
        let count = 1
        if(argv[3] === 'asc') {
          dateSort.sort(function(a, b) {
            return a.finished_at - b.finished_at;
          });
        } else if(argv[3] === 'desc') {
          dateSort.sort(function(a, b) {
            return b.finished_at - a.finished_at;
          });
        }
        for(let i = 0; i < dateSort.length; i++) {
          if(dateSort[i].status) {
            let status = ''
            if(!dateSort[i].status) {
              status = '[ ]'
            } else {
              status = '[x]'
            }
            console.log(`${count}. ${status} ${dateSort[i].task}`)
            count++
          }
        }
      }
    })
  }

  static tag() {
    let data = fs.readFile('./data.json', 'utf8', function read(err, data) {
      if(err) {
        console.log(err)
      } else {
        let list = JSON.parse(data)
        let date = new Date()
        for(let i = 1; i <= list.length; i++) {
          let input = 4
          if(argv[3] == i) {
            while(argv[input] !== undefined) {
              if(list[i-1].tag.indexOf(argv[input]) === -1) {
                list[i-1].tag.push(argv[input])
                fs.writeFile('./data.json', JSON.stringify(list), (err) => {
                  if (err) throw err;
                });
              }
              input++
            }
          }
        }
        console.log(`You've added new tags to your task!`);
      }
    })
  }

  static filter() {
    let data = fs.readFile('./data.json', 'utf8', function read(err, data) {
      if(err) {
        console.log(err)
      } else {
        let list = JSON.parse(data)
        // console.log(list)
        for(let i = 0; i < list.length; i++) {
          for(let j = 0; j < list[i].tag.length; j++) {
            if(list[i].tag[j] === argv[2].substr(7)) {
              console.log(`${i+1}. ${list[i].task} [${list[i].tag.join(',')}]`)
            }
          }
        }
      }
    })
  }
}

// release 0
let argv = process.argv
let command = argv[2]

if(!command) {
  Command.help()
} else if(command.substr(0,6) === 'filter') {
  Command.filter()
}

switch(command) {
  case 'help' :
    Command.help()
    break;
  case 'list' :
    Command.list()
    break;
  case 'add'  :
    Command.add()
    break;
  case 'findById' :
    Command.findById()
    break;
  case 'delete' :
    Command.delete()
    break;
  case 'complete' :
    Command.complete()
    break;
  case 'uncomplete' :
    Command.uncomplete()
    break;
  case 'list:created' :
    Command.listCreated()
    break;
  case 'list:completed' :
    Command.listCompleted()
    break;
  case 'tag' :
    Command.tag()
    break;
  case 'filter' :
    Command.filter()
    break;
}