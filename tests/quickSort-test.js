const { assert } = require('chai');
const quickSort = require('../lib/quickSort');
const isIncreasing = require('../lib/isIncreasing');

describe('quickSort', function() {

  it('should sort a small array', function() {
    const numbersArray = [5, 4, 3, 2, 1];

    assert.deepEqual(quickSort(numbersArray), [1, 2, 3, 4, 5]);
  });

  it('should sort an array of letters', function() {
    const lettersArray = ['d', 'a', 'c', 'b', 'e'];

    assert.deepEqual(quickSort(lettersArray), ['a', 'b', 'c', 'd', 'e']);
  });

  it('should sort an array of positive and negative numnbers', function() {
    const numbersArray = [5, -1, 3, 0, -2];

    assert.deepEqual(quickSort(numbersArray), [-2, -1, 0, 3, 5]);
  });

  it('should sort random arrays', function() {
    const randomArray = []

    for(let i = 0; i < 40; i++ ) {
      randomArray.push(Math.floor(Math.random() * (100 - 1)) + 1);
    }

    const sortedArray = quickSort(randomArray);

    assert.equal(isIncreasing(sortedArray), true);
  });

  it('should sort large arrays of random numbers', function() {

    const randomArray = [];
    const min = 1;
    const max = 2100000;

    for(let i = 0; i <  max; i++) {
      randomArray.push(Math.floor(Math.random() * (max - min)) + min);
    }

    const sortedArray = quickSort(randomArray);

    assert.equal(isIncreasing(sortedArray), true);
  });
});