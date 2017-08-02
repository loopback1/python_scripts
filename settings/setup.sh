#!/usr/bin/zsh
cd ~

git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
git clone https://github.com/loopback1/dotfiles.git ~/.dotfiles
git clone https://github.com/powerline/fonts.git ~/github/fonts

cd ~/github/fonts/ && ./install.sh

cd ~

sudo apt install -y build-essential libssl-dev libffi-dev python-dev
sudo apt install -y cmake python-dev3
sudo apt install -y ruby ruby-dev libncurses5-dev mercurial build-essential rake rubygems gcc
sudo apt install -y virtualenv virtualenvwrapper
sudo apt install -y powerline
sudo apt install -y python-pip3

mkdir -p .dotfiles.ori
mkdir -p ~/.vim/bundle && mkdir -p ~/.tmp && mkdir -p ~/Dropbox/notes
mkdir -p ~/github

mv ~/.vimrc .dotfiles.ori/
mv ~/.tmux.conf .dotfiles.ori/
mv ~/.inputrc .dotfiles.ori/
mv ~/.zshrc .dotfiles.ori/

ln -s ~/.dotfiles/.vimrc .
ln -s ~/.dotfiles/.inputrc .
ln -s ~/.dotfiles/.tmux.conf .
ln -s ~/.dotfiles/.zshrc .

ln -s ~/.dotfiles/UltiSnips ~/.vim/UltiSnips 


vim +PluginInstall +qall

cd ~/.vim/bundle/command-t
rake make

cd ~/.vim/bundle/YouCompleteMe
./install.py --clang-completer

echo '[+] done!'
