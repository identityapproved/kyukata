# Square(n) Sum
# 8 kyu

# Complete the square sum function so that it squares each number passed into it and then sums the results together.

# For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

def square_sum(numbers):
    return  sum([i*i for i in numbers]) # i ** 2

# pytest asserts
def test_square_sum():
    assert square_sum([1,2])== 5
    assert square_sum([0, 3, 4, 5]) == 50
    assert square_sum([]) == 0
    assert square_sum([-1,-2]) == 5
    assert square_sum([-1,0,1]) == 2

if __name__ == '__main__':
    test_square_sum()
