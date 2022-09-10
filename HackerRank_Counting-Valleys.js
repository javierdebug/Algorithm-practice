function countingValleys(steps, path) {

  const pathArray = path.split('');
  
  let numberOfValleys = 0;
  let currentPosition = 0;
  let previousPosition = 0;
  
  pathArray.forEach(step => {
    if (step === 'U') {
      previousPosition = currentPosition;
      currentPosition++;
    }
    if (step === 'D') {
      previousPosition = currentPosition;
      currentPosition--;
    }
    
    if (currentPosition === -1 && previousPosition === 0) numberOfValleys++
  });
  
  return numberOfValleys;
}

