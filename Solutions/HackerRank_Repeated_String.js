function repeatedString(s, n) {
    // Write your code here
  let stringSplitted = s.split('');
  let countInInitialString = 0;
  if (s.match(/[a]/g)) {
    countInInitialString = s.match(/[a]/g).length;
  } else {
    return 0;
  }
  
  if ( n % s.length === 0) {
    return countInInitialString * (n/s.length);
  };
  
  if ( n < s.length) {
    let portion = s.slice(0,n+1);
    return portion.match(/[a]/g).length;
  };
  
  let result = countInInitialString * Math.floor(n/s.length);
  let arrayToTest = [];
  let position = 0;
  for (let i = 0; i < (n % s.length); i++) {
    
    arrayToTest.push(stringSplitted[position]);
    if (position < stringSplitted.length - 1) {
      position++;
    } else {
      position = 0;
    }
  }
  
  console.log(arrayToTest)
  const regex = /[a]/g;
  const found = arrayToTest.join('').match(regex);
  if (found) {
    return found.length + result;
  }
  return result;
};

console.log(repeatedString('d', 590826798023));
