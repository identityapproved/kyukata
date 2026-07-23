# 4 kyu
# Strip Comments
# Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
#
# Example:
#
# Given an input string of:
#
# apples, pears # and bananas
# grapes
# bananas !apples
#
# The output expected would be:
#
# apples, pears
# grapes
# bananas

import codewars_test as test

""" 
def strip_comments(strng, markers):
    # stripped = ""
    stripped = []
    for i in strng.split("\n"):
        # if any(marker in i for marker in markers):
        #     fnd_idx = i.find(markers)
        #     stripped += i[:fnd_idx] + "\n"
        # else:
        #     stripped += i + "\n"
        find_idx = next((i.find(marker) for marker in markers if marker in i), -1)
        print(f"Find Index: {find_idx}")
        if find_idx == -1:
            # stripped += i.rstrip() + "\n"
            stripped.append(i.rstrip())
        else:
            # stripped += i[:find_idx].rstrip() + "\n"
            stripped.append(i[:find_idx].rstrip())

    print(stripped)
    # return stripped[:-1]
    return "\n".join(stripped)
    # return [i for i in strng.split("\n")].find()
 """


def strip_comments(strng, markers):
    stripped = []
    for line in strng.split("\n"):
        idx = min((line.find(m) for m in markers if m in line), default=len(line))
        stripped.append(line[:idx].rstrip())
    return "\n".join(stripped)


""" 
best/clever
def solution(string,markers):
    s = string.splitlines()
    for i in range(len(s)):
        for j in markers:
            if j in s[i]:
                s[i] = s[i][:s[i].index(j)].rstrip()
    return "\n".join(s)
 """


@test.describe("Test case")
def test_group():
    @test.it("Example")
    def test_case():
        test.assert_equals(
            strip_comments(
                "apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]
            ),
            "apples, pears\ngrapes\nbananas",
        )
        test.assert_equals(strip_comments("a #b\nc\nd $e f g", ["#", "$"]), "a\nc\nd")
        test.assert_equals(strip_comments(" a #b\nc\nd $e f g", ["#", "$"]), " a\nc\nd")
