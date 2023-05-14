#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    lenArgv = len(sys.argv) - 1
    if lenArgv == 1:
        print("1 argument:")
    else:
        print("{} arguments".format(lenArgv))
    for i in range(1, lenArgv + 1):
        print("{}: {}".format(i, sys.argv[i]))
