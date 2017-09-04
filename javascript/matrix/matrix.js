class Matrix {
  constructor(numStr) {
    this.rows = numStr.split(/\n/).map(num => num.split(/\s/).map(Number));

    this.columns = this.rows.map((_, index) => this.rows.map(row => row[index]));
  }
}
module.exports = Matrix;
