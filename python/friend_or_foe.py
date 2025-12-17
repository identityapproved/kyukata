from curses.ascii import isalnum

""" def friend(names):
    my_friends = list()
    for name in names:
        letters = [l for l in name]
        contain_digits = name.isdigit()
        if len(letters) == 4 and contain_digits == False:
            my_friends.append(name)

    print(my_friends)
 """


""" def friend(names):
    friend_names = [
        name for name in names if name.isdigit() == False and len(name) == 4]
    print(friend_names)
    return friend_names
 """

# Best practieces


def friend(x):
    return [f for f in x if len(f) == 4]


friend(["Ryan", "Kieran", "Mark"])  # ["Ryan", "Mark"]
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])  # ["Ryan"]
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke",
       "sixtyiscooooool"])  # ["Jimm", "Cari", "aret"]
