var Words = function() {};

Words.prototype.count = function(string) {
  var parsedString = string.replace(/[-!&@$%^.:¿?¡]/g, '').replace(/[\n\t]/g, " ");
  var words = split(parsedString);
  var wordsHash = {};
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var lowercaseWord = word.toLowerCase();
    if (wordsHash[lowercaseWord] >= 1) {
      wordsHash[lowercaseWord] += 1;
    } else if (isQuote(lowercaseWord)) {
      var newWord = lowercaseWord.slice(1,-1);
      wordsHash[newWord] = 1;
    } else if (lowercaseWord.length !== 0 ) {
      wordsHash[lowercaseWord] = 1;
    }
  }
  return wordsHash;
};

function isQuote(string) {
  if (string.startsWith("'") && string.endsWith("'")) {
    return true;
  } else {
    return false;
  }
}

function split(string) {
  if (string.includes(',')) {
    return string.split(',');
  } else {
    return string.split(' ');
  }
}

module.exports = Words;
