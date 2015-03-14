# JS / ES6 / ES7 Workflow Ideas

I'm trying to figure out a good workflow to write code using all the fancy new
features of ES6 and ES7, because ES5 (and even ES6) are a bit confining.

This is a first pass; I'm not sure what I'm going to do long-term. Suggestions?
File an issue! (and thanks)

## What I'm currently doing

* Hoping those cool ES7 features I love won't go away.
* Compiling my source with [Grunt](http://gruntjs.com/) and
  [Babel](http://babeljs.io/) via the
  [grunt-babel](https://github.com/babel/grunt-babel) plugin to ES5.

Eg.

1. edit `src/index.js`
1. `grunt && node build/index.js`
