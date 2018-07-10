#!/home/jlima/.virtualenvs/prod3/bin/python
'''update freedns.afraid.org account by login every few days
run as cronjob

;)


'''
import requests
import re
import time

payload = {
        'username' : 'my_username',
        'password' : 'my_password',
        'submit' : 'Login',
        'from' : 'L21lbnUv',
        'remote' : '',
        'action' : 'auth'

        }


headers = {'user-agent': "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36"}

def main():
    with requests.Session() as c:
        url = "https://freedns.afraid.org/zc.php?step=2"
        resp = c.post(url, data=payload, headers=headers)
#        print(resp.content)
        if not re.search('.*Invalid\sUserID.*', resp.text):
            return print(time.ctime(), ' - login OK, status code == ', resp.status_code)
        else:
            return print(time.ctime(), ' - invalide username and password: resp_code == ', resp.status_code)

    # page = c.get("http://freedns.afraid.org/subdomain/")
    # print(page.content)

if __name__ == '__main__':
    main()
