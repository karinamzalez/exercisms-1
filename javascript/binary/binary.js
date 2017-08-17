function checkString(string) {
  var newString = '';
  if (!isNaN(string)) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] < 2) {
        newString = newString + string[i];
      } else {
        newString = '0';
        break;
      }
    }
  }
  return newString;
}

class Binary {
  constructor(string) {
    this.string = checkString(string);
  }

  toDecimal() {
    var reversedString = this.string.split('').reverse().join('');
    var sum = 0;
    for (var i = 0; i < reversedString.length; i++) {
      sum = (parseInt(reversedString[i]) * Math.pow(2,i)) + sum;
    }
    return sum;
  }
}

module.exports = Binary;
