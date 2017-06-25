# function to get credentials
# asks for username and verifies password twice

from getpass import getpass


def get_input(prompt=''):
    try:
        line = raw_input(prompt)
    # for python3 compatability.. use input()
    except NameError:
        line = input(prompt)
    return line


def get_credentials():
    ''' prompts for, and returns a username and password 

    call using:  username, password = get_credentials()

    '''
    username = get_input('Enter username: ')
    password = None
    while not password:
        password = getpass()
        password_verify = getpass('Retype your password: ')
        if password != password_verify:
            print 'passwords do not match..\n'
            password = None
    return username, password
