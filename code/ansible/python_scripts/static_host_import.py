# JLIMA 7/23/2017 
#
# CREATE DYNAMIC INVENTORY BY PASTING IP ADDRESSES ON SINGLE LINE
#
import re
import json

ip_list = '''
##################### ENTER IPs BELOW THIS LINE ######################
10.x.y.z
10.x.y.z




##################### ENTER IPs ABOVE THIS LINE ######################
'''.strip().splitlines()

data = {'_meta': {'hostvars': {}}, 'hosts' : []} 

def get_ips(ip_list):
    x = [x.strip() for x in ip_list]
    ips = [re.findall('[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}', t) for t in x]
    clean_ips = {x for i in ips for x in i}
    return sorted(list(clean_ips))

def get_inv(sw_results):
    for v in sw_results:
        data['hosts'].append(v)
    print(json.dumps(data, sort_keys=True, indent=2))
         
get_inv(get_ips(ip_list))

