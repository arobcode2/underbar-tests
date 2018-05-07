describe('reject', function() {
  it('should exist', function() {
    expect(_.reject).to.exist;
    //input: array or object and a function (predicate)
    //output: array or object
    //should return array or object of values that do not pass the predicate function test from original input array/object
    //should return an empty array/object if all values pass predicate test
    //if input array/object is empty, return empty array/object
  });
});