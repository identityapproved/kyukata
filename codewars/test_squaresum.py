import unittest
from squaresum import square_sum 
# square_sum unittest asserts
class TestCodewars(unittest.TestCase):
    def test_square_sum_assertions(self):
        self.assertEqual(square_sum([1,2]), 5)
        self.assertEqual(square_sum([0, 3, 4, 5]), 50)
        self.assertEqual(square_sum([]), 0)
        self.assertEqual(square_sum([-1,-2]), 5)
        self.assertEqual(square_sum([-1,0,1]), 2)

if __name__ == '__main__':
    unittest.main()
