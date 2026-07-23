# 7 kyu
# Monotone travel
#
# You're given a list of compareable elements:
#
# heights = [Integers or Floats]
#
# Your job is to check whether for any x all successors are greater or equal to x.
#
# is_monotone([1,2,3]) == True
# is_monotone([1,1,2]) == True
# is_monotone([1])     == True
# is_monotone([3,2,1]) == False
# is_monotone([3,2,2]) == False
#
# If the list is empty, Peter has probably removed your altimeter, so we cannot prove him wrong and he's still right:
#
# is_monotone([])     == True


import codewars_test as test


def is_monotone(heights: list[int | float]) -> bool:
    return all(heights[i] <= heights[i + 1] for i in range(len(heights) - 1))


# clever:
#   return sorted(heights) == heights


if __name__ == "__main__":

    @test.describe("Fixed Tests")
    def fixed_tests():
        @test.it("Basic Test Cases")
        def basic_test_cases():
            test.assert_equals(
                is_monotone(list(range(1, 11))), True, "Should work on increasing lists"
            )
            test.assert_equals(
                is_monotone([5, 5, 5, 5, 5, 5, 5]),
                True,
                "Should work on constant lists",
            )
            test.assert_equals(is_monotone([]), True, "Should work on empty list")
            test.assert_equals(is_monotone([1]), True, "Should work on size 1 list")

            test.assert_equals(
                is_monotone(list(range(5, 0, -1))),
                False,
                "Should return false on a decreasing list",
            )
            test.assert_equals(
                is_monotone(list(range(5, -40, -1))),
                False,
                "Should return false on a decreasing list",
            )

            test.assert_equals(
                is_monotone([1, 2, 3, 3, 4, 5]),
                True,
                "Should work on a non-decreasing list",
            )

            test.assert_equals(
                is_monotone([x * 0.7 for x in range(1000)]),
                True,
                "Should work on predictive lists of floats",
            )
