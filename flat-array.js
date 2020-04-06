Array.prototype.flat = function(){
    const newArray = [];
    const loppingArray = (arr, existingArray) => {
        for(let i = 0;  i < arr.length; i++){
            !Array.isArray(arr[i]) ?  existingArray.push(arr[i]) : loppingArray(arr[i], existingArray);
        }
        return existingArray;
    };
    return loppingArray(this, newArray);
};

console.log('Array Flat', [1,2,[4,5, [7,8,[9,10, [89,90]]]]].flat());
