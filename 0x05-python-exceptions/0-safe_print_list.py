#!/usr/bin/python3

# function that prints x elements of a list.

def safe_print_list(my_list=[], x=0):
    number_of_elements = 0
    for i in range(x):
        try:
            print(f"{my_list[i]}", end="")
            number_of_elements += 1
        except IndexError:
            break
    print()
    return number_of_elements
