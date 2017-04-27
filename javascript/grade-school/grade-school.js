/*jshint esversion: 6 */

var School = function() {
  this.rosterHash = {};
  this.roster = () => {
    for (var key in this.rosterHash) {
      this.grade(key);
    }
    return this.rosterHash;
  };
};

School.prototype.add = function(student, grade) {
  var hash = this.rosterHash;
  hash[grade] ? hash[grade].push(student) : hash[grade] = [student];
};

School.prototype.grade = function(grade) {
  var students = this.rosterHash[grade];
  return students ? students.sort() : [];
};

module.exports = School;
