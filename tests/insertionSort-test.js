const { assert } = require('chai');
const insertionSort = require('../lib/insertionSort');
const isIncreasing = require('../lib/isIncreasing');

describe('insertionSort', function() {

  it('should sort a small array', function() {
    const numbersArray = [5, 4, 3, 2, 1];

    assert.deepEqual(insertionSort(numbersArray), [1, 2, 3, 4, 5]);
  });

  it('should sort an array of letters', function() {
    const lettersArray = ['d', 'a', 'c', 'b', 'e'];

    assert.deepEqual(insertionSort(lettersArray), ['a', 'b', 'c', 'd', 'e']);
  });

  it('should sort an array of positive and negative numnbers', function() {
    const numbersArray = [5, -1, 3, 0, -2];

    assert.deepEqual(insertionSort(numbersArray), [-2, -1, 0, 3, 5]);
  });

  it('should sort random arrays', function() {
    const randomArray = []

    for(let i = 0; i < 40; i++ ) {
      randomArray.push(Math.floor(Math.random() * (100 - 1)) + 1);
    }

    const sortedArray = insertionSort(randomArray);

    assert.equal(isIncreasing(sortedArray), true);
  });

  it('should sort large arrays of random numbers', function() {

    const randomArray = [];
    const min = 1;
    const max = 35000;

    for(let i = 0; i <  max; i++) {
      randomArray.push(Math.floor(Math.random() * (max - min)) + min);
    }

    const sortedArray =insertionSort(randomArray);

    assert.equal(isIncreasing(sortedArray), true);
  });
});