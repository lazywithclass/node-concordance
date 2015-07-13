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

## Using it



## Running tests

To run tests `make test`, node is passed the flag `--stack_trace_limit 10`, so that
stack traces are at most 10 lines long.

To run testem so that tests run on file change either run `npm run dev` or `make -s`
