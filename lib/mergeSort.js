function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let middleIndex = Math.floor(array.length / 2);
  let leftSide = array.slice(0, middleIndex);
  let rightSide = array.slice(middleIndex);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(leftSide, rightSide) {
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < leftSide.length && rightIndex < rightSide.length) {
    if (leftSide[leftIndex] < rightSide[rightIndex]) {
      results.push(leftSide[leftIndex]);
      leftIndex++;
    } else {
      results.push(rightSide[rightIndex]);
      rightIndex++;
    }
  }
  return results.concat(leftSide.slice(leftIndex)).concat(rightSide.slice(rightIndex));
}

module.exports = mergeSort;