var Pangram = function(string) {
  this.sentence = string;
  this.alphabet = {a:false, b:false, c:false,
                   d:false, e:false,
                   f:false, g:false, h:false,
                   i:false, j:false, k:false,
                   l:false, m:false, n:false,
                   o:false, p:false, q:false,
                   r:false, s:false, t:false,
                   u:false, v:false, w:false,
                   x:false, y:false, z:false};
};

Pangram.prototype.isPangram = function() {
  var pangram = true;
  var alphabet = this.alphabet;
  parseSentence(this.sentence, alphabet);
  for (var key in alphabet) {
    if (alphabet[key] === false) {
      pangram = false;
      break;
    }
  }
  return pangram;
};

function parseSentence(sentence, alphabet) {
  for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    var lowercaseLetter = letter.toLowerCase();
    markTrueInAlphabetArray(lowercaseLetter, alphabet);
  }
}

function markTrueInAlphabetArray(letter, alphabet) {
  for (var key in alphabet) {
    if (key === letter){
      alphabet[key] = true;
    }
  }
}

module.exports = Pangram;
