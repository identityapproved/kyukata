# 7 kyu
# Boiled Eggs

# Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

# Rules:
    # you can put at most 8 eggs into the pot at once
    # it takes 5 minutes to boil an egg
    # we assume, that the water is boiling all the time (no time to heat up)
    # for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

# Example (Input --> Output)
# 0 --> 0
# 5 --> 5
# 10 --> 10

import math

# def cooking_time(eggs):
#     result = math.ceil(eggs/8)*5 if eggs > 0 else 0
#     print(f"Eggs: {eggs}, Result: {result}")
#     return result

def cooking_time(eggs):
    full_batches = eggs // 8
    remaining_eggs = eggs % 8
    if remaining_eggs > 0:
        return (full_batches + 1) * 5
    else:
        return full_batches * 5 if eggs > 0 else 0

def test_cooking_time():
    assert cooking_time(0) == 0  # Test for 0 eggs
    assert cooking_time(1) == 5  # Test for 1 egg
    assert cooking_time(5) == 5  # Test for 5 eggs
    assert cooking_time(8) == 5  # Test for 8 eggs
    assert cooking_time(9) == 10  # Test for 9 eggs
    assert cooking_time(10) == 10  # Test for 10 eggs
    assert cooking_time(16) == 10  # Test for 16 eggs
    assert cooking_time(20) == 15  # Test for 20 eggs
    assert cooking_time(100) == 65  # Test for 100 eggs

if __name__ == '__main__':
    test_cooking_time()
