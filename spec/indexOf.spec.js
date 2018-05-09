describe('indexOf', function() {
  //inputs: 1 array, 1 value (any datatype in the array), optional: boolean value or a number
  //outputs: 1 number
  //assumptions: assume isSorted will always be a boolean or a number, should be able to handle all datatypes- if value is a number, string, etc. it should search the array regardless, assume list passed in is an array
  it('should exist', function() {
    expect(_.indexOf).to.exist; 
  });
  //if nothing is passed in for the third argument, function should return index of 2nd argument passed in to function
  it('should return index of given value in given array', function() {
    expect(_.indexOf(['apple', 'banana', 'orange'], 'orange')).to.equal(2);
  });
  //if value appears more than once in the array return 1st index
  it('should return first occurance of given value', function() {
    expect(_.indexOf(['apple', 'banana', 'orange', 'banana'], 'banana')).to.equal(1);
  });
  //if the value doesn't exist in array, should return -1
  it('should return -1 if value does not exist in array', function() {
    expect(_.indexOf(['apple', 'banana', 'orange', 'banana'], 'grapes')).to.equal(-1);
  });
  //if isSorted argument is given as a number, the return value should always be greater than isSorted
  it('if array is sorted, should return a value greater than isSorted value', function() {
    expect(_.indexOf([1, 2, 3, 3, 3, 4, 5, 5], 3, 3)).to.equal(3);
  });
  //if isSorted is a negative number, it offsets from the end of the array
  it('should offset from the end of the array if given a negative number for isSorted', function() {
    expect(_.indexOf([1, 2, 3, 4, 4, 4, 5], 4, -2)).to.equal(5);
  });
  //if the third argument is larger than the length of the array passed in, the function would return -1
  it('should return -1 if isSorted is greater than length of array', function() {
    expect(_.indexOf([1, 2, 3, 4, 5], 4, 7)).to.equal(-1);
  });
  //if the value is not in the given array return -1
  it('should return -1 if value is not in array', function() {
    expect(_.indexOf([1, 2, 3, 4, 5], 7)).to.equal(-1);
  });
});