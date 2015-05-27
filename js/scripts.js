var convertWord = function(word) {
  word = word.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u"];

  if (vowels.indexOf(word.charAt(0))) {
    word = word + "ay";
  }
  return word;
};
