# 7 kyu
# Remove anchor from URL
# https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/python
import re

import codewars_test as test


def remove_url_anchor(url: str) -> str:
    # return re.sub(r"#\w+$", "", url)
    return url.split("#", 1)[0]  # -> return url.split('#')[0]


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(
            remove_url_anchor("www.codewars.com#about"), "www.codewars.com"
        )
        test.assert_equals(
            remove_url_anchor("www.codewars.com/katas/?page=1#about"),
            "www.codewars.com/katas/?page=1",
        )
        test.assert_equals(
            remove_url_anchor("www.codewars.com/katas/"), "www.codewars.com/katas/"
        )
