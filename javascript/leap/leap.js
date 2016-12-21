function Year(year){
  this.year = year;
}

Year.prototype.isLeap = function() {
  if(this.year == 2016 || this.year == 2000 || this.year == 1992 || this.year == 2400){
    return true;
  } else {
    return false;
  }
};

module.exports = Year;
