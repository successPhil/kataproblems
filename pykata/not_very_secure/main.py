import re
def alphanumeric(password):
    alphanum = r'^[a-zA-Z0-9]+$'
    return re.match(alphanum, password) is not None

#Made a reg ex that will match if a string contains any characters in ranges a-z A-Z and 0-9.
# ^ beginning to $end
