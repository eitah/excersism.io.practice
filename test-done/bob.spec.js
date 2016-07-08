/* eslint-disable no-var, quotes, semi-spacing, no-unused-expressions,
prefer-arrow-callback, space-before-function-paren, padded-blocks,
comma-spacing */

const expect = require('chai').expect;
const Bob = require('../../server/models/bob.js');

describe('Bob', function() {
  var bob = new Bob();

  it('stating something', function() {
    var result = bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).to.be.equal('Whatever.');
  });

  it('shouting', function() {
    var result = bob.hey('WATCH OUT!');
    expect(result).to.be.equal('Whoa, chill out!');
  });

  it('asking a question', function() {
    var result = bob.hey('Does this cryogenic chamber make me look fat?');
    expect(result).to.be.equal('Sure.');
  });

  it('talking forcefully', function() {
    var result = bob.hey('Let\'s go make out behind the gym!');
    expect(result).to.be.equal('Whatever.');
  });

  it('using acronyms in regular speech', function() {
    var result = bob.hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).to.be.equal('Whatever.');
  });

  it('forceful questions', function() {
    var result = bob.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).to.be.equal('Whoa, chill out!');
  });

  it('shouting numbers', function() {
    var result = bob.hey('1, 2, 3 GO!');
    expect(result).to.be.equal('Whoa, chill out!');
  });

  it('only numbers', function() {
    var result = bob.hey('1, 2, 3');
    expect(result).to.be.equal('Whatever.');
  });

  it('question with only numbers', function() {
    var result = bob.hey('4?');
    expect(result).to.be.equal('Sure.');
  });

  it('shouting with special characters', function() {
    var result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).to.be.equal('Whoa, chill out!');
  });

  it('shouting with umlauts', function() {
    /* NOTE: \xc4 = Ä
             \xe4 = ä
             \xdc = Ü
             \xfc = ü
       "\xfcML\xe4\xdcTS" === "üMLäÜTS"
    */

    var result = bob.hey('\xdcML\xc4\xdcTS!');
    expect(result).to.be.equal('Whoa, chill out!');
  });

  it('calmly speaking about umlauts', function() {
    var result = bob.hey('\xfcML\xe4\xdcTS');
    expect(result).to.be.equal('Whatever.');
  });

  it('shouting with no exclamation mark', function () {
    var result = bob.hey('I HATE YOU');
    expect(result).to.be.equal('Whoa, chill out!');
  });

  it('statement containing question mark', function() {
    var result = bob.hey('Ending with a ? means a question.');
    expect(result).to.be.equal('Whatever.');
  });

  it('prattling on', function () {
    var result = bob.hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).to.be.equal('Sure.');
  });

  it('silence', function () {
    var result = bob.hey('');
    expect(result).to.be.equal('Fine. Be that way!');
  });

  it('prolonged silence', function () {
    var result = bob.hey('   ');
    expect(result).to.be.equal('Fine. Be that way!');
  });
});
