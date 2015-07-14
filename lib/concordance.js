var concordance = {},
    tokenizer = require('./tokenizer'),
    counter = require('./counter'),
    _ = require('lodash');

concordance.parse = function(text) {
  var output = [];
  var sentences = tokenizer.splitSentences(text);
  sentences.forEach(function(sentence, sentenceNumber) {
    var occurrences = counter.occurrences(sentence);
    occurrences.forEach(function(occurrency) {
      var word = findWord(output, occurrency.word);
      if (word) {
        word.occurrences.total++;
        word.occurrences.positions[sentenceNumber] =
          (word.occurrences.positions[sentenceNumber] + 1) || 1;
      } else {
        var positions = createZeroFilledArray(sentences.length);
        positions[sentenceNumber] = 1;
        word = {
          word: occurrency.word,
          occurrences: { total: 1, positions: positions }
        };
        output.push(word);
      }
    });
  });
  return output;
};

function createZeroFilledArray(length) {
  return Array.apply(null, Array(length))
    .map(Number.prototype.valueOf, 0);
}

function findWord(output, search) {
  return _.find(output, function(w) {
    return w.word === search;
  });
}

module.exports = concordance;
