// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

 	var results = [];	

 	//adds to output if finds matching class
  	var fetchElement = function(node){ 
  		var classArray = node.className.split(" ");
  		for(j=0; j<classArray.length; j++){
  			if(classArray[j] === className){
  				results.push(node);
  				break;
  			}
  		}
  	}

  	var traverseChildren = function(node){
		var childArray = node.children;
		//iterate through all children
		for (var i=0; i<childArray.length; i++){
			//if grandchildren present, recurse
			if(childArray[i].children.length > 0){ 
				traverseChildren(childArray[i]);
			}
			//if a match is found, add the element to results
			fetchElement(childArray[i]); 
		}
	}

	traverseChildren(document.body);

	return results;
};
