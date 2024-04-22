import unittest
from squaresum import square_sum 
from boiledeggs import cooking_time 

class TestCodewars(unittest.TestCase):

    def test_square_sum_assertions(self):
        self.assertEqual(square_sum([1,2]), 5)
        self.assertEqual(square_sum([0, 3, 4, 5]), 50)
        self.assertEqual(square_sum([]), 0)
        self.assertEqual(square_sum([-1,-2]), 5)
        self.assertEqual(square_sum([-1,0,1]), 2)

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

if __name__ == '__main__':
    unittest.main()
