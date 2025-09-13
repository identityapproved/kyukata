# 7 kyu
# Printer Errors
# https://www.codewars.com/kata/56541980fa08ab47a0000040/train/python

import codewars_test as test
import re

def printer_error(s):
    return f"{re.subn('[n-z]', '', s)[1]}/{len(s)}"


@test.describe("printer_error")
def basic_tests():
    @test.it('Example Test Cases')
    def example_test_cases():
        s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
        test.assert_equals(printer_error(s), "3/56")
        s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
        test.assert_equals(printer_error(s), "6/60")
        s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"
        test.assert_equals(printer_error(s) , "11/65")
