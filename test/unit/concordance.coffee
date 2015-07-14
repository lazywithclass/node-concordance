should = require 'should'

describe 'concordance', ->

  concordance = require('../../lib/concordance')

  it 'could be required', ->
    should.exist concordance

  describe 'parse', ->

    it 'gives the total occurences', ->
      input = 'a simple a test. what a test.'
      parsed = concordance.parse input
      expected = [{
        word: 'a'
        occurrences:
          total: 3
          positions: [2, 1]
      }, {
        word: 'simple'
        occurrences:
          total: 1
          positions: [1, 0]
      }, {
        word: 'test'
        occurrences:
          total: 2
          positions: [1, 1]
      }, {
        word: 'what'
        occurrences:
          total: 1
          positions: [0, 1]
      }]
      parsed.should.eql expected
