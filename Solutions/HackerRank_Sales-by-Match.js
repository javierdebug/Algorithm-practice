function sockMerchant(n, ar) {

  let pairs = {};
  ar.forEach(el => {
    if (pairs[el] !== undefined) {
      pairs[el]++
    } else{
      pairs[el] = 1;
    };
  });
  
  let numberOfPairs = 0;
  
  Object.keys(pairs).forEach(key => {
    numberOfPairs += Math.floor(pairs[key] / 2); 
  })

  return numberOfPairs;
}
