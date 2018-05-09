describe('reject', function() {
  //input: array or object and a function (predicate)
  //output: array or object
  it('should exist', function() {
    expect(_.reject).to.exist;
  });
  //should return array or object of values that do not pass the predicate function test from original input array/object
  it('should return an array of all values in array that do not pass predicate test', function() {
  	let isEven = function(num) {return num % 2 === 0;};
  	expect(_.reject([1, 2, 3, 4, 5, 6, 7], isEven)).to.deep.equal([1, 3, 5, 7]);
  });
  it('should return an array of all values in object that do not pass the predicate test', function() {
  	let isEven = function(num) {return num % 2 === 0;};
  	expect(_.reject({'a': 1, 'b': 2, 'c': 3}, isEven)).to.deep.equal([1, 3]);		  	
  });
  //should return an empty array/object if all values pass predicate test
  it('should return an empty array if all values in array pass predicate test', function() {
  	let isEven = function(num) {return num % 2 === 0;};
  	expect(_.reject([2, 4, 6, 8], isEven)).to.deep.equal([]);
  });
  //if input array/object is empty, return empty array/object
  it('should return an empty array if input array is empty', function() {
  	let isEven = function(num) {return num % 2 === 0;};
  	expect(_.reject([], isEven)).to.deep.equal([]);
  });
  //it should handle mixed arrays properly
  it('should resolve datatypes that can not be mutated by predicate function', function() {
  	let isEven = function(num) {return num % 2 === 0;};
  	expect(_.reject([1, 2, 3, 4, 'one', 'two', true], isEven)).to.deep.equal([1, 3, 'one', 'two', true]);
  });
});