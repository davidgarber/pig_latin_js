describe('convertWord', function() {
  it("adds 'ay' to the end of words that start with vowels", function() {
    expect(convertWord('end')).to.equal('enday');
  });
});
