class View{
  constructor(){

  }

  static list(dataparsing){
      for(let i=0;i<dataparsing.length;i++){
        console.log(dataparsing[i].id+'. ['+dataparsing[i].complate+'] '+dataparsing[i].task)
      }
  }

  static addlist(tampil){
    console.log(tampil);
  }

  static findById(dataparsing,cekid){
    for(let i=0;i<dataparsing.length;i++){
      if(dataparsing[i].id===cekid){
        console.log(dataparsing[i].id+'. '+dataparsing[i].task)
      }
    }
  }

  static hapus(dataparsing){
    console.log(dataparsing);
  }

  static completes(dataparsing){
    for(let i=0;i<dataparsing.length;i++){
      console.log(dataparsing[i].id+'. ['+dataparsing[i].complate+'] '+dataparsing[i].task)
    }
  }

  static uncompletes(dataparsing){
    for(let i=0;i<dataparsing.length;i++){
      console.log(dataparsing[i].id+'. ['+dataparsing[i].complate+'] '+dataparsing[i].task)
    }
  }

  static created(dataparsing){
    console.log(dataparsing);
  }

  static lc(dataparsing){
    console.log(dataparsing)
  }

  static tag(dataparsing){
    console.log(dataparsing);
  }

  static filter(tampilkanfilter){
    console.log(tampilkanfilter);
  }

  static outstanding(dataparsing){
    for(let i=0;i<dataparsing.length;i++){
      if(dataparsing[i].complate != 'X'){
        console.log(dataparsing[i].id+'. ['+dataparsing[i].complate+'] '+dataparsing[i].task)
      }
    }
  }
}


module.exports=View
