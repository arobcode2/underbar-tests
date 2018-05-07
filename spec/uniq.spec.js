describe('uniq', function() {
  it('should exist', function() {
    expect(_.uniq).to.exist;
    //input: array, optional: boolean test, optional: function
    //output: array with no duplicate values
    //assumptions: positive and negative numbers are unique
    //if passed [1, 2, 2, 3, 3, 4], should return [1, 2, 3, 4]
    //if passed [0, 3, 'string', true], should return [0, 3, 'string', true]
    //if passed ([1, 2, 2, 3, 4, 5], isEven), should return [2, 4]
    //if passed [-1, 1, -2, 2], should return [-1, 1, -2, 2]
    //typeof isSorted, if passed in, should be boolean
  });
});