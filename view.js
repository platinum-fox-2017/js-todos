class View{
  static showHelp(){
      console.log(`Daftar menu yang bisa di gunakan pada todo.js :`)
      console.log(`$node todo.js`)
      console.log(`$node todo.js help`)
      console.log(`$node todo.js list`)
      console.log(`$node todo.js add<task_content>`)
      console.log(`$node todo,js findById<task_id>`)
      console.log(`$node todo.js delete<task_id>`)
      console.log(`$node todo.js complete <task_id>`)
      console.log(`$node todo.js uncomplete <task_id>`)
      console.log(`$node todo.js list: created asc|desc`)
      console.log(`$node todo.js list: completed asc|desc`)
      console.log(`$node todo.js tag (<task_id><tag_name1><tag_name2>.....<tag_name_N>`)
      console.log(`$node todo.js filter: <tag_name>`)
  }

  static showData(data){
    console.log(`daftar list hari ini :`)
    for(let i = 0 ; i < data.length ; i++){
      console.log(`${i+1}. ${data[i].status} ${data[i].task}`)
    }
  }

  static addData(data){
    console.log(`added "${data}" to your TODO list`)
  }

  static findData(data){
      console.log(data)
  }

  static showDelete(data){
    console.log(`deleted "${data}" from you TODO list`)
  }

  static listCreatedData(data,tanggal){
    console.log(`daftar list hari ini yang disusun berdasarkan tanggal ${tanggal} :`)
    for(let i = 0 ; i < data.length ; i++){
      console.log(`${i+1}. ${data[i].status} ${data[i].task}`)
    }
  }

  static listCompletedData(data,tanggal){
    console.log(`daftar yang sudah diselesaikan berdasarkan ${tanggal} :`)
    for(let i = 0 ; i < data.length ; i++){
      console.log(`${i+1}. ${data[i].status} ${data[i].task}`)
    }
  }

  static showTags(data,num){
    let index = Number(num)
    console.log(`Tagged task "${data[index-1].task}"  with tags : ${data[index-1].tags}`)
  }

  static showFilter(data){
    console.log(`${data[1]+1}. ${data[0].task} [${data[0].tags}]`)
  }

}

module.exports = View
