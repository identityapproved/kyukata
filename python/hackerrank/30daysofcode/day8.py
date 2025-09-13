number_of_pairs = int(input())
phone_book = {}
for _ in range(number_of_pairs):
    row = input()
    name, number = row.split(' ')
    phone_book[name] = number

for _ in range(number_of_pairs):
    query = input()
    if query in phone_book.keys():
        print(f'{query}={phone_book[query]}')
    else:
        print('Not found')
