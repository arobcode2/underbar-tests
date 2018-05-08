describe('map', function() {
  //input: array or object and a predicate function
  //output: array or object
  it('should exist', function() {
    expect(_.map).to.exist;
  });
  it('should return an array of original array mutated by the iteratee function', function() {
  	let doubleStr = function(str) {return str + str;};
  	expect(_.map(['dog', 'cat', 'pig'], doubleStr)).to.deep.equal(['dogdog', 'catcat', 'pigpig']);
  });
  //length of output collection should equal input collection
  it('length of returned array should equal length of input array', function() {
  	let doubleStr = function(str) {return str + str;};
  	let array = ['dog', 'cat', 'pig'];
  	expect(_.map(array, doubleStr)).to.have.lengthOf(3);
  });
  //it should handle objects
  it('should return an array of object values mutated by the iteratee function', function() {
  	let divideBy2 = function(num) {return num / 2;};
  	expect(_.map({'a': 1, 'b': 2, 'c': 3}, divideBy2)).to.deep.equal([0.5, 1, 1.5]);
  });
  //it should handle mixed arrays
  it('should handle mixed arrays', function() {
  	let divideBy2 = function(num) {return num / 2;};
  	expect(_.map([1, 2, 'three', [4, 5], true], divideBy2)).to.deep.equal([0.5, 1, NaN, NaN, 0.5]);
  });
});