def series_sum(n):
    if n == 0:
        return "0.00"
    
    total_sum = 0
    for i in range(n):
        series_num = 1 / (1 + 3 * i)
        total_sum += series_num
    return f'{total_sum:.2f}'

print(series_sum(3))