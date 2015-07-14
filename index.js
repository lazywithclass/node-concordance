var concordance = require('./lib/concordance'),
    printer = require('./lib/printer');


process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
  // remove the "enter" pressed by user
  data = data.trim();
  printer.print(concordance.parse(data));
});
