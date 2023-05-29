#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    items_printed = 0

    for i in range(x):
        try:
            print(my_list[i], end="")
            items_printed += 1
        except IndexError:
            break
    print()
    return items_printed
