#!/usr/bin/env python

import Exscript.util.file as euf
import Exscript.util.start as eus
import Exscript.util.match as eum
# import Exscript.protocols.drivers
from Exscript import Account

hosts = euf.get_hosts_from_file('hosts_mass_config.txt')


def mass_commands(job, hosts, conn):
    #    conn.send("enable\r")
    #    conn.auto_app_authorize(accounts)
    conn.execute('conf t')
    mass_commands_file = 'mass_commands.txt'
    with open(mass_commands_file, 'r') as f:
        for line in f:
            conn.execute(line)

            # conn.execute('show run')
            # get hostname of the device
            # hostname = eum.first_match(conn, r'^hostname\s(.*)$')
            # cfg_file = '/home/xxxx/python/configs/firewalls/' + hostname.strip() + '.cfg'
            # config = conn.response.splitlines()
            # some clean up
            # for i in range(3):
            #    config.pop(i)
            # config.pop(-0)
            # config.pop(-1)
            # write config to file

            # with open(cfg_file, 'w') as f:
            #    for line in config:
            #        f.write(line + '\n')


# eus.start(accounts, hosts, mass_commands, max_threads = 8)
eus.quickstart(hosts, mass_commands, max_threads=8)
