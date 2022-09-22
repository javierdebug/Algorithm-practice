function rotLeft(a: number[], d: number): number[] {
  // Write your code here
  // if (a.length === 1) return a;
  
  for (let i = 0; i < d; i++) {
    let current = a.shift();
    if (current) {
      a.push(current);
    }
  }
  
  return a
};

//Test:
let a = [1,2,3,4,5];
let d = 4;
console.log(rotLeft(a,d));
