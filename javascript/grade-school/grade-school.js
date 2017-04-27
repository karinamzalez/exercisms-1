/*jshint esversion: 6 */

var School = function() {
  this.rosterHash = {};
  this.roster = () => {
    return this.rosterHash;
  };
};

School.prototype.add = function(student, grade) {
  this.rosterHash[grade] = [student];
};

module.exports = School;
