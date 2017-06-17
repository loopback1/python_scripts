#!/usr/bin/env python

# lima 6/16/2017
# multiprocessing works better in linux... forking is not supported in windows
# ... just run this in linux and move on...
# 
# from __future__ import absolute_import, division, print_function

import netmiko
from multiprocessing import Pool
from getpass import getpass
# from netmiko import ConnectionHandler
import json

device_type = 'cisco_asa'
username = raw_input('enter user: ')
password = getpass('enter pass: ')

def get_ips():
    with open('/home/jlima/asa_ip.txt') as f:
        return [x.strip() for x in f]


"""
device_ip = '''
10.1.1.1
10.1.2.2
'''.strip().splitlines()

"""

device_ip = get_ips()

def route_lookup(y):
    return y.split()[-1]


def my_function(i):
    try:
        connection = netmiko.ConnectHandler(ip=i, device_type='cisco_asa', username=username, password=password,
                                            secret=password)
        hostname = connection.send_command('show run hostname').strip().split()
        connection.config_mode()
        y = connection.send_command('sh run ssh | i 10\.3\.')

        #x = connection.send_command('sh route 10.245.3.0 | i , via')
        #connection.send_command('ssh 10.245.240.0 255.255.255.0 ' + route_lookup(x))
        #connection.send_command('ssh 10.245.242.0 255.255.255.0 ' + route_lookup(x))
#        y = connection.send_command('sh run ssh | i 10\.3\.')

        #x = connection.send_command('no logging host inside 10.1.40.5')
        #x = connection.send_command('sh run | i logging host')
        connection.disconnect()
        print '%s: %s \n' % (hostname[1], 'done')
        print '%s' % (y)
    except netmiko.NetMikoTimeoutException:
        print '%s: timeout' % (i)


pool = Pool(16)
pool.map(my_function, device_ip)
#pool.close
#pool.join()
