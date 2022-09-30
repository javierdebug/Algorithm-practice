/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */

export class Node {
  value : number;
  left : number;
  right : number;

  constructor(value : number, left : number, right : number) {
    this.value = value;
    this.left = left;
    this.right = right;
  };
}

const numsSameConsecDiff = function(n : number, k : number) {
  let results : string[] = [];
  for (let i=1; i <= 9; i++) {
    let values : number[] = [];
    resolveWithNodes(n,k,i,results,values);
  };

  return results;
};

function resolveWithNodes(n : number,k: number,root:number,results:string[],values:number[]) {

  if (root < 0 || root > 9) return;

  let node = new Node(root,root - k,root + k)
  values.push(node.value);

  if (values.length >= n) {
    results.push(values.join(''))
    return
  }

  if (node.left !== null) {
    resolveWithNodes(n!, k!, node.left!, results, values.slice());
  }

  if (node.right !== null) {
    resolveWithNodes(n!, k!, node.right!, results, [...values]);
  }

}

//Some tests:
// console.log(numsSameConsecDiff(2,9));
console.log(numsSameConsecDiff(3,7)); //[181,292,707,818,929]
// console.log(numsSameConsecDiff(5,2));
// console.log(numsSameConsecDiff(90,9));
// console.log(numsSameConsecDiff(3,1)); //[101,121,123,210,212,232,234,321,323,343,345,432,434,454,456,543,545,565,567,654,656,676,678,765,767,787,789,876,878,898,987,989]
// console.log(numsSameConsecDiff(4,2)); 
