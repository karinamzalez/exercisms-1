var Isogram = function(word) {
  this.word = word;
};

Isogram.prototype.isIsogram = function() {
  var word = this.word;
  var lettersArray = [];
  var isogram = true;
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    var lowercaseLetter = letter.toLowerCase();
    var parsedLetter = lowercaseLetter.replace(/-/g, "");
    if (parsedLetter !== "" && parsedLetter !== " ") {
      if (lettersArray.includes(parsedLetter)) {
        isogram = false;
      } else {
        lettersArray.push(parsedLetter);
      }
    }
  }
  return isogram;
};

module.exports = Isogram;
