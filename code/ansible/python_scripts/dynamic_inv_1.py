#!/var/lib/awx/venv/ansible/bin/python

# jlima 
# 7/24/2017
# 
#
# requires python module: https://github.com/solarwinds/orionsdk-python
# drop orionsdk folder into: /var/lib/awx/venv/ansible/lib/python2.7/site-packages
#
# windows SWIS query tool: https://github.com/solarwinds/OrionSDK/releases
#

import json
import requests
from orionsdk import SwisClient

client_name_value = "'sw group name'"

npm_server = '1.1.1.1'
username = 'username'
password = 'password'

verify = False
if not verify:
    from requests.packages.urllib3.exceptions import InsecureRequestWarning
    requests.packages.urllib3.disable_warnings(InsecureRequestWarning)


swis = SwisClient(npm_server, username, password)

# return OOB_IP from CustomProperties.CLIENT_NAME for nodes with status !=1 (up)
results = swis.query( "SELECT TOP 1000 I.CustomProperties.CUSTPROP_OOB_IP FROM Orion.Nodes I WHERE Status != '1' AND I.CustomProperties.CLIENT_NAME = " + client_name_value )

# speed things up a little
data = {'_meta': {'hostvars': {}}, 'hosts' : []} 

def get_inv(sw_results):
    for i in sw_results['results']:
        for k,v  in i.items():
            data['hosts'].append(v)
    print(json.dumps(data, sort_keys=True, indent=2))
         
get_inv(results)

