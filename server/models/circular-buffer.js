function CircularBuffer() {
}

CircularBuffer.prototype.hey = function (instr) {

  const str = instr.replace(/[^\w\s?!]/g, '');
  console.log('str is', str);

  if (str.replace(/[\s]/g, '').length === 0) return 'Fine. Be that way!';

  // if all caps letters
  if (str.indexOf('\xdc') === -1) {
    console.log('~~~~~~~~~~str', str, str.search(/[A-Z]/g));
    if (str.toUpperCase() === str && str.search(/[A-Z]/g) !== -1) return 'Whoa, chill out!';
  }

  // if only question mark comes at the end of the phrase
  if (str.indexOf('?') === str.length - 1) return 'Sure.';

  return 'Whatever.';



};

module.exports = CircularBuffer;
