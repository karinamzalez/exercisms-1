function checkKey(key) {
  if (key !== undefined)  {
    for (var i = 0; i < key.length; i++) {
      if (key[i] == key[i].toUpperCase()) {
        throw "Bad key";
      }
    }
    if (key === "") {
      throw "Bad key";
    }
  }
  return key;
}

class Cipher{
  constructor(key){
    this.key = checkKey(key) || "aaaaaaaaaa";
  }

  encode(string){
    var encodedString = "";
    for (var i = 0; i < string.length; i++) {
      var encodedCharCode = (string[i].charCodeAt(0) - 97) + (this.key[i].charCodeAt(0) - 97);
      if (encodedCharCode > 25) {
        encodedCharCode = encodedCharCode - 26;
      }
      var encodedLetter = String.fromCharCode(97 + encodedCharCode);
      encodedString = encodedString + encodedLetter;
    }
    return encodedString;
  }

  decode(string){
    var decodedString = "";
    for (var i = 0; i < string.length; i++) {
      var decodedCharCode = (string[i].charCodeAt(0) - 97) - (this.key[i].charCodeAt(0) - 97);
      var decodedLetter = String.fromCharCode(97 + decodedCharCode);
      decodedString = decodedString + decodedLetter;
    }
    return decodedString;
  }
}


module.exports = Cipher;
