var counter = {},
    tokenizer = require('./tokenizer'),
    _ = require('lodash');

counter.occurrences = function(sentence) {
  var words = tokenizer.splitWords(sentence).map(function(word) {
    return word.toLowerCase();
  });
  var counted = words.reduce(function(counter, word) {
    if (!counter[word]) {
      counter[word] = { word: word, occurrences: 0 };
    }
    counter[word].occurrences++;
    return counter;
  }, {});
  return _(counted).toArray().value();
};

module.exports = counter;
