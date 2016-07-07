function Year(myYear) {
  this.myYear = myYear;
}

Year.prototype.isLeap = function () {
  console.log('myyear', this.myYear);
  if (this.myYear % 4 === 0) {
    if (this.myYear % 100 === 0) {
      if (this.myYear % 400 === 0) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
};

module.exports = Year;
