# Day 11: 2D Arrays
# https://www.hackerrank.com/challenges/30-2d-arrays/

#
# def hourglass_sum(arr):
#     hourglass_1 = 0
#     hourglass_2 = 0
#
#     for row_i, row in enumerate(arr):
#         for col in row:
#             if row_i < 3:
#                 hourglass_1 += col
#             else:
#                 hourglass_2 += col
#
#     print(max(hourglass_1, hourglass_2))
#

if __name__ == '__main__':

    arr = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0],
    ]

    # hourglass_sum(arr)
    # h_one, h_two = [], []
    # l_c = [h_one.append(col) if row_i < 3 else h_two.append(col)
    #        for row_i, row in enumerate(arr) for col in row]
    # print(f'h_one: ${h_one}\nh_two: ${h_two}')
    # print(max(sum(h_one), sum(h_two)))
