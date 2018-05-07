describe('reduce', function() {
  it('should exist', function() {
    expect(_.reduce).to.exist;
    //input: array or object, predicate function, optional memo parameter of various data type
    //output: a single value (array, object, number, or string)
    //if passed [1, 2, 3, 4, 5], sumNumbers, 5 --> should return 19
    //if passed [1, 2, 3, 4, 5], sumNumbers, no memo --> should return 15
    //if passed [1, 2, 'chicken', 4, 5], sumNumbers, no memo --> should return NaN? or maybe '3chicken45'?*
    //if passed {'age': 10, 'heightInCm': 150, 'weight': 100, 'shoeSize': 7}, sumNumbers, no memo --> should return 267?*
  });
});