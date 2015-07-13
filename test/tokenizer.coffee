should = require 'should'

describe 'testing', ->

  it 'works', -> (42).should.equal 42

describe 'tokenizer', ->

  lib = require('../lib/tokenizer')

  it 'could be required', ->
    should.exist lib

  describe 'splitSentences', ->

    it 'splits sentences based on . (dot)', ->
      input = 'these. are . three sentences.'
      sentences = lib.splitSentences input
      sentences.should.have.length 3

    it 'does not count the empty string as a valid sentence', ->
      input = 'it is one sentence, dont try to fool me, split.'
      sentences = lib.splitSentences input
      sentences.should.have.length 1

    it 'splits sentences based on ! (exclamation mark)', ->
      input = 'beware of the dog! it can bite you. really badly.'
      sentences = lib.splitSentences input
      sentences.should.have.length 3

    it 'splits sentences based on ? (question mark)', ->
      input = 'did you know shinigami love apples? not really.'
      sentences = lib.splitSentences input
      sentences.should.have.length 2

  describe 'splitWords', ->

    it 'splits words, ignoring standard punctuation marks', ->
      input = 'these, are some; words'
      words = lib.splitWords input
      words.should.have.length 4
