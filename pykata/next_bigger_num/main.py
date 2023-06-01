def next_bigger_number(num):
    digits = list(str(num))
    length = len(digits)
    
    pivot_index = length - 2
    for i in range(length - 2, -1, -1):
        if digits[i] < digits[i + 1]:
            pivot_index = i
            break
    else:
        return -1

    suffix_start_idx = length - 1
    while digits[suffix_start_idx] <= digits[pivot_index]:
        suffix_start_idx -= 1

    digits[pivot_index], digits[suffix_start_idx] = digits[suffix_start_idx], digits[pivot_index]

    left = pivot_index + 1
    right = length - 1
    while left < right:
        digits[left], digits[right] = digits[right], digits[left]
        left += 1
        right -= 1

    return int("".join(digits))

# Test cases
print(next_bigger_number(12))     # Output: 21
print(next_bigger_number(21))     # Output: -1
print(next_bigger_number(513))    # Output: 531
print(next_bigger_number(2017))   # Output: 2071
print(next_bigger_number(414))    # Output: 441
print(next_bigger_number(144))    # Output: 414
