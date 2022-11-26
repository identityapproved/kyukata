num_of_rows = int(input())
for row in range(num_of_rows):
    stdin_word = input()
    start_letters = ''
    end_letters = ''

    for letter in stdin_word:
        if stdin_word.index(letter) % 2 == 0:
            start_letters += letter
        else:
            end_letters += letter
    print(f'{start_letters} {end_letters}')
