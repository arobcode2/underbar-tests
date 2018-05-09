describe('findIndex', function() {
  let isGreaterThanTen = function(num) {return num > 10;};

  it('should exist', function() {
    expect(_.findIndex).to.exist;
  });
  it('should return -1 if no items pass predicate test', function() {
    expect(_.findIndex([1, 2, 3, 4, 5, 6], isGreaterThanTen)).to.equal(-1);
  });
  it('should return index of first value that passes predicate test', function() {
    expect(_.findIndex([8, 9, 10, 11, 12, 13], isGreaterThanTen)).to.equal(3);
  });
  it('should return index of first value that passes predicate test', function() {
    let doubleNum = function(num) {return num * 2;};
    expect(_.findIndex([8, [9, 10], 'apple', false, 11, doubleNum(15)], isGreaterThanTen)).to.equal(4);
  });
});