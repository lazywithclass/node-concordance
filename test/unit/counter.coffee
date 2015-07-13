should = require 'should'
_ = require 'lodash'

describe 'counter', ->

  lib = require('../../lib/counter')

  it 'could be required', ->
    should.exist lib

  describe 'occurrences', ->

    it 'counts occurrences of words in a sentence', ->
      input = 'hey hi I said hey hi hey'
      counts = lib.occurrences input
      hey = _.find counts, (c) -> c.word == 'hey'
      hey.word.should.equal 'hey'
      hey.occurrences.should.equal 3
      hi = _.find counts, (c) -> c.word == 'hi'
      hi.word.should.equal 'hi'
      hi.occurrences.should.equal 2

    it 'sorts the occurrences alphabetically', ->
      input = 'hey hi I said hey hi hey'
      counts = lib.occurrences input
      counts[0].word.should.equal 'hey'
      _.last(counts).word.should.equal 'said'
