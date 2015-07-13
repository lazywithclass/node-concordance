var tokenizer = {};

tokenizer.splitSentences = function(input) {
  return input.split(/[.!?]/).filter(function(sentence) {
    return sentence !== '';
  });
};

tokenizer.splitWords = function(input) {
  return input.split(/\s+/);
};

module.exports = tokenizer;
