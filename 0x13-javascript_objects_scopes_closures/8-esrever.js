#!/usr/bin/node

exports.esrever = function (list) {
<<<<<<< HEAD
  const reversedList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }

  return (reversedList);
=======
  const reversed = [];

  for (let i = list.length - 1; i >= 0; i--) {
    reversed.push(list[i]);
  }

  return reversed;
>>>>>>> 0d7f2a1c187bd617214533874e90de374d9b6a7f
};
