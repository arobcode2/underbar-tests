describe('last', function() {
  //inputs: 1 array and a number
  //outputs: 1 array or 1 value of datatype depending on number of arguments passed in
  it('should exist', function() {
    expect(_.last).to.exist;
  });
    //if just an array is passed in then return last element of array.
  it('should return last element of array if only an array is passed in', function() {
    expect(_.last(['apple', [1, 2, 3], 56, true])).to.equal(true);
  });
    //The length of output array should equal n (number passed in) if a number is passed in
  it('should return an array of length equal to n if given', function() {
    expect(_.last(['apple', [1, 2, 3], 56, true], 3).length).to.equal(3);
  });
    //if the passed in array is empty, whether of not n is passed in, it returns empty array
  it('should return an empty array if given an empty array', function() {
    expect(_.last([], 2)).to.deep.equal([]);
  });
    //if n is not a positive integer if passed in, the function should return empty array
  it('should return empty array if n is non-positive', function() {
    expect(_.last([1, 2, 3, 4, 5], -2)).to.deep.equal([]);
  });
    //if n is larger than the length of the array, return whole array
  it('should return the entire array if length is less than n', function() {
    expect(_.last([1, 2, 3, 4, 5], 6)).to.deep.equal([1, 2, 3, 4, 5]);
  });
    //if a mixed array and n (number) is passed in return the last n elements in array
  it('should return last n elements of array if an array and n (number) are passed in', function() {
    expect(_.last(['apple', [1, 2, 3], 56, true], 3)).to.deep.equal([[1, 2, 3], 56, true]);
  });
});