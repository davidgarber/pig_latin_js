describe('convertWord', function() {
  it("adds 'ay' to the end of words that start with vowels", function() {
    expect(convertWord('end')).to.equal('enday');
  });

  it("moves the first consecutive consonants to the end and adds 'ay' for words beginning with a consonant", function() {
    expect(convertWord('school')).to.equal('oolschay');
  });

  it("treats 'y' as a consonant", function() {
    expect(convertWord('yay')).to.equal('ayyay');
  });

  it("treats 'qu' as a consonant block", function() {
    expect(convertWord('squelch')).to.equal('elchsquay');
  });
});

describe('isVowel', function() {
  it("returns true if character is a vowel", function() {
    expect(isVowel('a')).to.equal(true);
  });
  it("returns false if character is not a vowel", function() {
    expect(isVowel('b')).to.equal(false);
  });
});
