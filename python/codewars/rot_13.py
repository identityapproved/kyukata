def rot13(message):
    encoded = ''
    
    for letter in message:
        charCode = ord(letter)

        if charCode >= 65 and charCode <= 90:
            newCharCode = charCode + 13
            if newCharCode > 90:
                newCharCode = 64 + (newCharCode - 90)

            encoded += chr(newCharCode)
            
        elif charCode >= 97 and charCode <= 122:
            newCharCode = charCode + 13
            if newCharCode > 122:
                newCharCode = 96 + (newCharCode - 122)

            encoded += chr(newCharCode)

        else:
            encoded += letter
            
    return encoded

            

res = rot13('test')
print(res)
print(res == 'grfg')
