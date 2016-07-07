function Hamming() {
}

Hamming.prototype.compute = function (str1, str2) {
  console.log('compute is called', str1, str2);

  // base case
  if (str1.length !== str2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  if (str1 === str2) {
    return 0;
  }

  // recursive case
  if (str1.charAt(0) === str2.charAt(0)) {
    return this.compute(str1.substr(1), str2.substr(1));
  }
  return 1 + this.compute(str1.substr(1), str2.substr(1));

};

module.exports = Hamming;
