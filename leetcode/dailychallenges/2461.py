# https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k

# Tags: Array, Hash Table, Sliding Window

from typing import List
from collections import Counter

def maximumSubarraySum(nums: List[int], k: int) -> int:
    """
    This function finds the maximum sum of a subarray with exactly 'k' unique elements
    using the sliding window technique and hash table (Counter).

    Parameters:
    - nums: List[int] -> Array of integers
    - k: int -> Desired subarray length

    Returns:
    - int -> Maximum sum of a subarray with 'k' unique elements
    """

    # Create a Counter for the first `k` elements of the array
    k_counter = Counter(nums[:k])  # Tracks the frequency of elements in the current window
    print("Initial Counter:", k_counter)

    # Calculate the sum of the first `k` elements
    current_sum = sum(nums[:k])  # Current sum of the sliding window
    print("Initial Sum:", current_sum)

    # Initialize the maximum sum. Only valid if the first window has exactly `k` unique elements
    max_sum = current_sum if len(k_counter) == k else 0

    # Iterate over the array from index `k` to the end, sliding the window one step at a time
    for i in range(k, len(nums)):
        # Add the next element to the window
        k_counter[nums[i]] += 1  # Increment frequency of the new element
        current_sum += nums[i]  # Add its value to the current sum

        # Remove the element that slides out of the window
        k_counter[nums[i - k]] -= 1  # Decrement frequency of the outgoing element
        current_sum -= nums[i - k]  # Subtract its value from the current sum

        # If the frequency of the outgoing element becomes zero, remove it from the Counter
        if k_counter[nums[i - k]] == 0:
            del k_counter[nums[i - k]]  # Remove element with zero frequency

       # If the current window has exactly `k` unique elements, update the maximum sum
        if len(k_counter) == k:
            max_sum = max(max_sum, current_sum)
        else:
            # Debugging output for cases where the unique count is not `k`
            print("Current Window Counter:", k_counter)
            print("Current Window Sum:", current_sum)

    return max_sum

# Example usage and debugging
if __name__ == '__main__':
    # Test case: Find the maximum sum of a subarray of length `k` with unique elements
    result = maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)
    print("Maximum Subarray Sum:", result)


