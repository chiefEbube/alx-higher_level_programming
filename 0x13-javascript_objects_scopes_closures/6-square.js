#!/usr/bin/node
<<<<<<< HEAD
/**
 * Square class that inherits from previous square class
 */
const PrevSquare = require('./5-square');

class Square extends PrevSquare {
  charPrint (c) {
    const myChar = c === undefined ? 'X' : c;
=======

const firstSquare = require('./5-square');

class Square extends firstSquare {
  charPrint (c) {
    const character = c === undefined ? 'X' : c;
>>>>>>> 0d7f2a1c187bd617214533874e90de374d9b6a7f
    for (let i = 0; i < this.height; i++) {
      let myVar = '';
      let y = 0;
      while (y < this.width) {
<<<<<<< HEAD
        myVar += myChar;
        y++;
      }

=======
        myVar += character;
        y++;
      }
>>>>>>> 0d7f2a1c187bd617214533874e90de374d9b6a7f
      console.log(myVar);
    }
  }
}

module.exports = Square;
