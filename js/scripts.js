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

  console.log(word);
  return word;
};

var isVowel = function(char) {
  return "aeiou".indexOf(char) >= 0;
};

var convertSentence = function(sentence) {
  var words = sentence.split(" ");
  var convertedWords = [];
  words.forEach(function(word){
    convertedWords.push(convertWord(word));
  });
  return convertedWords.join([" "]);
};

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var targetContent = $("input#word").val();
    var result = convertSentence(targetContent);
    $("#result-wrapper").show();
    $("#result").text(result);
    event.preventDefault();
  });
});
