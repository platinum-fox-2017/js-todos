const fs = require('fs')

class Model{
  constructor(){

  }

  static list(callback){
    fs.readFile('./data.json','utf8',function(err,data){
      var dataparsing = JSON.parse(data)
      callback(dataparsing)
    })
  }

  static addlist(tambahlist,callback){
     fs.readFile('./data.json','utf8',function(err,data){
       var dataparsing = JSON.parse(data)
       dataparsing.push({'id':dataparsing.length+1,'complate':' ','task':tambahlist,'created': Date.now(),'lc':Date.now()})
       let kirimparsing=JSON.stringify(dataparsing)
       fs.writeFile('./data.json',kirimparsing,function(err){})
       let tampil='added '+tambahlist+' from your TODO list...'
       callback(tampil)

     });
   }

   static findById(cekid,callback){
     fs.readFile('./data.json','utf8',function(err,data){
       var dataparsing = JSON.parse(data)
       callback(dataparsing,cekid)
     });
   }

   static hapus(iddelete,callback){
     fs.readFile('./data.json','utf8',function(err,data){
       var dataparsing = JSON.parse(data)
       console.log(dataparsing);
       for(let i=0;i<dataparsing.length;i++){
         if(dataparsing[i].id===iddelete){
           console.log('delete '+dataparsing[i].task+' from your TODO list...')
           dataparsing.splice(i, 1);
         }
       }
       let kirimparsing=JSON.stringify(dataparsing)
       fs.writeFile('./data.json',kirimparsing,function(err){})
       callback(dataparsing)
     });
   }


   static completes(idcomplete,callback){
     fs.readFile('./data.json','utf8',function(err,data){
       var dataparsing = JSON.parse(data)
       for(let i=0;i<dataparsing.length;i++){
         if(dataparsing[i].id===idcomplete){
           dataparsing[i].complate='X'
         }
       }
       let kirimparsing=JSON.stringify(dataparsing)
       fs.writeFile('./data.json',kirimparsing,function(err){})
       callback(dataparsing)
     });
   }

   static uncompletes(iduncomplete,callback){
     fs.readFile('./data.json','utf8',function(err,data){
       var dataparsing = JSON.parse(data)
       for(let i=0;i<dataparsing.length;i++){
         if(dataparsing[i].id===iduncomplete){
           dataparsing[i].complate=' '
         }
       }
       let kirimparsing=JSON.stringify(dataparsing)
       fs.writeFile('./data.json',kirimparsing,function(err){})
       callback(dataparsing)
     });
   }

   static created(orderby,callback){
     fs.readFile('./data.json','utf8',function(err,data){
       var dataparsing = JSON.parse(data)
       if(orderby==='desc'){
         dataparsing.sort(function(a,b){
           return a.created<b.created
         })
       }else{
         for(let i=0;i<dataparsing.length;i++){
           dataparsing.sort(function(a,b){
             return a.created>b.created
           })
         }
       }
       callback(dataparsing)
     });
   }
   static lc(orderby,callback){
     fs.readFile('./data.json','utf8',function(err,data){
       var dataparsing = JSON.parse(data)
       if(orderby==='desc'){
         dataparsing.sort(function(a,b){
           return a.lc<b.lc
         })
       }else{
         for(let i=0;i<dataparsing.length;i++){
           dataparsing.sort(function(a,b){
             return a.lc>b.lc
           })
         }
       }
       callback(dataparsing)

     });
   }

   static tag(idtag,arrtag,callback){
     fs.readFile('./data.json','utf8',function(err,data){
       var dataparsing = JSON.parse(data)
       for(let i=0;i<dataparsing.length;i++){

         if(dataparsing[i].id===Number(idtag)){
           dataparsing[i].tag=arrtag
         }
       }
       let kirimparsing=JSON.stringify(dataparsing)
       fs.writeFile('./data.json',kirimparsing,function(err){})
       callback(dataparsing)
     });
   }

   static filter(nametag,callback){
     fs.readFile('./data.json','utf8',function(err,data){
       var dataparsing = JSON.parse(data)
       let tampilkanfilter=[]
       for(let i=0;i<dataparsing.length;i++){
         if(dataparsing[i].tag.includes(nametag)){
           tampilkanfilter.push(dataparsing[i])
         }
       }
       callback(tampilkanfilter)
     });
   }

   static outstanding(orderby,callback){
     fs.readFile('./data.json','utf8',function(err,data){
       var dataparsing = JSON.parse(data)
       if(orderby==='desc'){
         dataparsing.sort(function(a,b){
           return a.created<b.created
         })
       }else{
         for(let i=0;i<dataparsing.length;i++){
           dataparsing.sort(function(a,b){
             return a.created>b.created
           })
         }
       }
       callback(dataparsing)
     });
   }
}



module.exports = Model
