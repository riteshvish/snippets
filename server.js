var sConfig ={}; 
sConfig["ip"] = "127.0.0.1" ; 
sConfig["port"] = 27017 ; 
sConfig["database"] = "learning"; 
var ObjectID = require("mongodb").ObjectID;
var mongo = require('mongodb');
var _db,op=0 ; 

Connection = function Connection(){};
Connection.prototype.connect = function(callback){
	try{
			if (_db){callback(null, _db);}
			else{
				var MongoClient = require('mongodb').MongoClient;
				MongoClient.connect("mongodb://" + sConfig.ip + ":" + sConfig.port+ "/" +sConfig.database , 
				function(err, db){
				if (err) {callback(err);} 
				else{
				_db = db;
				callback(null, _db);
				op++;
				console.log(op);
				_db.on('close', function(){
					_db=null;
					
					});
				_db.on('error' , function(){
					
					_db=null; 
					});
				}}
				);
			}
	}
	catch(ex){
		console.log(ex);
	}
};

Connection.prototype.response = function (res, status){
 var body = JSON.stringify(status);
    res.setHeader('Content-Type', 'text/plain');
    //res.setHeader('Content-Length', body.length);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials' , true);
    res.setHeader('Access-Control-Allow-Methods' ,'*');
    res.setHeader('Access-Control-Allow-Headers' , '*');
    res.send(body);

}
exports.Connection  = Connection; 