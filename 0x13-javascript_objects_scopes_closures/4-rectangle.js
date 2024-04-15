#!/usr/bin/node
<<<<<<< HEAD
/**
 * Check the parameters provided
 */
=======

>>>>>>> 0d7f2a1c187bd617214533874e90de374d9b6a7f
class Rectangle {
  constructor (w, h) {
    if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
<<<<<<< HEAD
      let myVar = '';
      let y = 0;
      while (y < this.width) {
        myVar += 'X';
        y++;
      }

      console.log(myVar);
=======
      let character = '';
      let j = 0;
      while (j < this.width) {
        character += 'X';
        j++;
      }

      console.log(character);
>>>>>>> 0d7f2a1c187bd617214533874e90de374d9b6a7f
    }
  }

  rotate () {
    let temp = 0;
    temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}
<<<<<<< HEAD
=======

>>>>>>> 0d7f2a1c187bd617214533874e90de374d9b6a7f
module.exports = Rectangle;
