#[
    8 kyu
    Even or Odd
    https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/nim
    Create a function that takes an integer as an argument
    and returns "Even" for even numbers or "Odd" for odd numbers.
]#

proc evenOrOdd*(n: int): string =
  var num: int = n
  if (n == 0): return "Even"
  elif (num < 0): 
    num = num * -1
  let modn: int = num mod 2
  if modn == 1:
    return "Odd"
  else:
    return "Even"

proc clever*(n: int): string =
  ["Even", "Odd"][n and 1]

proc bestPractices*(n: int): string =
  if n %% 2 == 0: "Even" else: "Odd"

echo(evenOrOdd(-1))
echo(evenOrOdd(2))
echo(evenOrOdd(3))
echo(evenOrOdd(4))
