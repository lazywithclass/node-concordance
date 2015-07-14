should = require 'should'
_ = require 'lodash'
sinon = require 'sinon'

# sadly the "it"s will not be printed on the test run
# because we will stub console.log
describe 'printer', ->

  lib = require('../../lib/printer')

  beforeEach ->
    sinon.stub console, 'log'

  afterEach ->
    console.log.restore()

  it 'could be required', ->
    should.exist lib

  describe 'print', ->

    it 'prints as requested', ->
      input = [{
        word: 'a'
        occurrences:
          total: 2
          positions: [1, 1]
      }]
      lib.print input
      console.log.calledOnce.should.be.true
      console.log.args[0][0].should.equal 'a {2:1,1}'

    it 'prints in anphabetical order', ->
      input = [{
        word: 'b'
        occurrences:
          total: 1
          positions: [1]
      }, {
        word: 'c'
        occurrences:
          total: 2
          positions: [2]
      }, {
        word: 'a'
        occurrences:
          total: 1
          positions: [1]
      }]
      lib.print input
      console.log.args[0][0].should.equal 'a {1:1}'
      console.log.args[1][0].should.equal 'b {1:1}'
      console.log.args[2][0].should.equal 'c {2:2}'

    it 'does not print trailing zeros', ->
