#!/usr/bin/node

let counter = 0;

<<<<<<< HEAD
exports.logMe = function count (item) {
=======
exports.logMe = function (item) {
>>>>>>> 0d7f2a1c187bd617214533874e90de374d9b6a7f
  console.log(`${counter}: ${item}`);
  counter += 1;
};
