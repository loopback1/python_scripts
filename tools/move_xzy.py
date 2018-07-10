#!/usr/bin/env python
'''
testing mouse movement

'''
import autopy
import signal
import os
import time

# IOerror on broken pipe
signal.signal(signal.SIGPIPE, signal.SIG_DFL)

# hanlde keyboard interrupt and exit
signal.signal(signal.SIGINT, signal.SIG_DFL)

while True:
    autopy.mouse.move(200,200)
    time.sleep(10)
    autopy.mouse.move(400,400)
    time.sleep(10)
