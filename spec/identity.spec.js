describe('identity', function() {
  //inputs:The value passed in (any datatype)
  //outputs:The value passed in (any datatype)
  //assmuptions: if nothing is passed in it should return undefined  
  it('should exist', function() {
    expect(_.identity).to.exist;
  });
  //checking to see if the typeof the output is the same as the typeof the input- check if outputs amd inputs are arrays, objects, etc.
  it('should return the same datatype as input', function() {
    expect(typeof _.identity('a')).to.equal(typeof 'a');
  });
  //check if an expression is passed in- it should evaluate the expression as the output
  it('should evaluate expressions', function() {
    expect(_.identity(21 + 5)).to.equal(26);
  });
  //arrays and objects should be converted into strings in order to test if they are equal
  it('should compare contents of arrays', function() {
    expect(_.identity([[1, 2], 3, 4])).to.deep.equal([[1, 2], 3, 4]);
  });
  it('should compare contents of objects', function() {
    expect(_.identity({a: [1, 2, 3]})).to.deep.equal({a: [1, 2, 3]});
  });
});