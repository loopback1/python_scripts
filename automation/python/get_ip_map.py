#!/usr/bin/env python
#
#
# by: lima
#
#
#

import sys
import toolbox
import re


if len(sys.argv) < 1:
    print ' usage: ' + sys.argv[0] + ' ip.txt' 
    print 'ip.txt must contain two fields: \
           xxxxxx 10.1.1.x \
           no spaces allowed on f2 \
    '

file = sys.argv[1]



def clean_ip(ip):
    r  = re.search('([0-9]{1,3}\.[0-9]{1,3})(\.[0-9]{1,3}\.[0-9]{1,3})', ip)
    firstpart = r.group(1)
    secondpart = r.group(2)
    return firstpart, secondpart 

def compare_to_dictonary(line):
    '''
    make sure line is clean and there are only two fields:
    ABCDEFG 1.2.3.4
    spaces in f2 will break this function
    '''
    tid, ip = line.split(',')
    tid = tid.strip()
    ip = ip.strip()
    if not ip:
        ip == 'n/a'
    # firstpart, secondpart = ip[:len(ip) / 2], ip[len(ip) /2:]
    firstpart, secondpart = clean_ip(ip)
    if firstpart in nat_d.keys():
        nat_ip = nat_d[firstpart] + secondpart
        new_line = tid + "," + ip + "," + nat_ip
    else:
        new_line = tid + "," + ip + ",n/a"
    return new_line

def write_to_file(write_list):
    with open('new_ip.csv', 'w') as f:
        for line in write_list:
            f.write(line + '\n')

def main():
    with open(file, 'r') as f:
        write_list = [compare_to_dictonary(x) for x in f]
    write_to_file(write_list)
    
if __name__ == '__main__':
    # create two list to zip as key, values to a dictionary
    real_prefix = toolbox.generate_ip_prefix(10,16,32)
    nat_prefix = toolbox.generate_ip_prefix(30,240,256)

    # zip two list and return dictionary
    nat_d = dict(zip(real_prefix, nat_prefix))
    main()
