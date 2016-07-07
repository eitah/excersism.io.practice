function Year(myYear) {
  this.myYear = myYear;
}

Year.prototype.isLeap = function () {
  return false;
};

module.exports = Year;
