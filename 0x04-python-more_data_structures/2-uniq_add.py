#!/usr/bin/python3

# function that adds all unique integers in a list
# (only once for each integer).

def uniq_add(my_list=[]):
    return sum(set(my_list))
