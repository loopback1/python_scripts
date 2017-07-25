# force local override
git fetch --all
git reset --hard origin/master

# change repo to ssh
git remote set-url origin git@github.com:username/repo-name-here.git

# add username
https://username@x.x.x.x.x.x/repo/git.git

# enable cached credentials
git config credential.helper store
git config --global credential.helper 'cache --timeout 7200'


