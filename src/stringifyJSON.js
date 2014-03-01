// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
var output = [];

var stringifyObject = function(object){
	if (Object.prototype.toString.apply(object) === '[object Array]'){
		var output = []
		for (var i=0; i<object.length; i++){
			output.push(stringify(object[i]));
		}
		return "[" + output + "]";
	}
	else{return object;} //ignoring objects within objects
}

//function that stringifies differently dependent on value
var stringify = function(stringMe){ 
	switch(typeof stringMe){
		case 'string': return '"' + stringMe + '"' ;
		case 'object': return stringifyObject(stringMe); //defined above
		default: return stringMe;
	}
}


  for (key in obj){
  	output.push('"'+key+'"' + ":" + stringify(obj[key]) );
  }
  return "{" + output.toString() + "}";
};


var myObj = {
	1: "the loneliest number",
	Two: ["a drink with jam and bread", "a dear", 52, false]
};