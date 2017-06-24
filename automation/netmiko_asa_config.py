#!/usr/bin/env python

# lima 6/16/2017
# multiprocessing works better in linux... forking is not supported in windows
# ... just run this in linux and move on...
#
# from __future__ import absolute_import, division, print_function
# requires my get_creds.py file

# from netmiko import ConnectionHandler
import netmiko
# import my get_creds.py functions
import get_creds
from multiprocessing import Pool
import json

device_type = 'cisco_asa'

username, password = get_creds.get_credentials()


def get_ips():
    with open('/home/xyz/asa_ip.txt') as f:
        return [x.strip() for x in f]


"""
# different way to feed ips to my_function

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
        connection = netmiko.ConnectHandler(ip=i, device_type=device_type, username=username, password=password,
                                            secret=password)
        #hostname = connection.send_command('show run hostname').strip().split()
        hostname = connection.find_prompt()
        connection.config_mode()
        y = connection.send_command('sh run ssh | i 10\.3\.')

        # x = connection.send_command('sh route 10.x.y.0 | i , via')
        # connection.send_command('ssh 10.x.y.z.0 255.255.255.0 ' + route_lookup(x))
#        y = connection.send_command('sh run ssh | i 10\.3\.')

        connection.disconnect()
        print '%s: %s \n' % (hostname, 'done')
        print '%s' % (y)
    except Exception as e:
        print '%s: %s' % (i, e)


pool = Pool(16)
pool.map(my_function, device_ip)

# pool.close
# pool.join()
