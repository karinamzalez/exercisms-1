var Anagram = function(word) {
  this.word = word.toLowerCase();
};

Anagram.prototype.matches = function() {
  var potentialMatches = [];
  if (!(arguments[0] instanceof Array)) {
    potentialMatches = [];
    for (var i = 0; i < arguments.length; ++i) {
      var word = arguments[i];
      potentialMatches.push(word.toLowerCase());
    }
  } else {
    potentialMatches = arguments[0];
  }

  return buildMatchesArray(potentialMatches, this.word);
};

function buildMatchesArray(potentialMatches, word) {
  var lettersHash =  wordToHash(word);
  var matches = [];
  for (var i = 0; i < potentialMatches.length; i++) {
    var potentialMatch = potentialMatches[i];
    var lowerCasePotentialMatch = potentialMatch.toLowerCase();
    if (match(lettersHash, lowerCasePotentialMatch) &&
        lowerCasePotentialMatch !== word) {
      matches.push(potentialMatch);
    }
    lettersHash = wordToHash(word);
  }
  return matches;
}

function wordToHash(word) {
  var lettersHash = {};
  for (var i = 0; i < word.length; i++) {
    if (word[i] in lettersHash) {
      var key = word[i] + "1";
      lettersHash[key] = false;
    }
    lettersHash[word[i]] = false;
  }
  return lettersHash;
}

function match(lettersHash, potentialMatch) {
  var match = true;
  var letters = [];
  for (var i = 0; i < potentialMatch.length; i++) {
    var letter = potentialMatch[i];
    letters.push(letter);
    if (lettersHash[letter] === true){
      if ((letter + "1") in lettersHash) {
        lettersHash[letter + "1"] = true;
      } else {
        match = false;
      }
    } else if (letter in lettersHash) {
      lettersHash[letter] = true;
    } else if ((letter + "1") in lettersHash) {
      lettersHash[letter + "1"] = true;
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
