import re

""" binary = bin(n).replace('0b', '')
splitted_str = binary.split('0')
biggest_len = 0
for n in splitted_str:
    if len(n) > biggest_len:
        biggest_len = len(n)
print(biggest_len)
 """
# interesting solution


def solve(num):
    num_bin = bin(num)[2:]
    check = re.findall(r'[1]{1,}', num_bin)
    print(check)
    print(len(max(check)))


solve(13)
