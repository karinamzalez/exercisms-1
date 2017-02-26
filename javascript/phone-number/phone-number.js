var PhoneNumber = function(num) {
  this.num = num;
};

PhoneNumber.prototype.number = function() {
  var number = this.num;
  parsedNumber = number.replace(/[() -.]/g, '');
  if (parsedNumber.length === 11 || parsedNumber.length === 9) {
    if (parsedNumber[0] == 1 && parsedNumber.length != 9) {
      parsedNumber = parsedNumber.slice(1);
    } else {
      parsedNumber = "0000000000";
    }
  }
  return parsedNumber;
};

PhoneNumber.prototype.areaCode = function() {
  var number = this.number();
  return number.slice(0, 3);
};

PhoneNumber.prototype.toString = function() {
  var number = this.num;
  var formattedNumber = "(" + this.areaCode() +
                        ") " + number.slice(3, 6) +
                        "-" + number.slice(6, 10);
  return formattedNumber;
};

module.exports = PhoneNumber;
