const cloneDeep = element => {
  if (typeof element === "object" && element !== null) {
    const newObj = Array.isArray(element) ? [] : {} ;
    const keys = Object.keys(element);
    keys.forEach(key => {
      if (typeof element[key] !== "object") {
        newObj[key] = element[key];
      } else {
        newObj[key] = cloneDeep(element[key]);
      }
    });
    return newObj;
  }
  return element;
};

var obj = { x: 45, y: { z: 10, k: { t: 10, u: { i: 8 } } } };
var obj2 = cloneDeep(obj);
obj2.y.k.u = 40;
console.log("obj", obj);
console.log("obj2", obj2);

var arr1 = [1, 2, [3, [4, [5, 6]]]];
var arr2 = cloneDeep(arr1);
arr2[2][1][1][0] = 48;
console.log("arr1", arr1);
console.log("arr2", arr2);

var objWithNull = {x:10,y:{k:null, t: 34}};
var objWithNull2 = cloneDeep(objWithNull);
objWithNull2.y.t = 45;

console.log('objWithNull',objWithNull);
console.log('objWithNull2',objWithNull2);
