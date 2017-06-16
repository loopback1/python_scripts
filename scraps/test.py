

import netmiko

device= ''' 10.11.250.2
10.12.250.2
10.13.127.2
10.13.15.2
10.13.31.2
10.13.47.2
10.13.63.2 '''.strip().splitlines()

for i in device:
    print i