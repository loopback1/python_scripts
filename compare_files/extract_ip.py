import re
import sys
#from netaddr import CIDR, IP

file = sys.argv[1]

def get_ips(file):
    with open(file) as f:
        x = [x.strip() for x in f]
        ips = [re.findall('[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}', t) for t in x]
        clean_ips = {x for i in ips for x in i}
        return list(clean_ips)

for i in get_ips(file):
    print i

