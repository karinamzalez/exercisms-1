ls
function dnaTranscriber(){

}

dnaTranscriber.prototype.toRna = function(letter){
  if (letter.length === 1) {
    if(letter == 'C') {
      return 'G';
    } else if(letter == 'G'){
      return 'C';
    } else if(letter == 'A'){
      return 'U';
    } else {
      return 'A';
    }
  } else {
    string = '';
    for (var i = 0; i < letter.length; i++) {
     if(letter[i] == 'C') {
        l = 'G';
      } else if(letter[i] == 'G'){
        l = 'C';
      } else if(letter[i] == 'A'){
        l = 'U';
      } else {
        l = 'A';
      }
      string = string + l;
    }
    return string;
  }
};

function compare(letter) {
  if(letter == 'C') {
    return 'G';
  } else if(letter == 'G'){
    return 'C';
  } else if(letter == 'A'){
    return 'U';
  } else {
    return 'A';
  }
}

module.exports = dnaTranscriber;
