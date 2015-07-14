var tokenizer = {};

tokenizer.splitSentences = function(input) {
  input = input.replace('e.g.', 'e|g|');
  return input.split(/[.!?]/).filter(function(sentence) {
    sentence.replace('e|g|', 'e.g.');
    return sentence !== '';
  });
};

tokenizer.splitWords = function(input) {
  return input.match(/[a-zA-Z]+/g).map(function(word) {
    return word.toLowerCase();
  });
};

module.exports = tokenizer;
