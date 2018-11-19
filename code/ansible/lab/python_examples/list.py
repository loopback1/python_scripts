
"python nested list (list inside a list)"

# lists start with [] brackets, all rules that apply to "python" apply to ansible
servers = [ "10.1.1.1", "192.168.1.10", "8.8.8.8", [ "Gigabit0/0", "Gigabit1/0", "Gigabit2/0" ] ]


servers[0] = 10.1.1.1

servers[3] = [ "Gigabit0/0", "Gigabit1/0", "Gigabit2/0", ]

servers[3][2] = "Gigabit2/0"

"yaml nested list (list inside a list)"

servers: # list name
    - 10.1.1.1 # list item 0
    - 192.168.1.10 # list item 1
    - 8.8.8.8 # list item 2
    - Gigabit0/0 # new list, item[3][0]
        - Gigabit1/0 # item[3][1]
        - Gigabit2/0 # item[3][2]

# access array/list variables in a playbook
{{ servers }} # returns the entire list with all 4 items, including a list
{{ servers[0] }} # returns list index item 0, 10.1.1.1 (without quotes)
{{ servers[1] }} # returns list index item 1, 192.168.1.10 (without quotes)
{{ servers[2] }} # returns list index item 2, 8.8.8.8 (without quotes)
{{ servers[3] }} # returns list [ "Gigabit0/0", "Gigabit1/0", "Gigabit2/0" ]
{{ servers[3][1] }} # returns list item "Gigabit1/0"


