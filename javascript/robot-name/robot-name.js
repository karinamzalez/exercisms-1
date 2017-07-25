/*jshint esversion: 6 */

var Robot = function() {
  this.name = `MA${}`;
};

Robot.prototype.name = function() {
  return "AB" + 123;
};


module.exports = Robot;
