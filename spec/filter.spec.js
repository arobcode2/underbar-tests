describe('filter', function() {
  //input: array or object and a function (predicate)
  //output: array or object
  it('should exist', function() {
    expect(_.filter).to.exist;
  });
  //should return array or object of values that pass the predicate function test from original input array/object
  it('should return an array of passed values from given array', function() {
  	let greaterThanOrEqualToSix = function(num) {return num >= 6;};
  	expect(_.filter([2, 4, 6, 8, 10], greaterThanOrEqualToSix)).to.deep.equal([6, 8, 10]);
  });
  it('should return an array of passed values from given object', function() {
  	let greaterThanOrEqualToSix = function(num) {return num >= 6;};
  	expect(_.filter({'apple': 2, 'banana': 4, 'orange': 6, 'peach': 8, 'cantaloupe': 10}, greaterThanOrEqualToSix)).to.deep.equal([6, 8, 10]);
  });
  //should return an empty array/object if no values pass predicate test
 	it('should return an empty array if no values pass from given array', function() {
  	let greaterThanOrEqualToSix = function(num) {return num >= 6;};
  	expect(_.filter([1, 2, 3, 4, 5], greaterThanOrEqualToSix)).to.deep.equal([]);
  });
  //if input array/object is empty, return empty array/object
  it('should return an empty array if passed an empty array', function() {
  	let greaterThanOrEqualToSix = function(num) {return num >= 6;};
  	expect(_.filter([], greaterThanOrEqualToSix)).to.deep.equal([]);
  });
});