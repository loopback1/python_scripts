# find free ip addreses in multiple ip ranges, log them to a file


    for i in (seq 100 150)
      ping -c2 -t1 $pdc1$i
      if test $status = 2
          echo $pdc1$i free >> mgmt.log
      end
      ping -c2 -t1 $pdc3$i
      if test $status = 2
          echo $pdc3$i free \n >> mgmt.log
      end
