var concordance = {},
    tokenizer = require('./tokenizer'),
    counter = require('./counter'),
    _ = require('lodash');

concordance.parse = function(text) {
  var output = {};
  var sentences = tokenizer.splitSentences(text);
  sentences.forEach(function(sentence, sentenceNumber) {
    var occurrences = counter.occurrences(sentence);
    occurrences.forEach(function(occurrency) {
      var word = output[occurrency.word];
      if (word) {
        word.occurrences.total++;
        word.occurrences.positions[sentenceNumber] =
          word.occurrences.positions[sentenceNumber] +
          occurrency.occurrences;
      } else {
        var positions = createZeroFilledArray(sentences.length);
        positions[sentenceNumber] = occurrency.occurrences;
        word = {
          word: occurrency.word,
          occurrences: {
            total: occurrency.occurrences,
            positions: positions
          }
        };
        output[occurrency.word] = word;
      }
    });
  });
  return _.toArray(output);
};

function createZeroFilledArray(length) {
  return Array.apply(null, Array(length))
    .map(Number.prototype.valueOf, 0);
}

module.exports = concordance;
