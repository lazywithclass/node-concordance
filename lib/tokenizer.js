var tokenizer = {};

var falsePositiveWhitelist = [{
  falsePositive: 'e.g.', replacer: 'e|g|'
}];
tokenizer.splitSentences = function(input) {
  falsePositiveWhitelist.forEach(function(w) {
    input = input.replace(w.falsePositive, w.replacer);
  });

  return input.split(/[.!?]/)
    .filter(function(sentence) {
      return sentence !== '';
    })
    .map(function(sentence) {
      falsePositiveWhitelist.forEach(function(w) {
        sentence = sentence.replace(w.replacer, w.falsePositive);
      });
      return sentence;
    });
};

tokenizer.splitWords = function(input) {
  return input.match(/[a-z]+\-{1}[a-z]+|[a-zA-Z|e\.g\.]+/g).map(function(word) {
    return word.toLowerCase();
  });
};

module.exports = tokenizer;
