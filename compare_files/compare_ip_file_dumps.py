#compare 2 IP dumps 
#check to see if ips in file2 are in file1

import re

def get_ip_from_file(file):

    with open(file) as f:

        x = [y.strip() for y in f]

        ip_list = [re.findall('[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}', t) for t in x]

        return ip_list



def parse(file):

    filter = get_ip_from_file(file)

    filter_finish =  {x for i in filter for x in i}

    return sorted(filter_finish)



old = parse("ip.csv")

new = parse("ip2.csv")



report = [x for x in new if x in old]



print "IPs in file2 that EXIST in file1:\n\n"

for i in report:

    print i

    

print "\n\nfile1 unique IPs: " + str(len(old))

print "file2 unique IPs: " + str(len(new))

print "found: " + str(len(report))



#command line version

import re
import sys

def get_ip_from_file(file):
    with open(file) as f:
        x = [y.strip() for y in f]
        ip_list = [re.findall('[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}', t) for t in x]
        return ip_list

def parse(file):
    filter = get_ip_from_file(file)
    filter_finish =  {x for i in filter for x in i}
    return sorted(filter_finish)

old = parse(sys.argv[1])
new = parse(sys.argv[2])

report = [x for x in new if x in old]

print "IPs in %s that EXIST in %s:\n\n" % (sys.argv[1], sys.argv[2])
for i in report:
    print i
    
print "\n\n%s has: %d" %(sys.argv[1], len(old))
print "%s has: %d" % (sys.argv[2], len(new))
print "total found: " + str(len(report))
