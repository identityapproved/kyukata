# 6 kyu
# Counting Duplicates
# https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python
from collections import Counter
import codewars_test as test

# My first solution
""" def duplicate_count(text):
    count = {}
    for i in text.lower():
        if i in count:
            count[i] += 1
        else:
            count[i] = 1
    return sum(1 for i in count.values() if i > 1) """


# Oneliners
def duplicate_count(text):
    return sum(1 for i in Counter(text.lower()).values() if i > 1)


# Long
""" def duplicate_count(text):
    count = {}
    duplicates = 0


    normalized = text.lower()

    for i in normalized:
        if i in count:
            count[i] += 1
        else:
            count[i] = 1

    for i in count.values():
        if i >= 2:
            duplicates += 1
            
    return duplicates """

# Clever solution
# return len([c for c in set(s.lower()) if s.lower().count(c)>1])

# Your code goes here
@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Tests")
    def basic_tests():
        test.assert_equals(duplicate_count(""), 0)
        test.assert_equals(duplicate_count("abcde"), 0)
        test.assert_equals(duplicate_count("abcdeaa"), 1)
        test.assert_equals(duplicate_count("abcdeaB"), 2)
        test.assert_equals(duplicate_count("Indivisibilities"), 2)
