# Week 2 - Day 1 (January 9)

> **Agenda:** Installs, open sublime from command line, set up github SSH


### MAC INSTALLS
* X-code = Do as HW before install day
* Install Homebrew
* Brew install Node
* npm install http-server -g

### WINDOWS INSTALLS
* Git Bash terminal = https://git-scm.com/downloads
* install latest LTS of Node


### BOTH INSTALL
* Chrome
* Sublime3 - set up to open files from command line use subl
	* MAC = use brew: ```brew install Caskroom/cask/sublime-text```
	* WINDOWS = download then to run via the command line:

``` ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" ~/bin/subl```

### Set up Github SSH
* Check if you have an SSH keys
	* https://help.github.com/articles/checking-for-existing-ssh-keys/


* Generate an SSH key
	* https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

* Add SSH to github
	* https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/

* Check your SSH key link
	* ssh -T git@github.com
