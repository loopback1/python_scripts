"""
lima 6/16/2017
multiprocessing works better in linux... forking is not supported in windows
... just run this in linux and move on...
12
"""
#!/usr/bin/env python
# from __future__ import absolute_import, division, print_function
import netmiko
# import my get_creds.py functions
import get_creds
from multiprocessing import pool
import json

device_type = 'cisco_asa'

username, password = get_creds.get_credentials()

device_ip = '''
10.x.y.z
10.x.y.z
'''.strip().splitlines()


def my_function(i):
    try:
        connection = netmiko.ConnectHandler(ip=i, device_type='cisco_asa', username=username, password=password,
                                            secret=password)
        #hostname = connection.send_command('show run hostname').strip().split()
        hostname = connection.find_prompt()
        connection.config_mode()
        x = connection.send_command('sh run ssh | i 10.x.y.z')
        x = connection.send_command('no logging host Inside 1.2.2.2')
        # x = connection.send_command('no logging host inside 10.x.y.z')
        # x = connection.send_command('sh run | i logging host')
        connection.disconnect()
        print '%s: %s' % (hostname, 'done')
        # print '%s: %s' % (hostname[1], x)
    except Exception as e:
        print '%s: %s' % (i, e)


pool = Pool(16)
pool.map(my_function, device_ip)
#pool.close
#pool.join()
