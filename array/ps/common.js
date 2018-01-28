var Common=function(){};
Common.prototype.line=function(){
    console.log("===========================================================================");
}
Common.prototype.getFileName = function (str) {
    str = str || "";
    return str.split(" ").join("-").toLowerCase() + ".js";
}
Common.prototype.randomNumber = function (min, max) {
    min = min || 1;
    max = max || 10;
    return parseInt(Math.random() * max) + min
}
Common.prototype.array=function(len,min,max){
    len=len || 10;
    min=min || 1;
    max=max || 10;
    var array = [];  
    for (let index = 0; index < 10; index++) {
        array.push(this.randomNumber(min, max))
    }
    return array;
}
module.exports=Common;
