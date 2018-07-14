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
import sqlite3
from scapy.all import *


# known and trusted SSIDs
trusted_ssid = ['ssid1', 'ssid2']

# init client db
client_db = {}

# log file
log_file = '/home/jlima/wifi.beacon.log'
sqlite3_db = '/home/jlima/rogue_wifi_beacons.db'

def send_mail(body):
    try:
        gmail_user = 'user@gmail.com'
        gmail_password = 'pass'
        to = ['xxxx@mms.att.net']
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login(gmail_user, gmail_password)
        server.sendmail(gmail_user, to, body)
        server.close()
    except Exception as e:
        print(e)

def check_client_db(client, ssid, arrival_time):
    header = '\n\n' + arrival_time + '\n'
    if not client in client_db:
        client_db[client] = [ssid]
        body = header + 'new: ' + client + ' -> ssid: ' + ssid
        send_mail(body)
        print('{}: new: {} -> ssid: {}'.format(arrival_time,client,ssid))
    elif client in client_db and ssid not in client_db[client]:
        client_db[client].append(ssid)
        body = header + 'update: ' + client + ' ssids: ' + str(client_db[client])
        send_mail(body)
        print('{}: update: {} -> ssids: {}'.format(arrival_time,client, client_db[client]))

def client_db_insert(db, client, ssid, arrival_time, day_of_week):
    db.execute('INSERT INTO clients VALUES (?,?,?,?)', (day_of_week, arrival_time, client, ssid ) )
    db.commit()

def pkt_handler(pkt):
    if pkt.haslayer(Dot11):
        try:
            if '\x00' in pkt.info:
                pass
            elif pkt.info not in trusted_ssid and len(pkt.info) > 0:
                arrival_time = datetime.fromtimestamp(pkt.time).strftime('%Y-%m-%d %H:%M:%S')
                day_of_week = datetime.fromtimestamp(pkt.time).strftime('%a')
#                with open(log_file, 'a') as f:
#                    f.write(arrival_time + ', ' + pkt.info + ', ' + pkt.addr2 + '\n')
                check_client_db(pkt.addr2, pkt.info, arrival_time)
                client_db_insert(db, pkt.addr2, pkt.info, arrival_time, day_of_week)
        except AttributeError:
            pass


if __name__ == '__main__':
    try:
        db = sqlite3.connect(sqlite3_db)
        db.execute('CREATE TABLE IF NOT EXISTS clients(dow text, date text, \
                client text, ssid text)')
        db.commit()
        sniff(iface="mon0", count=0, prn=pkt_handler, \
                lfilter=lambda p: p.haslayer(Dot11Beacon) or p.haslayer(Dot11ProbeResp) \
                or p.haslayer(Dot11ProbeReq), store=0)
        db.close()
    except Exception as e:
        db.close()
        print(e)
    finally:
        db.close()




