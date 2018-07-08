"use strict"
const fs = require('fs')

class Models {
  static read(callback) {
    fs.readFile('data.json', (err, data) => {
      if (err) throw err
      let list = JSON.parse(data)
      callback(list)
    })
  }

  static write(list, callback) {
    fs.writeFile('data.json', JSON.stringify(list), (err) => {
      if (err) throw err
      callback()
    })
  }

  // static list(callback) {
  //   fs.readFile('./data.json', (err, data) => {
  //     if (err) throw err
  //     else {
  //       let list = JSON.parse(data)
  //       callback(list)
  //     }
  //   })
  // }

  static add(addition, callback) {
    Models.read(list => {
      let date = new Date()
      list.push({task: `${addition}`, status: false, created_at: date.getTime(), finished_at: false, tag: []})
      Models.write(list, () => {
        callback()
      })
    })
  }

  static findById(num, callback) {
    Models.read(list => {
      let status = "";
      let task
      for (let i = 1; i <= list.length; i++) {
        if (num == i) {
          if (!list[i - 1].status) {
            status = "[ ]";
          } else {
            status = "[x]";
          }
          task = list[i - 1].task
        }
      }
      callback(num, status, task)
    })
  }

  static delete(num, callback) {
    Models.read(list => {
      for(let i = 1; i <= list.length; i++) {
        if(num == i) {
          list.splice(i-1, 1);
          Models.write(list, () => {
            callback()
          })
        }
      }
    })
  }

  static complete(num, callback) {
    Models.read(list => {
      let date = new Date()
      for(let i = 1; i <= list.length; i++) {
        if(num == i) {
          list[i-1].status = true
          list[i-1].finished_at = date.getTime()
          Models.write(list, () => {
            callback()
          })
        }
      }
    })
  }

  static uncomplete(num, callback) {
    Models.read(list => {
      for(let i = 1; i <= list.length; i++) {
        if(num == i) {
          list[i-1].status = false
          Models.write(list, () => {
            callback()
          })
        }
      }
    })
  }

  static listCreated(addition, callback) {
    Models.read(list => {
      let dateSort = list.slice(0);
      if (!addition || addition === "asc") {
        dateSort.sort(function(a, b) {
          return a.created_at - b.created_at;
        });
        callback(dateSort)
      } else if (addition === "desc") {
        dateSort.sort(function(a, b) {
          return b.created_at - a.created_at;
        });
        callback(dateSort)
      }
    })
  }

  static listCompleted(addition, callback) {
    Models.read(list => {
      let dateSort = list.slice(0);
      let completed = []
      if(!addition || addition === 'asc') {
        dateSort.sort(function(a, b) {
          return a.finished_at - b.finished_at;
        });
        for(let i = 0; i < dateSort.length; i++) {
          if(dateSort[i].status) {
            completed.push(dateSort[i])
          }
        }
        callback(completed)
      } else if(addition === 'desc') {
        dateSort.sort(function(a, b) {
          return b.finished_at - a.finished_at;
        });
        for(let i = 0; i < dateSort.length; i++) {
          if(dateSort[i].status) {
            completed.push(dateSort[i])
          }
        }
        callback(completed)
      }
    })
  }

  static tag(addition, options, callback) {
    Models.read(list => {
      for(let i = 1; i <= list.length; i++) {
        let index = 0
        if(addition == i) {
          while(options[index] !== undefined) {
            if(list[i-1].tag.indexOf(options[index]) === -1) {
              list[i-1].tag.push(options[index])
            }
            index++
          }
        }
      }
      Models.write(list, () => {
        callback(list)
      })
    })
  }

  static filter(addition, callback) {
    Models.read(list => {
      let tagged = []
      for(let i = 0; i < list.length; i++) {
        for(let j = 0; j < list[i].tag.length; j++) {
          if(list[i].tag[j] === addition) {
            tagged.push(`${i+1}. ${list[i].task} [${list[i].tag.join(',')}]`)
          }
        }
      }
      callback(tagged)
    })
  }
}

module.exports = Models