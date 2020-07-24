# yahtzee.js
[Inspired by this Numerophile video](https://www.youtube.com/watch?v=fiTwar7mFws "Youtube link"), I created this script that removes all the time-consuming work, and leaves you with the data you are looking for.

A week after completion, I realized I could archieve the same thing comparing two random numbers:
- If there's a 1 in 1296 to get a one roll yahtzee, then a one roll yahtze is equal to get a lucky number in 1296.

Which eliminates the need of manage, count, store and sort and everything else.
The line count went down from 106 to 6 (94.3% smaller). That's what you'll find in compressed.js

- [Compressed js. demo](https://repl.it/@OOQQ/max-compressed-yahtzee-solver "Compressed .js")
- [Full fledged js. demo](https://repl.it/@OOQQ/fully-fledged-yahtzee-solver "Expanded .js")
