function hourglassSum(arr) {
  // Write your code here
  let a = 0;
  let arrayOfSums = Array(16).fill(0);

  for (let i = 0; i < 4; i++) {
    arrayOfSums[a+0] += arr[i+0][0] + arr[i+0][1] + arr[i+0][2]; 
    arrayOfSums[a+1] += arr[i+0][1] + arr[i+0][2] + arr[i+0][3]; 
    arrayOfSums[a+2] += arr[i+0][2] + arr[i+0][3] + arr[i+0][4]; 
    arrayOfSums[a+3] += arr[i+0][3] + arr[i+0][4] + arr[i+0][5]; 

    arrayOfSums[a+0] += arr[i+1][1]; 
    arrayOfSums[a+1] += arr[i+1][2]; 
    arrayOfSums[a+2] += arr[i+1][3]; 
    arrayOfSums[a+3] += arr[i+1][4]; 

    arrayOfSums[a+0] += arr[i+2][0] + arr[i+2][1] + arr[i+2][2]; 
    arrayOfSums[a+1] += arr[i+2][1] + arr[i+2][2] + arr[i+2][3]; 
    arrayOfSums[a+2] += arr[i+2][2] + arr[i+2][3] + arr[i+2][4]; 
    arrayOfSums[a+3] += arr[i+2][3] + arr[i+2][4] + arr[i+2][5]; 
    a+= 4;
  };
    
  return Math.max(...arrayOfSums);

};

//Test::
let arrayTest = [
  [1,1,1,0,0,0],
  [0,1,0,0,0,0],
  [1,1,1,0,0,0],
  [0,0,2,4,4,0],
  [0,0,0,2,0,0],
  [0,0,1,2,4,0]
];
console.log(hourglassSum(arrayTest))















