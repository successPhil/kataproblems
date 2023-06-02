def positive_sum(arr):
    if len(arr) == 0:
        return 0
    sum_pos_nums = 0
    for num in arr:
        if num > 0:
            sum_pos_nums += num
    return sum_pos_nums

print(positive_sum([1,2,3,4,5])) # expected => 15
print(positive_sum([-1,2,-3,-4,5])) # expected => 7
print(positive_sum([-1,-2,-3,-4,-5])) # expected => 0
print(positive_sum([])) # expected => 0
