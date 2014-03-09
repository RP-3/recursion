// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

 	var results = [];	

  	var fetchElement = function(node){
  		if(node.className === className){
  			results.push(node.outerHTML);
  		}
  	}

  	var traverseChildren = function(node){
		var childArray = node.childNodes;
		//iterate through all children
		for (var i=0; i<childArray.length; i++){
			//if children, recurse
			if(childArray[i].childNodes.length > 0){ 
				traverseChildren(childArray[i]);
			}
			//if match, fetch element
			fetchElement(childArray[i]); 
		}
	}

	traverseChildren(document.body);

	return results;

};
