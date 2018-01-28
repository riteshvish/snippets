var Common = require("./common");
var _common = new Common();

console.log(`
Q ) How to find duplicate number on Integer array?

`)




var findDuplicateNumber = function (array) {
    var sum=0;
    var a_sum=0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum+=element;
        a_sum+=index+1;    
    }
    var local_n=array.length-1;
    return [(local_n *(local_n+1) )/ 2,a_sum]
}
var n = 6;
console.log(n*(n+1)/2);
var max = n - 2;
var array = [0, 3, 1, 2, 3];
var duplicate = _common.randomNumber(1, n-3);
console.log(duplicate)
_common.line();
console.log(_common.getFileName("How to find duplicate number on Integer array"));
console.log(array)
console.log(findDuplicateNumber(array))
_common.line();