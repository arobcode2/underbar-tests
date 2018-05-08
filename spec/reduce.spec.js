describe('reduce', function() {
  //input: array or object, predicate function, optional memo parameter of various data type
  //output: a single value (array, object, number, or string)
  it('should exist', function() {
    expect(_.reduce).to.exist;
  });
  //if passed [1, 2, 3, 4, 5], sumNumbers, no memo --> should return 15
  it('should return a single value', function() {
  	let sumNumbers = function(sum, num) {
  		return sum += num;
  	}
  	expect(_.reduce([1, 2, 3, 4, 5], sumNumbers, 0)).to.equal(15);
  });
  //if passed [1, 2, 3, 4, 5], sumNumbers, 5 --> should return 19
  it('if given, memo should determine the starting value of accumulator', function() {
   	let sumNumbers = function(sum, num) {
  		return sum += num;
  	}
  	expect(_.reduce([1, 2, 3, 4, 5], sumNumbers, 5)).to.equal(20); 	
  });
  //if passed [1, 2, 'chicken', 4, 5], sumNumbers, no memo --> should return '3chicken45'
  it('should start concatenating as soon as a string is reached', function() {
   	let sumNumbers = function(sum, num) {
  		return sum += num;
  	}
  	expect(_.reduce([1, 2, 'chicken', 4, 5], sumNumbers)).to.equal('3chicken45'); 	 	
  });
  //if passed {'age': 10, 'heightInCm': 150, 'weight': 100, 'shoeSize': 7}, sumNumbers, no memo --> should return 267?*
  it('should reduce all key values of object down to a single value', function() {
   	let sumNumbers = function(sum, num) {
  		return sum += num;
  	}
  	expect(_.reduce({'age': 10, 'heightInCm': 150, 'weight': 100, 'shoeSize': 7}, sumNumbers)).to.equal(267); 	
  });
});