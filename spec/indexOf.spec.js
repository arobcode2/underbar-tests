describe('indexOf', function() {
  it('should exist', function() {
    expect(_.indexOf).to.exist;
    //inputs: 1 array, 1 value (any datatype in the array), optional: boolean value or a number
    //outputs: 1 number
    //assumptions: assume isSorted will always be a boolean or a number, should be able to handle all datatypes- if value is a number, string, etc. it should search the array regardless
    //if nothing is passed in for the third argument, function should return index of 2nd argument passed in to function
    //if value appears more than once in the array return 1st index
    //if the value doesn't exist in array, should return -1
    //check if first argument passed into function is an array
    //if isSorted argument is given as a number, the return value should always be greater than isSorted
    //if isSorted is a negative number, it offsets from the end of the array
    //if the third argument is larger than the length of the array passed in, the function would return undefined
    
  });
});