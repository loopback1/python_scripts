#!/home/jlima/.virtualenvs/prod3/bin/python
'''update freedns.afraid.org account by login every few days
sends sms to cell phone with status each week using gmail
run as cronjob

;)


'''
import requests
import re
import time
import smtplib

def send_mail(body):
    try:
        gmail_user = 'user@gmail'
        gmail_password = 'pass'
        to = ['xxxxxxx@mms.att.net']
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login(gmail_user, gmail_password)
        body = '\n\nfreedns.afraid.org update:\n' + body + '\n\n'
        server.sendmail(gmail_user, to, body)
        server.close()
    except Exception as e:
        print(e)

payload = {
        'username' : 'user@outlook.com',
        'password' : 'passw',
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
            body = str(time.ctime()) + ' - login OK, status code == ' + str(resp.status_code)
            send_mail(body)
            return print(body)
        else:
            body = str(time.ctime()) + 'Possible bad user/pass, status == ' + str(resp.status_code)
            send_mail(body)
            return print(body)
    # page = c.get("http://freedns.afraid.org/subdomain/")
    # print(page.content)

if __name__ == '__main__':
    main()
