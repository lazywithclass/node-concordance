var tokenizer = {};

tokenizer.splitSentences = function(input) {
  input = input.replace('e.g.', 'e|g|');
  return input.split(/[.!?]/).filter(function(sentence) {
    sentence.replace('e|g|', 'e.g.');
    return sentence !== '';
  });
};

tokenizer.splitWords = function(input) {
  return input.match(/[a-z]+\-{1}[a-z]+|[a-zA-Z|e\.g\.]+/g).map(function(word) {
    return word.toLowerCase();
  });
};

module.exports = tokenizer;
