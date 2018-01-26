var async = require("async");
/*
NOTES 
how to pass parameter in name function
you cannot bind on funtion
eg function a(){}.bind(err,data) // will throw reason 'bind is not a property of function (my reason)';


RULE 
Error Handling rules
Google it;

if its take more then 5 min to get a solution
then reading each work of error carfully;
Think Before Googling it again;
Mostly is a typo error or silly mistake that time

Node Artitecutre
Lifecycle
Ionic
Ionic 2
Reachjs
Angularjs
Angular2
Reach Native
Android

*/

var users={};
var name="Ritesh Vishwakarma";
var hobby=[];
function hobbyOne(callback){
	callback(null,"hobbyOne")
}

function hobbyTwo(callback) {
	callback(null, "hobbyTwo")
}
var hobbyThree = function (hobby,callback) {
	// callback(null, "hobbyThree"+h)
	console.log("hobby is my input params; hobby : ", hobby);
	console.log("Second Wait Start Time 2.5 sec : ", new Date());
	setTimeout(function () {
		console.log("Second Wait End Time : ", new Date());
		callback(null, hobby)
	}, 2500)
}.bind(null,"# Hobby");

hobby.push(hobbyOne);
hobby.push(hobbyTwo);
hobby.push(hobbyThree);

users.name=function(name,callback){
	console.log("name is my input params; name : ",name);
	console.log("Wait Start Time 2.5 sec: ", new Date());
	setTimeout(function(){
		console.log("Wait End Time : ", new Date());		
		callback(null,name)
	},2500)
}.bind(null,name)

users.age=function(callback){
	callback(null,24)
}
users.hobby=function(callback){
	// callback(null,[])
	async.parallel(hobby,function(err,results){
		callback(err,results)
	})
}
console.log("Process Start Time : ", new Date());
async.parallel(users,function(err,results){	
	console.log("Process End Time : ", new Date());
	console.log(results)
})
