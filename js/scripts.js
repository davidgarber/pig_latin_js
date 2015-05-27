var convertWord = function(word) {
  word = word.toLowerCase();

  var endSliceIndex = 0;
  for(var i = 0; i < word.length; i++) {
    var char = word[i];

    if (!isVowel(char) ||
       (word[i - 1] == "q" && char == "u")) {
      endSliceIndex++;
    }
    else if (isVowel(char)) {
      break;
    }
  }

  var slicedPortion = word.slice(0, endSliceIndex);

  word = word.replace(slicedPortion, "") + (slicedPortion) + "ay";

  return word;
};

var isVowel = function(char) {
  return "aeiou".indexOf(char) >= 0;
};
