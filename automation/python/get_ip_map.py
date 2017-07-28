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

file = sys.argv[1]

def compare_to_dictonary(line):
    '''
    make sure line is clean and there are only two fields:
    ABCDEFG 1.2.3.4
    spaces in f2 will break this function
    '''
    tid, ip = line.split()
    firstpart, secondpart = ip[:len(ip) / 2], ip[len(ip) /2:]
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

    # create two list to zip as key, values to a dictionary
    real_prefix = toolbox.generate_ip_prefix(10,16,32)
    nat_prefix = toolbox.generate_ip_prefix(30,240,256)

    # zip two list and return dictionary
    nat_d = dict(zip(real_prefix, nat_prefix))

    with open(file, 'r') as f:
        write_list = [compare_to_dictonary(x) for x in f]
    write_to_file(write_list)
    
if __name__ == '__main__':
    main()
