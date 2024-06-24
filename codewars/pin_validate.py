# 7 kyu
# Regex validate PIN code
# https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/python
import re

# Epic fails
#
# def validate_pin(pin):
#     if pin.isalnum():
#         print(len(pin) in (4, 6))
#         return len(pin) in (4, 6)
#     else:
#         try:
#             pin_conv = str(int(pin)*-1) if int(pin) < 0 else str(pin)
#             print(pin_conv)
#         except ValueError:
#             pass
#         else:
#             pin_conv = str(float(pin)*-1) if float(pin) < 0 else str(pin)
#             print(pin_conv)
#         # return True if len(pin_conv) == 4 or len(pin_conv) == 6 else False
#


def validate_pin(pin):
    return bool(re.fullmatch(r"\d{4}|\d{6}", pin))
    # return len(pin) in (4, 6) and pin.isdigit()

# pin = int(pin)
# print(pin)
# pin_conv = re.sub(r'\W+', '', pin)


def test_validate_pin():
    assert validate_pin("12") is False
    assert validate_pin("123") is False
    assert validate_pin("12345") is False
    assert validate_pin("1234567") is False
    assert validate_pin("-1234") is False
    assert validate_pin("-12345") is False
    assert validate_pin("1.234") is False
    assert validate_pin("00000000") is False


if __name__ == '__main__':
    # validate_pin('123456')
    # validate_pin('-12345')
    # validate_pin('1.32345')
    test_validate_pin()
