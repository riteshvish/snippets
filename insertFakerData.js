var Connection =  require('./server').Connection;
var conn = new Connection();
var ObjectID = require('mongodb').ObjectID;
var faker = require('faker');


// var dob = faker.date.past(50, new Date("Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)"));
// var dob = faker.date.past(1, new Date());
// console.log(dob);

















































var getSampleProductJSON=function(){
	var dob = faker.date.past(1, new Date());
	return{
		name:faker.name.firstName(),
		createDate:dob
	}
}



var insertIntoCollection=function(){
	conn.connect(function(err,db){
		if(err){
			console.log(err);
		}
		else{
		var users = db.collection("products");		
		users.insert(getSampleProductJSON(),function(err,docs){
			if(err){				
				console.log(err)
			}
			else{
				// console.log(docs)
			}
		})
	}})
}

// for (var i = 0; i < 400; i++) {
// 	insertSampleProduct();
// };

var getProductAsPerDate=function(from,to){
	conn.connect(function(err,db){
		if(err){
			console.log(err);
		}
		else{
		var users = db.collection("products");		
		users.aggregate([{
	       $project:{
				yearMonthDay: { $dateToString: { format: "%Y-%m-%d", date: "$createDate" } },	
				year: { $year: "$createDate" },
				month: { $month: "$createDate" },
				day: { $dayOfMonth: "$createDate" } 
			}
	    }],function(err,docs){
			if(err){				
				console.log(err);
				process.exit();
			}
			else{
				 console.log(docs)
			}
		})
	}})
}

getProductAsPerDate();

// var currentId=1;
// var getSampleJSON=function(){
// 	var age= parseInt((Math.random()*100));
// 		age=age<20?age+20:age;	
// 	return {
//      "firstName":faker.name.firstName(),
//      "lastName": faker.name.lastName(),
//      "age":age,
//      "address":
//      {
//          "streetAddress": faker.address.streetAddress(),
//          "city":faker.address.city (),
//          "state": faker.address.stateAbbr(),
//          "postalCode": faker.address.zipCode()
//      }
//  }

// }

// var getSampleEmployeeJSON=function(reportingId){
// 	currentId++;
// 	return{
// 		reporting:reportingId,
// 		"firstName":faker.name.firstName(),
// 		"lastName": faker.name.lastName(),
// 		empid:currentId
// 	}
// }

// var insertNewUser=function(reportingId){
// conn.connect(function(err,db){
// 		if(err){
// 			console.log(err);
// 		}
// 		else{
// 		var users = db.collection("users");		
// 		users.insert(getSampleJSON(),function(err,docs){
// 			if(err){				
// 				console.log(err)
// 			}
// 			else{
// 				// console.log(docs)
// 			}
// 		})
// 	}})
// }

// var getData=function(reportingId,memo,cbmain){
// 	var total=[];
// 	var findAllUnderEmp=function(reportingId,memo,cb){
		
// 		// console.log(new Date())
		
// 	conn.connect(function(err,db){
// 			if(err){
// 				console.log(err);
// 			}
// 			else{
// 			var users = db.collection("employee");		
// 				users.aggregate([
// 				{$match:{reporting:reportingId}},	
// 				{
// 				$group:{
// 					"_id":"$reporting",
// 					total:{$sum:1},
// 					names:{$push:"$firstName"},
// 					empids:{$push:"$empid"}
// 				}},
// 				{$project:{names:true,empids:true}},
// 				{$sort:{_id:1}}
// 				],function(err,docs){
// 				if(err){				
// 					console.log(err)
// 					process.exit();
// 				}
// 				else{
// 					// console.log(docs[0])
// 					if(docs[0]){
// 						memo=memo.concat(docs[0].empids);
// 						total=total.concat(docs[0].empids);
// 						// console.log(total)
// 						// console.log(docs[0].empids)
// 						docs[0].empids.forEach(function(d){
// 							//memo=memo.concat(docs[0].empids);
// 							// console.log(memo);
// 							findAllUnderEmp(d,memo,function(data,id){
// 								if(data[data.length-1]==id){
// 									cbmain(data,id)
// 								}
// 							})
// 						})
// 					}else{
// 						// console.log(memo)

// 						cb(total,reportingId)
// 					}

// 				}
// 			})
// 		}})
// 	}
// 	findAllUnderEmp(reportingId,memo)
// }




// // for (var i = 0; i < 100; i++) {
// // 	insertNewUser()
// // };
// var getSampleDateJSON=function(){
// 	return {

// 	}
// }
// var insertNewUser=function(reportingId){
// conn.connect(function(err,db){
// 		if(err){
// 			console.log(err);
// 		}
// 		else{
// 		var users = db.collection("dateCols");		
// 		users.insert(getSampleJSON(),function(err,docs){
// 			if(err){				
// 				console.log(err)
// 			}
// 			else{
// 				// console.log(docs)
// 			}
// 		})
// 	}})
// }


// // getData(2,[],function(data,index){
// // 	console.log(data,index)
// // })
// // setTimeout(function(){
// // 	getData(5,[])
// // },2000)
// // var level=0;
// // var setlevel=setInterval(function(i){
// // 	level++;
// // 	for (var j = 0; j< 2; j++) {
// // 		insertNewUser(level);	
// // 	};
// // 	if(level==20){
// // 		clearInterval(setlevel)
// // 	}
// // },1000)


// // db.employee.aggregate([{
// // 	$group:{
// // 		"_id":"$reporting",
// // 		total:{$sum:1},
// // 		names:{$push:"$firstName"},
// // 		empids:{$push:"$empid"}
// // 	}},
// // 	{$project:{names:true,empids:true}},
// // 	{$sort:{_id:1}}
// // 	]);

// // [{
// // 	$group:{
// // 		"_id":"$reporting",
// // 		total:{$sum:1},
// // 		names:{$push:"$firstName"},
// // 		empids:{$push:"$empid"}
// // 	}},
// // 	{$project:{names:true,empids:true}},
// // 	{$sort:{_id:1}}
// // 	]


// // conn.connect(function(err,db){
// // 		if(err){
// // 			console.log(err);
// // 		}
// // 		else{
// // 		var users = db.collection("users");		
// // 		users.aggregate([{
// // 			$group:{
// // 				"_id":'$age',
// // 				'total':{$sum:1},
// // 				'names':{$push:'$firstName'}
// // 			}
// // 		},{
// // 			$sort:{total:-1}
// // 		},{
// // 			$limit:2
// // 		},{$skip:0},
// // 		{
// // 			$project:{total:1}
// // 		}]).toArray(function(err,docs){
// // 			if(err){				
// // 				console.log(err)
// // 			}
// // 			else{
// // 				console.log(docs)
// // 			}
// // 		})
// // 	}})

// //process.exit();






