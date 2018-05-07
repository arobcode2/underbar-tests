describe('each', function() {
  it('should exist', function() {
    expect(_.each).to.exist;
    //inputs: 1 array or object (list), 1 function (value, key, list)
    //outputs: array or object matching the input datatype
    //constaints: cannot pass in objects with a numeric length property
    //regardless if a context is passed in or not, the function returns the list
    //if context object is passed in, its length should equal the length of the list passed in
    //if there is no iteratee, return the list
    //if context is passed in but is not an object, function should return the list but context should be undefined*?
    //typeof iteratee should always be a function- if iteratee is not a function, the each func would return undefined
    //if the iteratee is passed improper datatype from list, it should not affect the return list
    //if list is empty return empty list
    //if list is undefined return undefined
    //check for the typeof list and if list is not an array or object, return undefined
  });
});