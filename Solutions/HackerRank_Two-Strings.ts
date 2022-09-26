function twoStrings(s1: string, s2: string): string {
    // Write your code here
    let s2Splitted = s2.split('');
    for (const char of s2Splitted) {
        if (s1.includes(char)) return 'YES';   
    }
    return 'NO'
};

//Test:
let a = 'hello';
let b = 'world';
console.log(twoStrings(a,b));
