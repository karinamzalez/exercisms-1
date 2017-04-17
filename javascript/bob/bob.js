//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (isUpperCase(input)) {
    return 'Whoa, chill out!';
  } else if (input.slice(-1) == '?') {
    return 'Sure.';
  } else if (!(/\S/.test(input))) {
    return 'Fine. Be that way!';
  }
  else {
    return 'Whatever.';
  }
};

function isUpperCase(input) {
    if (/^[0-9, ?]*$/.test(input)) {
      return false;
    } else {
      return input === input.toUpperCase();
    }
}

module.exports = Bob;
