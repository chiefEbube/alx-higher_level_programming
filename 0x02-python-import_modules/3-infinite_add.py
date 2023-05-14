#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    lenArgv = len(sys.argv) - 1
    add = 0

    for i in range(1, lenArgv + 1):
        add += int(sys.argv[i])
    print(add)
