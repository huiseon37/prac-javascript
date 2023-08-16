function customSet(){
  this.setObj = {};


  this.has = function (value){
    return this.setObj[value] !== undefined;
  }

  this.getter = function (value){
    return this.has(value) ? value : null;
  }

  this.add = function (value){
    this.setObj[value] = value;
  }

  this.remove = function (value){
    this.has(value) && delete this.setObj[value];
  }

}

const set = new customSet();
set.add(1);
set.add(2);
console.log(set.getter(1));
set.remove(2);
console.log(set.setObj);