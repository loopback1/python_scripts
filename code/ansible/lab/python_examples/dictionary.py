
"python nested dictionary with a list"
# contains a list inside a dictionary
servers = { "dns1": "10.1.1.1", "ntp_servers": [ "4.2.2.2", "9.9.9.9" ] }


# server dictionary keys
                            # ntp_server key, has a list as its value with 2
                            # index, 0 and 1.  [0] = 4.2.2.2, [1] = 9.9.9.9

"ansible yaml nested dictionary"
servers: # dictionary name
    dns1: 10.1.1.1 # key "dns1"
    ntp_servers: # key "ntp_servers"
        - 4.2.2.2 # ntp_servers key has a list, item [0] is 4.2.2.2
        - 9.9.9.9 # ntp_servers key has a list, item [1] is 9.9.9.9

# calling nested dictionaries in playbooks
{{ servers.dns1 }} # = 10.1.1.1
{{ servers.ntp_servers }} # = [ "4.2.2.2", "9.9.9.9" ] returns the whole list
{{ servers.ntp_servers[0] }} # = 4.2.2.2
{{ servers.ntp_servers[1] }} # = 9.9.9.9

# another way to get the same keys/values
{{ servers["dns1"] }} # = 10.1.1.1
{{ servers["ntp_servers"] }} #[ "4.2.2.2", "9.9.9.9" ] returns the whole list
{{ servers["ntp_servers"][0] }} # = 4.2.2.2
{{ servers["ntp_servers"][1] }} # = 9.9.9.9


