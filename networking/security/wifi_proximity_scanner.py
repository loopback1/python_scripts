#!/usr/bin/env python
# -*- coding: utf-8 -*-
'''
client SSID beacon sniffer

used to monitor night activity around the house from untrusted wifi clients.

requires aircrack-ng + scapy and decent wifi nic to monitor for frames.

maintains client database and trusted SSID list used to ignore clients looking for local APs (neighbors etc)

'''
import smtplib
import time
from scapy.all import *

# known and trusted SSIDs
trusted_ssid = ['ssid1', 'ssid2', 'ssid3']

# init client db
client_db = {}

# log file
log_file = '/home/path/to.log'

def send_mail(body):
    try:
        gmail_user = 'xyz@gmail.com'
        gmail_password = 'gmailpass'
        to = ['xxxxxxx@mms.att.net']
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login(gmail_user, gmail_password)
        server.sendmail(gmail_user, to, body)
        server.close()
    except Exception as e:
        print(e)

def check_client_db(client, ssid):
    header = '\n\n' + str(time.ctime()) + '\n'
    if not client in client_db:
#        client_db[client] = []
        client_db[client] = [ssid]
        body = header + 'new client: ' + client + ' -> ssid: ' + ssid
        send_mail(body)
        print('{}: new client: {} -> ssid: {}'.format(str(time.ctime()),client,ssid))
    elif client in client_db and ssid not in client_db[client]:
        client_db[client].append(ssid)
        body = header + 'repeat client: ' + client + ' ssids: ' + str(client_db[client])
        send_mail(body)
        print('{}: updating existing client: {} -> ssids: {}'.format(str(time.ctime()),client, client_db[client]))


def pkt_handler(pkt):
    if pkt.haslayer(Dot11):
        try:
            if '\x00' in pkt.info:
                pass
            elif pkt.info not in trusted_ssid and len(pkt.info) > 0:
                with open(log_file, 'a') as f:
                    f.write(time.strftime('%c') + ', ' + pkt.info + ', ' + pkt.addr2 + '\n')
                check_client_db(pkt.addr2, pkt.info)
        except AttributeError:
            pass

sniff(iface="mon0", count=0, prn=pkt_handler, lfilter=lambda p: p.haslayer(Dot11Beacon) or p.haslayer(Dot11ProbeResp) or p.haslayer(Dot11ProbeReq), store=0)
