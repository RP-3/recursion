// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to have to write it from scratch:

//Function to stringify arrays
var stringifyArray = function(array){
	if (array[0] === undefined){return '[]';}
	var output = []
		for (var i=0; i<array.length; i++){
			output.push(stringify(array[i]));
		}
	return "[" + output + "]";
}

//function to stringify objects
var stringifyObject = function(object){
	switch(Object.prototype.toString.call(object)){
		case '[object Array]': return stringifyArray(object);
		case '[object Null]': return 'null';
		default: return stringifyJSON(object);	//recursive case
	}
}

//initial 'triage' stringifier, deals with straightforward expressions and 
//passes arrays and objects to other functions
//Eventually, I'll try and make this a catch-all function
var stringify = function(stringMe){ 
	switch(typeof stringMe){
		case 'string': return '"' + stringMe + '"';
		case 'object': return stringifyObject(stringMe); //special case for sneaky objects
		case 'number': return stringMe.toString();
		case 'boolean': return stringMe.toString();
		case 'function': return;
		case null: return 'null';
		default: return stringMe;
	}
}

var stringifyJSON = function (objIn, stringOut) {
if (Object.prototype.toString.call(objIn) === '[object Object]'){
  if (!stringOut){var stringOut = [];}
  for (key in objIn){
  	stringOut.push('"'+key+'"' + ":" + stringify(objIn[key]) );
  }
  return "{" + stringOut.toString() + "}";	
}
else return stringify(objIn);
};
