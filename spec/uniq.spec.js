describe('uniq', function() {
  //input: array, optional: boolean test, optional: function
  //output: array with no duplicate values
  //assumptions: positive and negative numbers are unique
  it('should exist', function() {
    expect(_.uniq).to.exist;
  });
  //if passed [1, 2, 2, 3, 3, 4], should return [1, 2, 3, 4]
  it('should remove all duplicates from passed in array', function() {
    expect(_.uniq([1, 2, 2, 3, 3, 4])).to.deep.equal([1, 2, 3, 4]);
  });
  //if passed [0, 3, '3', true], should return [0, 3, '3', true]
  it('should treat different datatypes as unique values', function() {
    expect(_.uniq([0, 3, '3', true])).to.deep.equal([0, 3, '3', true]);
  });
  //if passed ([1, 2, 2, 3, 4, 5, 'str'], multiplyBy0, should return [1, 'str']
  it('should compute unique items based on iteratee transformation', function() {
    let multiplyBy0 = function(num) {return num * 0;};
    expect(_.uniq([1, 2, 2, 3, 4, 5, 'str'], multiplyBy0)).to.deep.equal([1, 'str']);
  });
  //if passed [-1, 1, -2, 2], should return [-1, 1, -2, 2]
  it('should treat positive and negative integers as unique numbers', function() {
    expect(_.uniq([-1, 1, -2, 2])).to.deep.equal([-1, 1, -2, 2]);
  });
});