# 8 kyu
# Filter out the geese
# https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/python
from typing import List

import codewars_test as test

geese: list[str] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


def goose_filter(birds):
    return [bird for bird in birds if bird not in geese]

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(
            goose_filter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),
            ["Mallard", "Hook Bill", "Crested", "Blue Swedish"])
        test.assert_equals(goose_filter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),
                           ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
        test.assert_equals(goose_filter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]), [])
