console.log("Array");
// console.log("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/")
/*
var a=[];
a.copyWithin;
a.concat;
a.entries;
a.every;
a.fill;
a.filter;
a.find;
a.findIndex;
a.forEach;
a.indexOf;
a.join;
a.keys;
a.lastIndexOf;
a.length;
a.map
a.pop;
a.push;
a.reduce;
a.reduceRight;
a.reverse;
a.shift;
a.slice;
a.some;
a.sort;
a.splice;
a.toLocaleString;
a.toString;
a.values;
a.console;
a.log;

Array.apply;
Array.arguments;
Array.bind;
Array.call
Array.caller;
Array.from;
Array.isArray;
Array.length;
Array.name;
Array.prototype;
Array.toString;
Array.Array;
Array.console;
Array.log;
*/
var a=[0,1,2,3,4,5,6,7,8];
var b=[9,10,11,12,13]
// a.copyWithin(0,4,7) // variable a will change
// console.log(a.concat(b)); // a will not change
// console.log(b.concat(a)); // b will not change
// var a = ['a', 'b', 'c'];
// var iterator = a.entries();
// console.log(iterator)
// for (let e of iterator) {
//     console.log(e);
// }

// var array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(function(currentValue) {
//     console.log(currentValue)
//     return currentValue < 40;
// }));
var a = new Array(3).fill(4);
console.log(a)