var concordance = {},
    tokenizer = require('./tokenizer'),
    _ = require('lodash');

concordance.parse = function(text) {
  var output = {};
  var sentences = tokenizer.splitSentences(text);
  sentences.forEach(function(sentence, sentenceNumber) {
    tokenizer.splitWords(sentence).forEach(function(word) {
      var occurrence = output[word];
      if (occurrence) {
        occurrence.occurrences.total++;
        occurrence.occurrences.positions.push(sentenceNumber);
      } else {
        occurrence = {
          word: word,
          occurrences: {
            total: 1,
            positions: [sentenceNumber]
          }
        };
        output[word] = occurrence;
      }
    });
  });
  return _.toArray(output);
};

module.exports = concordance;
