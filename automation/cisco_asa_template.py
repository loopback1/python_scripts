"""
lima 6/16/2017
multiprocessing works better in linux... forking is not supported in windows
... just run this in linux and move on...

"""
#!/usr/bin/env python
#from __future__ import absolute_import, division, print_function
import netmiko
from multiprocessing import Pool
from getpass import getpass
#from netmiko import ConnectionHandler
import json

device_type='cisco_asa'
username = raw_input('enter user: ')
password = getpass('enter pass: ')

device_ip = '''
10.1.1.12
10.1.1.13
10.1.1.14
10.1.1.15
10.1.1.16
10.1.1.17
10.1.1.18
10.1.1.19
'''.strip().splitlines()

def my_function(i):
        try:
                connection = netmiko.ConnectHandler(ip=i, device_type='cisco_asa', username=username, password=password, secret=password)
                hostname = connection.send_command('show run hostname').strip().split()
                connection.config_mode()
                x = connection.send_command('no logging host TRANSIT 10.214.11.58')
                x = connection.send_command('no logging host vrf-wan 10.217.20.53')
                #x = connection.send_command('no logging host inside 10.1.40.5')
                #x = connection.send_command('sh run | i logging host')
                connection.disconnect()
                print '%s: %s' % (hostname[1], 'done')
                #print '%s: %s' % (hostname[1], x)
        except netmiko.NetMikoTimeoutException:
                print '%s: timeout' % (i)



pool = Pool(16)
pool.map(my_function, device_ip)
pool.close
pool.join()