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



old = parse("C:\python27\ip.csv")

new = parse("C:\python27\ip2.csv")



report = [x for x in new if x in old]



print "IPs in file2 that EXIST in file1:\n\n"

for i in report:

    print i


print "\n\nfile1 unique IPs: " + str(len(old))

print "file2 unique IPs: " + str(len(new))

print "found: " + str(len(report))

#test
