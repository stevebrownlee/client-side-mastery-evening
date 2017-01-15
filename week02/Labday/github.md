# Week 2 Labday - Github

### What is git?
* Version Controll system
* Git open source project developed in 2005
* Committing new changes, branching, merging and comparing past versions are all optimized for performance.
*  Git thinks of its data more like a set of snapshots of a miniature filesystem. Every time you commit, or save the state of your project in Git, it basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot. To be efficient, if files have not changed, Git doesn’t store the file again, just a link to the previous identical file it has already stored. 
* Git thinks about its data more like a stream of snapshots.
* Git has three main states that your files can reside in: committed, modified, and staged. 
	* Committed means that the data is safely stored in your local database. 
	* Modified means that you have changed the file but have not committed it to your database yet. 
	* Staged means that you have marked a modified file in its current version to go into your next commit snapshot.

### Tour of github interface
* Show location of:
	* Contribution Calendar 
	* Repository List
	* Stars
	* Followers
	* Following

### Make a folder locally to push to Github
* Create a new folder  ```mkdir test1```
* Go into test1 folder ```cd test1```
* Make index.html file ```touch index.html```

### How to make a new repository on github
* Click plus sign
* Click New Repository
* Add in Repository Name - make it the same as the name of your folder on your local machine
* It will list all steps you need for the next step

### Link local folder to Github repo
* Initialize a new repo ```git init```
* Add the index file ```git add index.html```
* Commit the file you added ```git commit -m "first commit"```
* On github make sure you have selected SSH and copy the following line
	* ```git remote add origin git@github.com:zoeames/test1.git```
* Change Author settings - see next section
* Push your changes```git push -u origin master```

### Set Author on local machine - will need to do 1st time you push
* ```git config --global user.name "Your Name"```
* ```git config --global user.email you@example.com```
* Check last commit to see if author email has changed
	* If needed:  reset author commit: ```git commit --amend --reset-author```

### Rest of class
* Make new repo with index.html at least 4 more times
* Then make multiple add/commits on the same repo to show you can push each time or push at the end
* HW = make 20 repos