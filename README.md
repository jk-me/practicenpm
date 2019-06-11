# @jk-me/practicenpm

Functions to modify string by removing whitespace, or by removing symbols and punctuation.

## Install

```
$ npm install @jk-me/practicenpm
```

## Usage

```js
const pie = require("@jk-me/practicenpm");

pie.tiny("String with spaces.");
//=> "Stringwithspaces."

pie.tiny(101);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1

pie.removeSym("String with symbols.?><!@#$:&*^(); keep spaces and characters");
//=> "String with symbols keep spaces and characters"

pie.removeSym(101);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
