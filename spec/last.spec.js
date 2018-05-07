describe('last', function() {
  it('should exist', function() {
    expect(_.last).to.exist;
    //inputs: 1 array and a number
    //outputs: 1 array or 1 value of datatype depending on number of arguments passed in
    //the passed in array can contain any datatypes... all numbers, all strings, all booleans, mixede arrays, nested arrays, etc.
    //if just an array is passed in then return last element of array.
    //The length of output array should equal n (number passed in) if a number is passed in
    //if the passed in array is empty, whether of not n is passed in, it returns undefined
    //if n is not a positive integer if passed in, the function should return undefined
    //if n is larger than the length of the array, return whole array
  });
});