const isValid = (s) => {
  let strSplitted = s.split('');
  if (strSplitted.length % 2 !== 0) return false;

  let parenthesesData = {
    b: 0,
    p: 0,
    c: 0
  };
  let current = 'closed';
  let currentType = [];

  for (let i = 0; i < strSplitted.length; i++) {
    
    if (strSplitted[i] === '[') {
      parenthesesData.b++;
      current = 'bracket';
      currentType.push(current);
    }
    if (strSplitted[i] === '(') {
      parenthesesData.p++;
      current = 'paren';
      currentType.push(current);
    }
    if (strSplitted[i] === '{') {
      parenthesesData.c++;
      current = 'curly';
      currentType.push(current);
    };
    if (strSplitted[i] === ']') {
      if ( currentType[currentType.length - 1] !== 'bracket') return false;
      parenthesesData.b--;
      currentType.pop();
    };
    if (strSplitted[i] === ')') {
      if ( currentType[currentType.length - 1] !== 'paren') return false;
      parenthesesData.p--;
      currentType.pop();
    };
    if (strSplitted[i] === '}') {
      if ( currentType[currentType.length - 1] !== 'curly') return false;
      parenthesesData.c--;
      currentType.pop();
    };
  }; 

  if (parenthesesData.b !== 0 || parenthesesData.p !== 0 || parenthesesData.c !== 0) return false;
  return true;
};

//Some tests:
console.log(isValid('[[[()]]{}}'));
console.log(isValid('()'));
console.log(isValid('([)]'));
console.log(isValid('()([]){}[()]'));
console.log(isValid("[([]])"));
console.log(isValid('(('));
