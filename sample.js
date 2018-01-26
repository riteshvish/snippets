var express = require('express');
var router = express.Router();
var Connection =  require('../routes/server').Connection;
var conn = new Connection();
var ObjectID = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/list",function(req,res){
	var status = {"state":false,"message":"","docs":[]};
	conn.connect(function(err,db){
		if(err){
			status["message"]=err;
			response(res,status);
		}
		else{
		var users = db.collection("users");		
		users.find({},{password:0}).toArray(function(err,docs){
			if(err){				
				status["message"]=err;
				conn.response(res,status)
			}
			else{
				status["state"]=true;
				status["message"]="List of Users";
				status["docs"]=docs;
				conn.response(res,status)
			}
		})
	}})
});

var checkUsername=function(username,callback){
	var status = {"state":false,"message":"","docs":[]};
	conn.connect(function(err,db){
		if(err){
			callback(err,null);
		}
		else{
		var users = db.collection("users");		
		users.findOne({"username":username},function(err,docs){
			if(err){								
				callback(err,status);				
			}
			else{								
				callback(null,docs);
			}
		})
	}})
}

var createUser=function(data,callback){	
	conn.connect(function(err,db){
		if(err){
			callback(err,null);
		}
		else{
		var users = db.collection("users");		
		users.insert(data,function(err,docs){
			if(err){								
				callback(err,null);				
			}
			else{				
				callback(null,docs);
			}
		})
	}})
}

router.post("/insert",function(req,res){
	var status = {"state":false,"message":"","docs":[]};
	var values = (req.body.values)?JSON.parse(req.body.values):null;

	var username,password;
	if(values){
		username=values["username"] || null;
		password=values["password"] || null;
	}	

	checkUsername(username,function(err,data){
		if(err){
			status["message"]=err;
			conn.response(res,status);
		}
		else{
			if(data){
				status["message"]="username already taken";
				conn.response(res,status);		
			}
			else{
					createUser(values,function(err,data){
						if(err){
							status["message"]=err;
							conn.response(res,status);
						}
						else{
							status["state"]=true;
							status["message"]="User inserted successfully";
							status["docs"]=data;
							conn.response(res,status)
						}	
					})		
				}
			}
		
	});
});



var createSession=function(username,callback){
	conn.connect(function(err,db){
		if(err){
			callback(err,null);
		}
		else{
		var users = db.collection("activesession");		
		var data={};
		data["ts"]=new Date();
		data["username"]=username;
		users.insert(data,function(err,docs){
			if(err){								
				callback(err,null);				
			}
			else{				
				callback(null,docs);
			}
		})
	}})

}


router.post("/login",function(req,res){
	var status = {"state":false,"message":"","docs":[]};
	var values = (req.body.values)?JSON.parse(req.body.values):null;
	var username,password;
	if(values){
		username=values["username"] || null;
		password=values["password"] || null;
	}
	if(username && password){		
		conn.connect(function(err,db){
			if(err){
				status["message"]=err;
				conn.response(res,status);
			}
			else{
			var users = db.collection("users");
			var values={};
			values["ts"]=new Date();
			users.findOne({"username":username,"password":password},function(err,docs){
				if(err){				
					status["message"]=err;
					conn.response(res,status)
				}
				else{
					if(docs){
						createSession(username,function(err,docs){
							if(err){
								status["message"]=err;
									conn.response(res,status)				
							}
							else{
								status["state"]=true;
								status["message"]="Login successfully";
								var data={}
								data["sessionId"]=docs.ops[0]["_id"];
								status["docs"]=data;
								conn.response(res,status)
							}
						})
												
					}
					else{
						status["message"]="Username and password not found";
						status["docs"]=docs;
						conn.response(res,status)							
					}
				}
			})
		}})
	}
	else{
		status["message"]="Please proper username and password";
		conn.response(res,status)
	}

});

var updateUser=function(userid,data,callback){
	conn.connect(function(err,db){
		if(err){
			status["message"]=err;
			conn.response(res,status);
		}
		else{
			var users = db.collection("users");
			delete data["_id"];
			users.update({"_id":new ObjectID(userid)},{$set:data},function(err,docs){
				if(err){	
					console.log(err)							
					callback(err,null);				
				}
				else{				
					callback(null,docs);
				}
			})
		}
	})
}

router.post("/update",function(req,res){
	var status = {"state":false,"message":"","docs":[]};
	var values = (req.body.values)?JSON.parse(req.body.values):null;
	var userid;
	userid=values._id;
	if(userid){
		delete values["username"];
		updateUser(userid,values,function(err,docs){
			if(err){
				status["message"]=err;
				conn.response(res,status);
			}
			else{
				status["state"]=true;
				status["message"]="User updated successfully";
				status["docs"]=docs;
				conn.response(res,status)
			}	
		})
	}	

});


var getUserDetails=function(sessionId,callback){
	conn.connect(function(err,db){
		if(err){
			status["message"]=err;
			conn.response(res,status);
		}
		else{
			var activesession = db.collection("activesession");
			// delete data["_id"];
			activesession.findOne({"_id":new ObjectID(sessionId)},function(err,docs){
				if(err){									
					callback(err,null);				
				}
				else{				

					// callback(null,docs);
					if(docs){
						checkUsername(docs.username,function(err,data){
							if(err){	
													
								callback(err,null);				
							}
							else{	
								console.log("-----------------")
								delete data["password"];
								console.log("-----------------")
								callback(null,data);
							}
						})
					}else{
						callback("invalid session id");
					}
				}

			})
		}
	})
}


router.post("/details",function(req,res){
	var status = {"state":false,"message":"","docs":[]};
	var sessionId = (req.body.sessionId)?(req.body.sessionId):null;
	
	if(sessionId){
		getUserDetails(sessionId,function(err,docs){			
			if(err){
				status["message"]=err;
				conn.response(res,status);
			}
			else{

				status["state"]=true;
				status["message"]="User details";
				status["docs"]=docs;
				conn.response(res,status)
			}	
		})
		
	}
	else{
		status["message"]="Please send sessionId";
		conn.response(res,status)	
	}	

});



module.exports = router;