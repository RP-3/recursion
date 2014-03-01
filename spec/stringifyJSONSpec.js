// test cases are described in fixtures.js
describe("stringifyJSON", function(){
  it("should match the result of calling JSON.stringify", function(){

//Suspected error in line 6. I've replaced it with line 7. 
//  arrayWithValidElements.forEach(function(obj){
    stringifiableValues.forEach(function(obj){
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).toEqual(expected);
    });

//  Similar suspected error. 
//  objectWithInvalidAttributes.forEach(function(obj){
    nonStringifiableValues.forEach(function(obj){
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).toEqual(expected);
    });

  });
});
