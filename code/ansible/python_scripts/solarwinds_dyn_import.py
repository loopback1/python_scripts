#!/var/lib/awx/venv/ansible/bin/python

# jlima 
# 7/22/2017
# import devices from solarwinds to ansible Tower leveraging custom properties on the node. swis queries can be generated
# using windows swis tool from solarwinds SDK, requires local read only account to run on.
# needs work to separate host results by groups...
# DEVICE_TYPE is a custom property assigned to nodes.. can be a regular attribute like Vendor etc..
#
# requires python module: https://github.com/solarwinds/orionsdk-python
# drop orionsdk folder into: /var/lib/awx/venv/ansible/lib/python2.7/site-packages
#
# windows SWIS query tool: https://github.com/solarwinds/OrionSDK/releases
#

import json
import requests
from orionsdk import SwisClient

device_type = "'Router'"

npm_server = '1.2.3.4'
username = 'username'
password = 'password'

verify = False
if not verify:
    from requests.packages.urllib3.exceptions import InsecureRequestWarning
    requests.packages.urllib3.disable_warnings(InsecureRequestWarning)


swis = SwisClient(npm_server, username, password)


results = swis.query( "SELECT TOP 1000 IPAddress FROM Orion.Nodes I WHERE Status = '2' AND I.CustomProperties.DEVICE_TYPE = " + device_type )

# results = swis.query( "SELECT TOP 1000 I.CustomProperties.ATM_OOB_IP FROM Orion.Nodes I WHERE Status = '2' AND I.CustomProperties.ATM_CLIENT_NAME = " + other_value )

# results = swis.query( "SELECT TOP 1000 I.CustomProperties.ATM_OOB_IP FROM Orion.Nodes I WHERE Status = '2' AND I.CustomProperties.ATM_CLIENT_NAME = " + some_value )

data = {'_meta': {'hostvars': {}}, 'hosts' : []} 

def get_inv(sw_results):
    for i in sw_results['results']:
        for k,v  in i.items():
            data['hosts'].append(v)
    print(json.dumps(data, sort_keys=True, indent=2))
         
get_inv(results)

