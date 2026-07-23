# 7 kyu
# Find the capitals
#
# Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word)
# as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters
# in the string.

import codewars_test as test


def capitals(word) -> list[int]:
    return [i for i, x in enumerate(word) if x.isupper()]


if __name__ == "__main__":

    capitals("CodEWaRs")

    @test.describe("Fixed Tests")
    def fixed_tests():
        @test.it("Basic Test Cases")
        def basic_test_cases():
            test.assert_equals(capitals("CodEWaRs"), [0, 3, 4, 6])
