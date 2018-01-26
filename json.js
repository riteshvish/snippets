var jsondata = require("./sampledata.json");

/*
Note : 
replacer

==============

    JSON.parse;
    JSON.stringify;
*/


var pretty=1; // 0 false ; 1 true;
function hidefields(params,key, value) {
    /*
        this replacer wil hide all the parmas value;
        eg sampledata= {
            name:"Ritesh",
            age:45,
            password:"ritesh"
        }    
        //to hide password then pass ["password"] pass password in params
        //eg hidefields.bind(null, ["password"]);
        //eg how you will call this
        console.log(JSON.stringify(sampledata,hidefields.bind(null, ["password"])))
    */
    
    if (params.indexOf(key)>-1) return undefined;
    else return value;
}


var replacerFieldsValue = function(params,key,value){
    /*
        this replacer wil replace all the parmas value;
        eg sampledata= {
            name:"Ritesh",
            age:45,
            password:"ritesh"
        }    
        //to hide password then pass [{"password":"random"}] pass password in params
        //eg hidefields.bind(null, [{"password":"random"}]);
        //eg how you will call this
        console.log(JSON.stringify(sampledata,replacerFieldsValue.bind(null, [{"password":"random"}])))
    */
    return params[key] ||  value;    
}

var showFields = ["source", "caption"];
// console.log(JSON.stringify(jsondata,showFields, pretty));
// console.log(JSON.stringify(jsondata, hidefields.bind(null, ["croppings","response","images","tags","profile"]),pretty));
console.log(JSON.stringify(jsondata, replacerFieldsValue.bind(null,{
    "croppings":[],"response":{},"images":{},"tags":[],"profile":{}
}), pretty));

var replaces = function (key, value) {
    if (key == "croppings")
        return [];
    else if (key == "response")
        return {}
    else if (key == "images")
        return {}
    return value;
}

console.log(JSON.stringify(jsondata,replaces, pretty));

