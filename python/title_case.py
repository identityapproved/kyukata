# 6 kyu
# Title Case
# https://www.codewars.com/kata/5202ef17a402dd033c000009/train/python
# Write a function that will convert a string into title case, given an optional list of exceptions (minor words).
# The list of minor words will be given as a string with each word separated by a space.
# Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

from typing import List, LiteralString

import codewars_test as test


def title_case(title, minor_words="") -> LiteralString:
    if not title:
        return ""
    spl_cap: List = title.capitalize().split()
    # uppers = " ".join(
    #     [
    #         i[0].upper() + i[1:] if i not in minor_words.lower().split(" ") else i
    #         for i in spl_cap
    #     ]
    # )
    return (
        ""
        if not title
        else " ".join(
            [
                i[0].upper() + i[1:] if i not in minor_words.lower().split(" ") else i
                for i in spl_cap
            ]
        )
    )


# Clever
#   return ' '.join(w if w in minor_words.lower().split() and i else w.capitalize() for i, w in enumerate(title.lower().split()))


if __name__ == "__main__":
    title_case("a clash of KINGS", "a an the of")

    @test.describe("Sample tests")
    def _():
        @test.it("Tests")
        def __():
            test.assert_equals(title_case(""), "")
            test.assert_equals(
                title_case("a clash of KINGS", "a an the of"), "A Clash of Kings"
            )
            test.assert_equals(
                title_case("THE WIND IN THE WILLOWS", "The In"),
                "The Wind in the Willows",
            )
            test.assert_equals(title_case("the quick brown fox"), "The Quick Brown Fox")
