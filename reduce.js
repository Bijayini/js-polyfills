Array.prototype.myreduce = function(callback, total){
    let sum = total;
    for(let i = 0; i < this.length; i++ ){
      sum = callback(sum, this[i]);
    }
    return sum;
};


const count = [1,2,5,7,8,10].myreduce( (acc, item) =>{
    return acc + item ;
}, 0);

console.log('count', count);
