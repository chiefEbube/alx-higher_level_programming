#!/usr/bin/python3

# function that replaces all occurrences of
# an element by another in a new list.

def search_replace(my_list, search, replace):
    return list(map(lambda x: x if x != search else replace, my_list))
