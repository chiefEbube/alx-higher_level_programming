#!/usr/bin/node
<<<<<<< HEAD
/**
 * Square class that inherits from rectangle class
 */
=======

>>>>>>> 0d7f2a1c187bd617214533874e90de374d9b6a7f
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

module.exports = Square;
