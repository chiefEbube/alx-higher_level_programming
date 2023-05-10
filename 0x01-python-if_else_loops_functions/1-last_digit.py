#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

string = "Last digit of"

if number < 0:
    number *= -1

ld = number % 10

if ld > 5:
    print("{} {:d} is {:d} and is greater than 5"
          .format(string, number, ld))
elif ld < 6 and ld != 0:
    print("{} {:d} is {:d} and is less than 6 and not 0"
          .format(string, number, ld))
else:
    print("{} {:d} is 0 and is 0".format(string, number))
