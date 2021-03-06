describe('findIndex', function() {
  //input: array, predicate function
  //output: number (index), or -1 if not found
  it('should exist', function() {
    expect(_.findIndex).to.exist;
  });
  //should return -1 if no items in array pass predicate test
  it('should return -1 if no items pass predicate test', function() {
    let isGreaterThanTen = function(num) {return num > 10;};
    expect(_.findIndex([1, 2, 3, 4, 5, 6], isGreaterThanTen)).to.equal(-1);
  });
  //should return index of first item that passes predicate test
  it('should return index of first value that passes predicate test', function() {
    let isGreaterThanTen = function(num) {return num > 10;};
    expect(_.findIndex([8, 9, 10, 11, 12, 13], isGreaterThanTen)).to.equal(3);
  });
  //if passed a mixed array, predicate function should only handle those items with proper data type
  it('should return index of first value that passes predicate test', function() {
    let isGreaterThanTen = function(num) {return num > 10;};
    expect(_.findIndex([8, 9, 'apple', false, 11, 15], isGreaterThanTen)).to.equal(4);
  });
});