#[
    8 kyu
    Keep up the hoop
    Write a program where Alex can input (n) how many times the hoop goes round
    and it will return him an encouraging message:

    If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
    If he doesn't get 10 hoops, return the string "Keep at it until you get it".
]#

proc hoopCount*(n: int): string =
  case n
  of n >= 10: return "Great, now move on to tricks"
  of n < 10: return "Keep at it until you get it"

echo(hoopCount(10))
echo(hoopCount(8))
