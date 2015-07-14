var printer = {};

printer.print = function(wordsOccurrences) {
  wordsOccurrences.forEach(function(occurrency) {
    var printed = '$word {$total:$positions}'
          .replace('$word', occurrency.word)
          .replace('$total', occurrency.occurrences.total)
          .replace('$positions', occurrency.occurrences.positions);
    console.log(printed);
  });
};

module.exports = printer;
