/*jshint esversion: 6 */

var School = function() {
  this.rosterHash = {};
  this.roster = () => {
    return this.rosterHash;
  };
};

School.prototype.add = function(student, grade) {
  var hash = this.rosterHash;
  hash[grade] ? hash[grade].push(student) : hash[grade] = [student];
};

School.prototype.grade = function(grade) {
};

module.exports = School;
