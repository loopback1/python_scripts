#!/usr/bin/env python
'''calculate packet header overhead

requires python3

usage:

python3 calc_packet_overhead.py $1 $2 $3

    $1 = line speed in mbps
    $2 = average packet size expected
    $3 = ethernet overhead e.g. 18 bytes for ethernet +4 with dot1q

use whole numbers!

example:

    python calc_packet_overhead.py 500 128 18

500 = 500Mbps
128 = 128 byte avg packet size expected
18 = 14 byte ethernet header + 4 byte FCS frame(CRC32), dot1q = +4 bytes (22)

'''
# jose lima  5.19.2018

import sys


def calc_ethernet_overhead(raw_line_throughput, avg_packet_size, overhead):
    ''' Calculates maximun thoughput on a line including additonal L2/ethernet overhead \
    and returns appropiate shaping policy based on the addtional overhead expected.

    variable definitions:

        raw_line_throughput = in megabits/sec 500 for a 500Mbps line, 1000 for 1Gbps line etc.
        avg_packets_size = avg packet size expected on this line
        overhead = type of overhead e.g. ethernet = (14 byte header + 4 byte FCS)

    '''

    line_rate_bits = raw_line_throughput * 1000 * 1000

    packet_size_bits = (avg_packet_size + overhead) * 8

    max_packets_per_second = line_rate_bits / packet_size_bits

    max_throughput = max_packets_per_second * \
        avg_packet_size * 8 / (1000 * 1000)

    effective_percentage = (max_throughput / raw_line_throughput) * 100

    # calcuate total throughput with overhead
    total_including_overhead = raw_line_throughput + \
        (raw_line_throughput - max_throughput)

    # overhead_bits = total_including_overhead - int(raw_line_throughput)
    overhead_bits = total_including_overhead - raw_line_throughput

    return print("Line speed: {} Mbps\n \
    Avg packet size expected on this line: {} Bytes\n \
    Overhead using this packet size at full speed: ~ {} Mbps\n \
    Percentage available for use: {} %\n \
    QoS shaping policy needed to stay in boundaries: {} Mbps\n".format(raw_line_throughput,
                                                                       avg_packet_size, round(
                                                                           overhead_bits, 2),
                                                                       int(
                                                                           effective_percentage),
                                                                       round(max_throughput, 2)))


my_help = '''calculate ethernet overhead

requires python3

usage:

python3 calc_packet_overhead.py $1 $2 $3

    $1 = line speed in mbps
    $2 = average packet size expected
    $3 = ethernet overhead e.g. 18 bytes for ethernet

use whole numbers!

example:

    python calc_packet_overhead.py 500 128 18

500 = 500Mbps
128 = 128 byte avg packet size expected
18 = 14 byte ethernet header + 4 byte FCS frame(CRC32), dot1q = +4 bytes

'''

if __name__ == '__main__':
    try:
        if len(sys.argv) <= 3:
            print(my_help)
        else:
            calc_ethernet_overhead(int(sys.argv[1]), int(
                sys.argv[2]), int(sys.argv[3]))
    except Exception as e:
        print(e)
