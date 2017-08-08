function Cipher() {
  this.key = this.generateKey();
}

Cipher.prototype.generateKey = () => {
  var emptyString = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  while (emptyString.length < 6) {
    emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return emptyString;
};

Cipher.prototype.encode = () => {

};

module.exports = Cipher;
