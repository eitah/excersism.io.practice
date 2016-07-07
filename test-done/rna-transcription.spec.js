/* eslint-disable no-var, quotes, semi-spacing, no-unused-expressions,
prefer-arrow-callback, space-before-function-paren, padded-blocks,
comma-spacing */

const expect = require('chai').expect;
const DnaTranscriber = require('../../server/models/rna-transcription');
const dnaTranscriber = new DnaTranscriber();

describe('toRna()', function() {

  it('transcribes cytosine to guanine', function() {
    expect(dnaTranscriber.toRna('C')).to.be.equal('G');
  });

  it('transcribes guanine to cytosine', function() {
    expect(dnaTranscriber.toRna('G')).to.be.equal('C');
  });

  it('transcribes adenine to uracil', function() {
    expect(dnaTranscriber.toRna('A')).to.be.equal('U');
  });

  it('transcribes thymine to adenine', function() {
    expect(dnaTranscriber.toRna('T')).to.be.equal('A');
  });

  it('returns nothing if it is not a valid nucleotide', function() {
    expect(dnaTranscriber.toRna('')).to.be.equal('');
  });

  it('omits returning garbage', function() {
    expect(dnaTranscriber.toRna('TQ')).to.be.equal('A');
  });

  it('transcribes all dna nucleotides to their rna complements', function() {
    expect(dnaTranscriber.toRna('ACGTGGTCTTAA'))
        .to.be.equal('UGCACCAGAAUU');
  });
});
