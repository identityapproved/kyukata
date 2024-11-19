from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def check_tree(self, root: Optional[TreeNode]) -> bool:
        return root.val == root.left + root.right

true_test = TreeNode(46, 23, 23)

solve_true = Solution()

print(solve_true.check_tree(true_test))

# leetcode accepted
# return True if root.left.val + root.right.val == root.val else False
