# Highest and Lowest
# 7 kyu
# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python
import codewars_test as test


def high_and_low(numbers):
    nums = [int(num) for num in numbers.split()]
    return f'{max(nums)} {min(nums)}'

# Clever
#     nums = sorted(numbers.split(), key=int)
#     return '{} {}'.format(nums[-1], nums[0])

@test.describe("Example Tests")
def fixed_tests():
    @test.it('Test Case 1')
    def basic_test_cases():
        test.assert_equals(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");

    @test.it('Test Case 2')
    def basic_test_cases():
        test.assert_equals(high_and_low("1 2 3"), "3 1");
