#!/usr/bin/env python


import Exscript.util.file as euf
import Exscript.util.start as eus
import Exscript.util.match as eum
from Exscript import Account

hosts = euf.get_hosts_from_file('ips.txt')

threads = 8

print "\nClearing crypto sa sessions with: " + str(threads) + " threads\n"

def clear_sa(job, hosts, conn):
    conn.execute('clear crypto sa')

eus.quickstart(hosts, clear_sa, max_threads = threads)


