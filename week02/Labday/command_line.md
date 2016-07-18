# Week 2 Labday - Command Line Lightning Talks

1. cd - change directory

	```
	$ cd #takes you to root directory
	$ cd workspace #takes you to workspace directory
	$ cd .. #takes you to back one directory
	$ cd - #takes you to where you previously were
	```
2. cat - reads a file and prints it to the terminal
	
	```
	$ cat index.html #prints index file
	$ cat file1 file2 > file3 # reads file1 and file2 and prints them into file3
	```
3. man - prints out the manual for a command (type q to exit)

	```
	$ man cat #tells you all about the cat command 
	$ man man #inception
	```
4. whoami - displays logged-in users userid

	```
	$ whoami # prints out zoe.ames
	```

5. pwd - print working directory - tells you where you are

	```
	$ pwd #prints something like /Users/zoe.ames/workspace
	```
6. mv - renames a file OR moves a file
	
	```
	$ mv cts.html cats.html #renames file
	$ mv cats.html /html/cats.html #moves the cats file into the html folder
	```

7. curl - command that transfers data - can be used for HTTP requests and FTP

	```
	$ curl http://www.google.com #return html for google
	$ curl wttr.in/nashville #shows the weather for nashville for next 3 days
	```
8. ssh - allows you to log into a remote machine

	```
	$ ssh zoe.ames@127.0.0.1  #allows you to ssh into your own machine
	```
9. mkdir - makes folders

	```
	$ mkdir html #makes a directory called html
	$ mkdir a b c #makes 3 different folders
	$ mkdir a/cat #makes cat folder inside a folder - only works if a already exists
	```
10. sudo - superuser do - allows you to run certain tasks as administrator
	
	```
	$ npm install -g http-server #this somestimes fails for certain users
	$ sudo npm install -g http-server #prompts for password and then is sucessful 

	```
11. cal - prints out callendar for current month

	```
	$ cal #calendar of current month
	$ cal -y #shows calendar for full year
	```
12. top - displays information about running processes

	```
	$ top  #currently have over 300 running processes
	```
13. ls - lists files 

	```
	$ ls #lists files horizontally
	$ ls -l #lists files vertically with more details
	$ls -al #lists ALL files vertically (even hidden ones)
	```
14. clear - clears out the view of the terminal

	```
	$ clear #nothing in the terminal
	```
15. chmod - modifies file permissions

	```
	$ chmod 666 moo.txt  #gives everyone read and write access to file
	$ chmod 644 moo.txt  #owner has read/write, group is read only, others are read only
	```
16. ps - displays active processes

	```
	$ ps -e  # see every process running on system
	```
17. rm - remove file

	```
	$rm cats.html #removes cat file
	```
18. rm -rf - remove folder

	```
	rm -rf cows/  #removes cow folder and everything in it without asking for confirmation for files with special permissions
	```
19. lsof -i :8080 - list open files on port 8080 (gives PID)

	```
	$ lsof -i :8080  #returns table of processes running on port 8080
	```
20. kill - ends process (requires PID from lsof command)

	```
	$ kill 47793  #kills process with PID 47793
	$ kill -9 47793 #force gills process with PID 47793 - when regular kill doesn't work
	```

21. touch - creates file

	```
	$ touch cat.html #creates empty cat.html file
	```
22. cp - duplicate a file

	```
	$ cp moo.html moo2.html  #duplicate moo and rename duplicate moo2 
	```
23. !! - repeat last command

	```
	$ cat cow.html
	$ !! #prints out cow.html again
	```
24. date - shows the current date and time

	```
	$ date #shows July
	```
25.  ifconfig - shows you all internet connectsions for your machine

	```
	$ ifconfig
	```
26.  grep - searches for stuff

	```
	$ grep boo /etc/passwd  #searches for boo in /etc/passwd
	```

27. echo