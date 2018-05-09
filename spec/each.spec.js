describe('each', function() {
  //inputs: 1 array or object (list), 1 function (value, key, list)
  //outputs: array or object matching the input datatype
  //constaints: cannot pass in objects with a numeric length property
  //assumptions: iteratee is always a function, the list will always be an array or object
  it('should exist', function() {
    expect(_.each).to.exist;
  });
  //if list is empty return empty list
  it('should return an empty array if given array is empty', function() {
    expect(_.each([])).to.deep.equal([]);
  });
  it('should return an empty object if given an empty object', function() {
    expect(_.each({})).to.deep.equal({});
  });
  //if passed a primitive datatype return that value
  it('should return number if passed in number', function() {
    expect(_.each(23)).to.equal(23);
  });
  it('should return the original list regardless of iteratee function', function() {
    let doubleNum = function(number) { return number * 2; };
    expect(_.each([1, 2, 3, 4], doubleNum)).to.deep.equal([1, 2, 3, 4]);
  });
});