import unittest

from boiledeggs import cooking_time
from monotone_travel import is_monotone
from squaresum import square_sum
from vowelcount import get_count


class TestCodewars(unittest.TestCase):

    def test_square_sum_assertions(self):
        self.assertEqual(square_sum([1, 2]), 5)
        self.assertEqual(square_sum([0, 3, 4, 5]), 50)
        self.assertEqual(square_sum([]), 0)
        self.assertEqual(square_sum([-1, -2]), 5)
        self.assertEqual(square_sum([-1, 0, 1]), 2)

    def test_cooking_time_assertions(self):
        self.assertEqual(cooking_time(0), 0)
        self.assertEqual(cooking_time(1), 5)
        self.assertEqual(cooking_time(5), 5)
        self.assertEqual(cooking_time(8), 5)
        self.assertEqual(cooking_time(9), 10)
        self.assertEqual(cooking_time(10), 10)
        self.assertEqual(cooking_time(16), 10)
        self.assertEqual(cooking_time(20), 15)
        self.assertEqual(cooking_time(100), 65)

    def test_get_count_assertions(self):
        self.assertEqual(get_count("aeiou"), 5)
        self.assertEqual(get_count("y"), 0)
        self.assertEqual(get_count("bcdfghjklmnpqrstvwxz y"), 0)
        self.assertEqual(get_count(""), 0)
        self.assertEqual(get_count("abracadabra"), 5)

    def test_monotone_travel(self):
        self.assertEqual(
            is_monotone(list(range(1, 11))), True, "Should work on increasing lists"
        )
        self.assertEqual(
            is_monotone([5, 5, 5, 5, 5, 5, 5]), True, "Should work on constant lists"
        )
        self.assertEqual(is_monotone([]), True, "Should work on empty list")
        self.assertEqual(is_monotone([1]), True, "Should work on size 1 list")

        self.assertEqual(
            is_monotone(list(range(5, 0, -1))),
            False,
            "Should return false on a decreasing list",
        )
        self.assertEqual(
            is_monotone(list(range(5, -40, -1))),
            False,
            "Should return false on a decreasing list",
        )

    def test_title_case(self):
        self.assertEqual(title_case(""), "")
        self.assertEqual(
            title_case("a clash of KINGS", "a an the of"), "A Clash of Kings"
        )
        self.assertEqual(
            title_case("THE WIND IN THE WILLOWS", "The In"), "The Wind in the Willows"
        )
        self.assertEqual(title_case("the quick brown fox"), "The Quick Brown Fox")


if __name__ == "__main__":
    unittest.main()
