describe('findIndex', function() {
  it('should exist', function() {
    expect(_.findIndex).to.exist;
    //input: array, predicate function
    //output: number (index), or -1 if not found
    //typeof predicate should be a function
    //should return -1 if no items in array pass predicate test
    //should return index of first item that passes predicate test
    //if passed a mixed array, predicate function should only handle those items with proper data type
    //typeof passed in first arg should be an array
  });
});