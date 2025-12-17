# 6 kyu
# Bouncing Balls
# https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/python

import codewars_test as test


# def bouncing_ball(h, bounce, window):
#     if h <= 0 or bounce <= 0 or bounce >= 1 or window >= h:
#         return -1
#
#     count = 1  # Count the first fall
#     while (h := h * bounce) > window:
#         count += 2  # Count the bounce up and the fall down
#
#     return count


# Recursive solution
# def bouncing_ball(h, bounce, window):
#     print('h', h, 'bounce', bounce, 'window', window)
#     if h < 0 or bounce < 0 or bounce > 1 or window > h:
#         return -1
#     while h > window:
#         h = h * bounce
#         print('h', h)
#         if h > window:
#             return 2 + bouncing_ball(h, bounce, window)
#     return 1


# List comprehension solution
def bouncing_ball(h, bounce, window):
    return -1 if not (0 < h and 0 < bounce < 1 and window < h) else 1 + sum(2 for _ in iter(lambda: h * bounce > window, False) if (h := h * bounce))


@test.describe('Tests')
def fixed_tests():
    def testing(h, bounce, window, exp):
        actual = bouncing_ball(h, bounce, window)
        test.assert_equals(actual, exp)

    @test.it('Fixed Tests')
    def tests():
        testing(2, 0.5, 1, 1)
        testing(3, 0.66, 1.5, 3)
        testing(30, 0.66, 1.5, 15)
        testing(30, 0.75, 1.5, 21)
