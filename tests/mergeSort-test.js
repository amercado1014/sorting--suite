const { assert } = require('chai');
const mergeSort = require('../lib/mergeSort');
const isIncreasing = require('../lib/isIncreasing');

describe('mergeSort', function() {

  it('should sort a small array', function() {
    const numbersArray = [5, 4, 3, 2, 1];

    assert.deepEqual(mergeSort(numbersArray), [1, 2, 3, 4, 5]);
  });

  it('should sort an array of letters', function() {
    const lettersArray = ['z', 'a', 'c', 'b', 'e'];

    assert.deepEqual(mergeSort(lettersArray), ['a', 'b', 'c', 'e', 'z']);
  });

  it('should sort an array of positive and negative numnbers', function() {
    const numbersArray = [5, -1, 3, 0, -2];

    assert.deepEqual(mergeSort(numbersArray), [-2, -1, 0, 3, 5]);
  });

  it('should sort random arrays', function() {
    const randomArray = []

    for(let i = 0; i < 40; i++ ) {
      randomArray.push(Math.floor(Math.random() * (100 - 1)) + 1);
    }

    const sortedArray = mergeSort(randomArray);

    assert.equal(isIncreasing(sortedArray), true);
  });

  it('should sort large arrays of random numbers', function() {

    const randomArray = [];
    const min = 1;
    const max = 1500000;

    for(let i = 0; i <  max; i++) {
      randomArray.push(Math.floor(Math.random() * (max - min)) + min);
    }

    const sortedArray = mergeSort(randomArray);

    assert.equal(isIncreasing(sortedArray), true);
  });
});