describe('identity', function() {
  it('should exist', function() {
    expect(_.identity).to.exist;
    //identity should accept a function which accepts a value
    //inputs:The value passed in (any datatype)
    //outputs:The value passed in (any datatype)
    //assmuptions: if nothing is passed in it should return undefined
    //checking to see if the typeof the output is the same as the typeof the input- check if outputs amd inputs are arrays, objects, etc.
    //check if an expression is passed in- it should evaluate the expression as the output
    //arrays and objects should be converted into strings in order to test if they are equal
  });
});