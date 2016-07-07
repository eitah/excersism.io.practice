function DnaTranscriber() {
  console.log('DNA constructor is called');
}

DnaTranscriber.prototype.toRna = function (str) {
  // base
  if (str.length === 0) return '';

  if (str.length === 1) {
    switch (str) {
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      case 'A':
        return 'U';
      case 'T':
        return 'A';
      default:
        return '';
    }
  }


  // recursive
  return this.toRna(str.charAt(0)) + this.toRna(str.substr(1));

};

module.exports = DnaTranscriber;
