describe('pluck', function() {
  it('should exist', function() {
    expect(_.pluck).to.exist;
    //input: array or object (collection), string or number (property)
    //output: array
    //assumption: key name is a string or number
    //if passed [{'name': 'Bob', 'age': 20}, {'name': Alice, 'age': 23}, {'name': Greg, 'height': '5'10"'}], 'age', should return [20, 23]
    //if passed a property name that does not exist in collection, return empty array
    //if no value is stored in passed in key, return undefined
    //if passed {{'name': 'Andrew', 'age': 23}, {'name': Eric, 'age': 23}, {'name': Patrick, 'gender': male}}, 'age', should return [23, 23]
    //output.length should be <= input.length
  });
});