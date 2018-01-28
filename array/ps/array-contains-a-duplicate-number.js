console.log(`
Q ) How to check if array contains a duplicate number?
Rule : 
1 ) Asked for proper description
2 ) create 3 input 
best case : [0,0,1,2,3,4] 
average case : [0,1,2,2,3,4] 
worse case : [0,1,2,3,4,4] 
3 ) Write Test Case : 

4 ) Think and Take Time

5 ) Start Coding

6 ) Time and Space Performance
Big O();
`)
var line = function () {
    return "===========================================================================";
}

function haveDuplicate(arr) {
    arr = arr || []
    var localjson = {};
    if (arr.length) {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (!localjson[element]) {
                localjson[element] = 1;
            } else {
                return true;
            }
        }
        return false;
    } else {
        return false;
    }
}


var array = [];
var randomNumber = function (min, max) {
    min = min || 1;
    max = max || 10;
    return parseInt(Math.random() * max) + min
}
for (let index = 0; index < 10; index++) {
    array.push(randomNumber(1, 100))
}
console.log(line())
console.log("How to check if array contains a duplicate number?");
console.log(array);
console.log(haveDuplicate(array))
console.log(line())