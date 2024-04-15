#!/usr/bin/node
<<<<<<< HEAD
const fs = require('fs');

const fileA = process.argv[2];
const fileB = process.argv[3];
const fileC = process.argv[4];

if (
  fs.existsSync(fileA) &&
fs.statSync(fileA).isFile &&
fs.existsSync(fileB) &&
fs.statSync(fileB).isFile &&
fileC !== undefined
) {
  const fileAContent = fs.readFileSync(fileA);
  const fileBContent = fs.readFileSync(fileB);
  const stream = fs.createWriteStream(fileC);

  stream.write(fileAContent);
  stream.write(fileBContent);
  stream.end();
}
=======

class Rectangle {}

module.exports = Rectangle;
>>>>>>> 0d7f2a1c187bd617214533874e90de374d9b6a7f
