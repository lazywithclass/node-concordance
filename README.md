# node-concordance

## Guidelines

A "concordance" is an alphabetical list of the words present in a text with a count of how
often each word appears and citations of where each word appears in the text (e.g., page
number). Write a program -- in the programming language of your choice -- that will
generate a concordance of an arbitrary text document written in English: the text can be
read from stdin, and the program should output the concordance to stdout or a file. For
each word, it should print the count and the sorted list of citations, in this case the
zero-indexed sentence number in which that word occurs. You may assume that the input
contains only spaces, newlines, standard English letters, and standard English punctuation
marks.

## Dependencies

Just run `npm install`, tested with node v0.10.33

## Using it

You could run it by calling `cat test/fixtures/base | node index.js`

## Running tests

To run tests the usual `npm test` or `make test`.

To run testem so that tests run on file change either run `npm run dev` or `make -s`
