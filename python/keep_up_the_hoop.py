# 8 kyu
# Keep up the hoop
# https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/python
import codewars_test as test


def hoop_count(n):
    return "Great, now move on to tricks" if n >= 10 else "Keep at it until you get it"


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(hoop_count(3), "Keep at it until you get it")
        test.assert_equals(hoop_count(11), "Great, now move on to tricks")
