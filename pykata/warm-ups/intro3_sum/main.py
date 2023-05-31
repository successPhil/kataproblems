def get_sum(a,b):
    if a == b:
        return a
    if a < b:
        start = a
        end = b
    else:
        start = b
        end = a
    sum = 0
    for i in range(start, end+1):
        sum += i
    return sum