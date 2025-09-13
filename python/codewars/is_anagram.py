# write the function is_anagram

# def is_anagram(test, original):
    # test_set = set([i for i in test.lower()])
    # original_set = set([i for i in original.lower()])
    # if test_set.issuperset(original_set):
        # return True
    # return False

# def is_anagram(test, original):
    # t_set = sorted([i for i in test.lower()])
    # o_set = sorted([i for i in original.lower()])
    # if len(t_set)==len(o_set) and t_set == o_set:
        # return True
    # return False

# def is_anagram(test, original):
    # return sorted([i for i in test.lower()]) == sorted([i for i in original.lower()])

def is_anagram(test, original):
    return sorted(test.lower()) == sorted(original.lower())

print(is_anagram("foefet", "toffee") == True, 'The word foefet is an anagram of toffee')
print(is_anagram("Buckethead", "DeathCubeK") == True, 'The word Buckethead is an anagram of DeathCubeK')
print(is_anagram("Twoo", "WooT") == True, 'The word Twoo is an anagram of WooT')
print(is_anagram("dumble", "bumble") == False, 'Characters do not match for test case dumble, bumble')
print(is_anagram("ound", "round") == False, 'Missing characters for test case ound, round')
print(is_anagram("apple", "pale") == False, 'Same letters, but different count')
