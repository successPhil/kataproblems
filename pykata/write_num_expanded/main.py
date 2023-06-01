def expanded_form(num):
    digits = list(str(num))
    result = []
    for i, digit in enumerate(digits):
        if digit != '0':
            result.append(digit + '0' * (len(digits) - i - 1))
    return ' + '.join(result)

print(expanded_form(71052))