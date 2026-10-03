# 6 kyu
# Array.diff
#
# Implement a function that computes the difference between two lists.
# The function should remove all occurrences of elements from the first list (a) that are present in the second list (b).
# The order of elements in the first list should be preserved in the result.
# Examples
#
# If a = [1, 2] and b = [1], the result should be [2].
#
# If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

import codewars_test as test

# def array_diff(a, b):
#     return [i for i in a if i not in b]


def array_diff(a, b):
    b = set(b)
    return [i for i in a if i not in b]


# array_diff = lambda a, b: [x for x in a if x not in (s := set(b))]


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(
            array_diff([1, 2], [1]), [2], "a was [1,2], b was [1], expected [2]"
        )
        test.assert_equals(
            array_diff([1, 2, 2], [1]),
            [2, 2],
            "a was [1,2,2], b was [1], expected [2,2]",
        )
        test.assert_equals(
            array_diff([1, 2, 2], [2]), [1], "a was [1,2,2], b was [2], expected [1]"
        )
        test.assert_equals(
            array_diff([1, 2, 2], []),
            [1, 2, 2],
            "a was [1,2,2], b was [], expected [1,2,2]",
        )
        test.assert_equals(
            array_diff([], [1, 2]), [], "a was [], b was [1,2], expected []"
        )
        test.assert_equals(
            array_diff([1, 2, 3], [1, 2]),
            [3],
            "a was [1,2,3], b was [1, 2], expected [3]",
        )
