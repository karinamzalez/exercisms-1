function Hamming(){

}

Hamming.prototype.compute = function(strand1, strand2){
  var diff =  strand1.localeCompare(strand2);
  if(strand1.length !== strand2.length){
    throw new Error('DNA strands must be of equal length.'); 
  } else {
    x = 0;
    for (var i = 0; i < strand1.length; i++) {
      if(strand1[i] !== strand2[i]){
        x++;
      }
    }
    return x;
  }
};

module.exports = Hamming;
