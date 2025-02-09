// indexOf ka polyfill 
Array.prototype.getIndex = function(value){
    for(let i = 0 ; i< this.length;i++){
        if(this[i] === value){
            return i
        }
    }
    return -1
}

//push ka polyfill 
Array.prototype.add = function(value){
this[this.length] = value
}

// pop ka polyfill

Array.prototype.remove = function(){
    let value = this[this.length-1]
this.length = this.length - 1
return value
}



// include ka polyfill
Array.prototype.haiKya = function(value){
for(let i = 0 ; i< this.length;i++){
    if(this[i] === value) return true
}
return false
}



// forEach ka polyfill
Array.prototype.myForEach = function(fn){
    for(let i = 0 ; i< this.length ; i++){
        fn(this[i],i)
    }
}



// map ka polyfill 
Array.prototype.myMap = function(fn){
let newArray = [];
for(let i = 0 ; i< this.length ; i++){
   let val =  fn(this[i],i)
   newArray.add(val)
}
return newArray
}

let arr  = [1,2,3,4]

let newarr = arr.myMap((val)=> val+20);




// filter ka polyfill 

Array.prototype.myfilter = function(fn){
    let newArray = [];
    for(let i = 0 ; i< this.length ; i++){
       let val =  fn(this[i],i)
      if(val) {
        newArray.add(this[i])
      }
    }
    return newArray
    }


let filteredarr = arr.myfilter((val,_)=> val % 2 == 0)




// length ka polyfill 

Array.prototype.getLength = function(){
    let count = 0 
    while(this[count] !== undefined){
        count++
    }
    return count
}


console.log(data);


// splice ka polyfill


Array.prototype.mySplice = function (startingIndex, deletingCount) {
    let deleteditems = [];
    let count = startingIndex;
    for (let i = 1; i <= deletingCount; i++) {
      deleteditems.push(this[count]);
      count++;
    }
   
  
    for (let i = startingIndex; i < this.length - deletingCount; i++) {
      this[i] = this[i + deletingCount];
      console.log(i);
    }
  
    this.length -= deletingCount;
  
    return deleteditems
  };
  
  let data = arr.mySplice(3, 3);

