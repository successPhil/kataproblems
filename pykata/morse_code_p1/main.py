from preloaded import MORSE_CODE

def decode_morse(morse_code):
    decoded = "";
    morse = morse_code.strip().split('   ')
    for code in morse:
        letters = code.strip().split(' ')
        for chars in letters:
            decoded += MORSE_CODE.get(chars, '')
        decoded += ' '
        
    return decoded.strip()    
    # Remember - you can use the preloaded MORSE_CODE dictionary:
    # For example: 
    # MORSE_CODE['.-'] = 'A'
    # MORSE_CODE['--...'] = '7'
    # MORSE_CODE['...-..-'] = '$'
    pass