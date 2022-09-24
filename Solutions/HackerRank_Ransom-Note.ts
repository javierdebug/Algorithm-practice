function checkMagazine(magazine: string[], note: string[]): string {
  // Write your code here
  for (let i=0; i < note.length; i++) {
    if (magazine.indexOf(note[i]) < 0) {
      console.log('No');
      return;
    }
    magazine.splice(magazine.indexOf(note[i]),1);
  }
  console.log('Yes');
  return;
}

//Test:
let a = ['ive','got','a','lovely','bunch','of','coconuts'];
let b = ['ive','got','some','coconuts'];
console.log(checkMagazine(a,b));
