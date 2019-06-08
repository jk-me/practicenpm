# @jk-me/practicenpm

Removes all spaces from a string.

## Install

```
$ npm install @jk-me/practicenpm
```

## Usage

```js
const tiny = require("@jk-me/practicenpm");

tiny("String with spaces.");
//=> "Stringwithspaces."

tiny(101);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
