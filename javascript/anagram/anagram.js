var Anagram = function(word) {
  this.word = word;
};

Anagram.prototype.matches = function(potentialMatches) {
  var lettersHash =  wordToHash(this.word);
  var matches = [];
  for (var i = 0; i < potentialMatches.length; i++) {
    if (match(lettersHash, potentialMatches[i])) {
      matches.push(potentialMatches[i]);
    }
    lettersHash = wordToHash(this.word);
  }
  return matches;
};

function wordToHash(word) {
  var lettersHash = {};
  for (var i = 0; i < word.length; i++) {
    lettersHash[word[i]] = false;
  }
  return lettersHash;
}

function match(lettersHash, potentialMatch) {
  var match = true;
  for (var i = 0; i < potentialMatch.length; i++) {
    var letter = potentialMatch[i];
    if (letter in lettersHash) {
      lettersHash[letter] = true;
    } else {
      match = false;
    }
  }
  for (var key in lettersHash) {
    if (lettersHash[key] === false) {
      match = false;
      break;
    }
  }
  return match;
}

module.exports = Anagram;
