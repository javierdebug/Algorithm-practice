/**
 * The goal of this exercise is to implement the WordWrapper.js class that splits up strings by spaces
 * keeping words unbroken.
 *
 * For example, the following text
 *
 *      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 *
 * wrapped in 30-character lines, would look like
 *
 *      Lorem ipsum dolor sit amet,
 *      Consectetur adipiscing elit,
 *      Sed do eiusmod tempor
 *      Incididunt ut labore et
 *      Dolore magna aliqua.
 *
 * The implementing class WordWrapper.js must pass all tests below unchanged.
 *
 * The test suite is not complete from a production perspective, so there is no need to implement
 * other possible boundary cases, only passing the proposed tests.
 *
 * More important than finding a working solution is to implement a solution that follows 
 * best practices and it is clean and legible.
 */
class WordWrapper{

  static wrap(source, lineWidth) {
    //console.log(lineWidth);
    //let sourceSplittedByChar = source.split('');
    //console.log(sourceSplittedByChar.length)
    let sourceSplittedByWord = source.split(/\s/g);
    let currentLine = [];
    let finalOutput = [];
    //console.log(sourceSplittedByWord);

    for (let i=0; i < sourceSplittedByWord.length; i++) {

      if (currentLine.length === 0) {
        let value = sourceSplittedByWord[i][0].toUpperCase() + sourceSplittedByWord[i].substring(1);
        currentLine.push(value);
      } else {
        currentLine.push(sourceSplittedByWord[i]);
      }

      if (currentLine.join(' ').length >= lineWidth) {
        currentLine.pop();
        finalOutput.push(currentLine.join(' '));
        currentLine = [];
        i--;
      }

      if (i === sourceSplittedByWord.length - 1) {
        finalOutput.push(currentLine.join(' '));
      }
    }

    return finalOutput.join('\n').trim();
  }  
}

mocha.setup("bdd");
chai.should();
describe('Word Wrapper tests:', function() {

  it('Text shorter than line width', function() {
    const lineWidth = 6;
    const original = 'word';
    const expected = 'Word';
    expected.should.equal(WordWrapper.wrap(original, lineWidth));
  });

  it('Two words in two lines', function() {
    const lineWidth = 6;
    const original = 'word word';
    const expected = 'Word\nWord';
    expected.should.equal(WordWrapper.wrap(original, lineWidth));
  });

  it('Three words in two lines', function() {
    const lineWidth = 10;
    const original = 'word word word';
    const expected = 'Word word\nWord';
    expected.should.equal(WordWrapper.wrap(original, lineWidth));
  });

  it('Long line', function() {
    const lineWidth = 30;
    const original = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const expected = "Lorem ipsum dolor sit amet,\nConsectetur adipiscing elit,\nSed do eiusmod tempor\nIncididunt ut labore et\nDolore magna aliqua.";
    expected.should.equal(WordWrapper.wrap(original, lineWidth));
  });
});

mocha.run();

//Live Fiddle: https://jsfiddle.net/r8mnk97h/
