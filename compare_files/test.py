import sys
import re


x = 'fff.s1112-ffff.ssss'

y = re.sub('[-.]', '', x)

print y

for i in range(100):
    print i
    