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

    call using: 
         username, password = toolbox.get_credentials()

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

# get ip addresses from a file, one ip per line

def get_ips(ip_file):
    ''' 
    pull ips from file:
    supply ips in a single line
    10.1.1.1
    10.1.1.2
    10.1.1.3 
    etc...  
    call using:
         device_ips = toolbox.get_ips('ip.list.txt')
    '''
    with open(ip_file) as f:
        return [x.strip() for x in f]


def generate_ip_prefix(prefix, start_range, end_range):
    ''' 
    return a list of the first 2 octecs
    e.g. [ '10.240', '10.241' ] by combiging prefix + start_range (to end_range)
    '''
    my_list = [str(prefix) + '.' + str(x) for x in range(start_range, end_range)]
    return my_list
