def square_sum(numbers):
    total = 0
    for num in numbers:
        total += num ** 2
    return total

print(square_sum([1,2,2]))