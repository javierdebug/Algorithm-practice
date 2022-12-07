
fs = require('fs');
fs.readFile('/home/javierd/Documents/JV/Code/Dev/Algorithms-NodeConsole/AoC/Day-6/data.txt', 'utf8', function (err,obtainedData) {
  if (err) {
    return console.log(err);
  }

  let data = obtainedData;
  let data2 = data.split('')

  let answer1 = 0;
  let answer2 = 0;

  //Part 1:
  let values = [];
  let values2 = [];
  data2.forEach((val, idx) => {

    if (values.length < 4) {
      values.push(val);
    } else {
      values.shift()
      values.push(val);
    }

    if (values.length === 4) {
      let test = new Set();
      values.forEach((item) => test.add(item));

      if (test.size === 4 && answer1 === 0) {
        answer1 = idx+1;
      // console.log(values)
      }
    }

  //Part 2:
    if (values2.length < 14) {
      values2.push(val);
    } else {
      values2.shift()
      values2.push(val);
    }

    if (values2.length === 14) {
      let test = new Set();
      values2.forEach((item) => test.add(item));

      if (test.size === 14 && answer2 === 0) {
        answer2 = idx+1;
      // console.log(values2)
      }
    }
});

  console.log('part1 :', answer1)
  console.log('part2 :', answer2)

});
