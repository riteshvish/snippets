var async = require("async");
var urls=[1,2,3,4,5,6,7,8,9,4,5,6,1,2,3,1]
var makeRequest=function(url){
    console.log(url," my ")
}
async.each(urls, function (url, callback) {
    console.log("Grabbing Dataset from " + url);
    makeRequest(url, function () {
        callback();
    });
}, function (err) {
    console.log("Hello");
    if (err) {
        console.log("Error grabbing data");
    } else {
        console.log("Finished processing all data");
    }
}
);