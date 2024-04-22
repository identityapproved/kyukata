# 7 kyu
# Vowel Count

# Return the number (count) of vowels in the given string.
# We will consider a, e, i, o, u as vowels for this Kata (but not y).
# The input string will only consist of lower case letters and/or spaces.

def get_count(sentence):
    return len([i for i in sentence if i in 'aeiou'])

def test_get_count():
    assert get_count("aeiou") == 5  # Test for 'aeiou'
    assert get_count("y") == 0  # Test for 'y'
    assert get_count("bcdfghjklmnpqrstvwxz y") == 0  # Test for 'bcdfghjklmnpqrstvwxz y'
    assert get_count("") == 0  # Test for empty string
    assert get_count("abracadabra") == 5  # Test for 'abracadabra'

if __name__ == "__main__":
    test_get_count()
    # get_count("aei")
