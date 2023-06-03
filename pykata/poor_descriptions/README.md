# Sum of first nth term series <7kyu>

# Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
# Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

# Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

Notes: I placed this in my poor_descriptions directory because the problem was very vague, more effort should have been put into the README / description

The problem is written in a way that might make you think there is a list or series that you are checking.. but the problem is asking us to build the example series based on the number of terms n.
Finally it wants us to return the calculation of that series as a string with 2 decimal places.