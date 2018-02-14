"use strict"

class ToDoView {

    static help() {
        console.log(`
        $ node todo.js                                  # will call help
        $ node todo.js help                             # menampilkan command apa saja yang tersedia
        $ node todo.js list                             # Melihat daftar TODO
        $ node todo.js list:created <asc||desc>         # Melihat daftar TODO berdasrakan tanggal pembuatannya
        $ node todo.js list:completed <asc||desc>       # Melihat daftar TODO berdasrakan tanggal penyelesaiannya
        $ node todo.js add <task_content>               # Menambahkan TODO ke dalam list
        $ node todo.js findByID <task_id>               # Menlihat detail TODO sesuai \`task_id\` nya
        $ node todo.js delete <task_id>                 # Menghapus TODO sesuai \`task_id\` nya
        $ node todo.js complete <task_id>               # Menandai status TODO selesai
        $ node todo.js uncomplete <task_id>             # Menandai status TODO belum selesai
        $ node todo.js tag <task_id> <tag1> <tag2>  ... # Memberikan tag dari TODO sesuai \`task_id\' nya
        $ node todo.js filter:<tag_name>                # Melihat daftar TODO yang memiliki \`tag_nam\' yang sama
        `)
    }
    static task(data) {
        console.log(`${data.id}. [${data.status?'x':' '}] ${data.task}`)
    }
    static added(str) {
        console.log(`Added "${str}" to your TODO list...`)
    }

    static delete(str) {
        console.log(`Deleted "${str}" from your TODO list...`)
    }

    static idNotExist(id) {
        console.log(`Tidak tersedia TODO list dengan id: ${id}`)
    }

    static tagAdded(taskStr,tagStr) {
        console.log(`Tagged Task "${taskStr}" with tags: ${tagStr}`)
    }

    static tagExisted(taskStr,tagStr) {
        console.log(`Task "${taskStr}" already has tag: ${tagStr}`)
    }
    
    static filter(data) {
        let str=`${data.id}. ${data.task} [`;
        for(let i in data.tag) {
            str+= data.tag[i]+', ';
        }
        str = str.slice(0, str.length-2)+']';
        console.log(str);
    }
}

module.exports = ToDoView;