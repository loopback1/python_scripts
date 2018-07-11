#!/usr/bin/env python
'''
listens for near by beacons and extracts client MAC and AP SSID
used for knowing when cellphones are near by which are looking for APs to connect..
someone walking by the property at night etc..
will send sms text to cell phone using gmail..

requires aircrack-ng to put nic into monitor mode

'''
import smtplib
from scapy.all import *
import time

def send_mail(body):
    try:
        gmail_user = 'username@gmail.com'
        gmail_password = 'password'
        to = ['xxxxxxxx@mms.att.net']
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login(gmail_user, gmail_password)
        body = '\n\nnew wifi client:\n' + body + '\n\n'
        server.sendmail(gmail_user, to, body)
        server.close()
    except Exception as e:
        print(e)

# known SSIDs near
known_ssid = []

def Handler(pkt):
    if pkt.haslayer(Dot11):
        try:
# ignore binary names/unicode
            if '\x00' in pkt.info:
                pass
            elif pkt.info not in known_ssid and len(pkt.info) > 0:
                known_ssid.append(pkt.info)
                body = str(time.ctime()) + '\n' + pkt.info + ' ' + pkt.addr2
                send_mail(body)
                print(pkt.info, pkt.addr2)
                print(known_ssid)
        except AttributeError:
            pass

'''
sudo airmon-ng start wlanX
'''
sniff(iface="mon0", count=0, prn=Handler, lfilter=lambda p: p.haslayer(Dot11Beacon) or p.haslayer(Dot11ProbeResp) or p.haslayer(Dot11ProbeReq), store=0)
