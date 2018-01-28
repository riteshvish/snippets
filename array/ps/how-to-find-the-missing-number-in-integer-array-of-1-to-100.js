var Common = require("./common");
var _common = new Common();

console.log(`
Q ) How to find largest and smallest number in unsorted array?
Rule : 
1 ) Asked for proper description
2 ) create 3 input 
best case : [0,10,1,2,3,4] 
average case : [10,21,2,43,14,4] 
worse case : [10,11,2,2,1,40] 
3 ) Write Test Case : 

4 ) Think and Take Time

5 ) Start Coding

6 ) Time and Space Performance
Big O();
`)


Array.prototype.findMissingNumber = function () {
    var array = this;  

}

var findMissingNumber=function(array){
    var sum=0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum += element;
        
    }
    return (((array.length+1)*(array.length+2))/2)-sum;
}
var array=[];
var missing=_common.randomNumber(1,100);
for (let index = 1; index <=100; index++) {
    if (missing!==index)
    array.push(index)    
}
_common.line();
console.log(_common.getFileName("How to find the missing number in integer array of 1 to 100"));
console.log(array)
console.log(findMissingNumber(array))
_common.line();