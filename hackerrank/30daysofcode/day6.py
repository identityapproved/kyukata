num_of_rows = int(input())
for row in range(num_of_rows):
    stdin_word = input()
    start_letters = ''
    end_letters = ''

    for i, letter in enumerate(stdin_word):
        if i % 2 == 0:
            start_letters += letter
        else:
            end_letters += letter
    print(f'{start_letters} {end_letters}')
