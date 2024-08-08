# 8 kyu
# Is the string uppercase?
# https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/python
import codewars_test as test
import re


def is_uppercase(inp):
    # return all(i.isupper() or not i.isalpha() for i in inp.split(' '))
    res = re.sub(r'[^a-zA-Z]', '', inp)
    # print(re.sub(r'[^a-zA-Z]', '', inp).isupper())
    # print(True if not res or res.isupper() else False)
    # return re.sub(r'[^a-zA-Z]', '', inp).isupper()
    return True if not res or res.isupper() else False

# Clever
# return not any(c.islower() for c in inp)
# return all( i.isupper() for i in inp if i.isalpha() )

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        def gen_test_case(inp, res):
            test.assert_equals(is_uppercase(inp), res, inp)

        gen_test_case("c", False)
        gen_test_case("C", True)
        gen_test_case("hello I AM DONALD", False)
        gen_test_case("HELLO I AM DONALD", True)
        gen_test_case("$%&", True)
