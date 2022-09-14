function equalizeArray(arr) {
  // Write your code here
  let countObj = {};

  arr.forEach(key => {
    countObj[key] = ++countObj[key] || 1;
  });

  let minimumDeletions = 0;
  let currentMaxRepetitions = 0;
  Object.keys(countObj).forEach(key => {

    if ( countObj[key] > currentMaxRepetitions) {
      minimumDeletions += currentMaxRepetitions;
      currentMaxRepetitions = countObj[key];
    } else {
      minimumDeletions += countObj[key];
    }
  });

  return minimumDeletions;
}
