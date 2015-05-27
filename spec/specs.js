describe('pigLatin', function() {
  it("adds 'ay' to the end of words that start with vowels", function() {
    expect(pigLatin('end')).to.equal('enday');
  });
});
