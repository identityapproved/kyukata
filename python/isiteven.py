# 8 kyu
# Is it even?
# https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/python

import codewars_test as test
# from solution import is_even


def is_even(n):
    return True if n % 2 == 0 else False


@test.describe('Fixed Tests')
def fixed_tests():

    @test.it('Basic Test Cases')
    def basic_tests():
        test.assert_equals(is_even(0), True)
        test.assert_equals(is_even(0.5), False)
        test.assert_equals(is_even(1), False)
        test.assert_equals(is_even(2), True)
        test.assert_equals(is_even(-4), True)
        test.assert_equals(is_even(15), False)
        test.assert_equals(is_even(20), True)
        test.assert_equals(is_even(220), True)
        test.assert_equals(is_even(222222221), False)
        test.assert_equals(is_even(500000000), True)
