#!/usr/bin/python3

# function that computes the square value of all integers of a matrix.
def square_matrix_simple(matrix=[]):
    return [list(map(lambda x: x**2, matrix_row)) for matrix_row in matrix]
