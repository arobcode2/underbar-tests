describe('pluck', function() {
  //input: array or object (collection), string or number (property)
  //output: array
  //asumption: key name is a string or number
  it('should exist', function() {
    expect(_.pluck).to.exist;
  });
  //if passed [{'name': 'Bob', 'age': 20}, {'name': Alice, 'age': 23}, {'name': Greg, 'height': '5'10"'}], 'age', should return [20, 23]
  it('should return an array of all values corresponding to given key', function() {
    expect(_.pluck([{'name': 'Bob', 'age': 20}, {'name': 'Alice', 'age': 23}, {'name': 'Greg', 'age': 40}], 'age')).to.deep.equal([20, 23, 40]);
  });
  //if passed a property name that does not exist in collection, return undefined for each occurrence
  it('should return undefined whenever the given key does not exist in element', function() {
    expect(_.pluck([{'name': 'Bob', 'age': 20}, {'name': 'Alice', 'hairColor': 'red'}, {'name': 'Greg', 'age': 40}], 'age')).to.deep.equal([20, undefined, 40]);
  });
  //if no value is stored in passed in key, return undefined
  it('should return an array of undefineds if key is not found in any element', function() {
    expect(_.pluck([{'name': 'Bob', 'age': 20}, {'name': 'Alice', 'hairColor': 'red'}, {'name': 'Greg', 'age': 40}], 'height')).to.deep.equal([undefined, undefined, undefined]);
  });
  //output.length should be equal to input.length
  it('should return an array of equal length to the input array', function() {
    expect(_.pluck([{'name': 'Bob', 'age': 20}, {'name': 'Alice', 'age': 23}, {'name': 'Greg', 'age': 40}], 'age')).to.have.lengthOf(3);
  });
  //should be able to access hidden length property of array
  it('should be able to access hidden length property of array', function() {
    expect(_.pluck([[1], [2, 3], [4, 5, 6]], 'length')).to.deep.equal([1, 2, 3]);
  });
});