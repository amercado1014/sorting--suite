function isIncreasing(array) {
  for (var i = 0; i < array.length; i++) {
      if (array[i + 1] >= array[i]) {
          return true;
      }
  }
  return false;
}

module.exports = isIncreasing;