"use strict"

class ToDoView {
  constructor() {
  }

  static help() {
    console.log(`                         Welcome to To do list Apps`)
    console.log(`node todo.js                           # will call help`);
    console.log(`node todo.js help                      # menampilkan command apa saja yang tersedia`);
    console.log(`node todo.js list                      # melihat daftar TODO`);
    console.log(`node todo.js add <task_content>        # menambahkan TODO ke dalam list`);
    console.log(`node todo.js findById <task_content>   # melihat detail TODO sesuai 'task_id'nya`);
    console.log(`node todo.js delete <task_content>     # menghapus TODO sesuai 'task_id'nya`);
    console.log(`node todo.js complete <task_content>   # menandai status TODO selesai`);
    console.log(`node todo.js uncomplete <task_content> # menandai status TODO belum selesai`);
    console.log(`node todo.js list:created              # mengurutkan berdasarkan waktu pembuatan`);
  }

  static showList(data) {
    for(let i=0; i<data.length; i++) {
      console.log(`${data[i].id}. ${data[i].check} ${data[i].task}`);
    }
  }
}

module.exports = ToDoView
