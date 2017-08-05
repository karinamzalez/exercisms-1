var allNames = [];
function Robot() {
  this.name = this.newName();
}
Robot.prototype.newName = function () {
  let res = '';
  res += String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
  res += String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));

  for (let i = 0; i < 3; i++) {
    res += Math.floor(Math.random() * 10);
  }
  if (allNames.includes(res)) {
    return this.newName();
  } else {
    allNames.push(res);
    return res;
  }
};

Robot.prototype.reset = function() {
  this.name = this.newName();
};
module.exports = Robot;
