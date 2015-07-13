var tokenizer = {};

tokenizer.splitSentences = function(input) {
  input = input.replace('e.g.', 'e|g|');
  return input.split(/[.!?]/).filter(function(sentence) {
    sentence.replace('e|g|', 'e.g.');
    return sentence !== '';
  });
};

tokenizer.splitWords = function(input) {
  return input.split(/\s+/);
};

module.exports = tokenizer;
