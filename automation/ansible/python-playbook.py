# use your venv here
#
# wrap a playbook inside a flask restful api app..


import subprocess
import re
from flask import Flask, request
from flask_restful import Resource, Api, reqparse

# flask restful returns json format, no need to use jsonify method
# just return dictionaries

ansi_escape = re.compile(r'\x1b[^m]*m')

# create flask app
app = Flask(__name__)

# wrap app into an api
api = Api(app)

# create list to store dictionaries

def run_clear_vpn():
    '''
    assumes that -i is a dynamic inventory
    '''
    p = subprocess.Popen('ansible-playbook -f 40 -i clear_vpn_inv.py clear__vpn.yml',
                        shell=True, 
                         stdout=subprocess.PIPE,
                         stderr=subprocess.STDOUT
                )
    job_output = [] 
    for line in p.stdout.readlines():
            # line1 = ansi_escape.sub('', line)
            print line,
            # job_output.append(line1)
            retval = p.wait()
    return 

# create Item class and inherit Resource flask class
class Item(Resource):
    def post(self, name):
        '''
        my ansible playbook api
        '''
        data = request.get_json()
        if name == 'clear_vpn':
            job_output = run_clear_vpn()
            return {"message": "DONE!"}, 200
        else:
            return {"message": "something went wrong..."}, 200

# create API Resources
api.add_resource(Item, '/job=/<string:name>')

# debug=True enables better error messages
# port=5000 is default and does not need to be identified
# identifying for good practice
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000, debug=True)

