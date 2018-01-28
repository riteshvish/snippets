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


Array.prototype.findLargestAndSmallest = function () {
    var array = this;
    array = array || [];
    console.log(array);
    if (array.length) {
        var min = array[0];
        var max = array[0];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            min = min > element ? element : min;
            max = max < element ? element : max;
        }
        return { "max": max, "min": min }
    } else {
        return {};
    }
}



_common.line();
console.log(_common.getFileName("largest and smallest number in unsorted array"));
console.log(_common.array(10, 1, 1000).findLargestAndSmallest())
_common.line();