## Intermediate Git usage

### Delete a repo on Github
1.  go into repo
1.  click on settings
1.  scroll all the way down
1.  click "Delete this repository"
1.  type in the repository name and click button

### Setup
1.  Make a new repo with a README.md and a main.js.  
2.  In the README.md put a title 

	```
	# Advanced Github
	```

3.  In main.js add in a console.log
	```
	console.log("inside main.js");
	```
4.  Set up a repository on git and add in the remote origin to local
5.  Git add both files 


### Unstage/revert file(s)
But wait we only ever push up README.md to master so we need to unstage main.js.

	```bash
	git rm --cached main.js # Removes the file from staging area
	```

If you made a series of changes to your working copy, but, for any reason, need to completely revert all your changes back to the most recent commit. 

	```bash
	git reset --hard
	```

This is destructive, so use with care and be sure that you want to completely revert **all** your local changes.

### Create and Checkout to a branch in 1 step
	```bash
	git checkout -b newbranch # Creates and checks out to a new branch
	```

	Do some stuff and then PR the branch into master.  Then delete the branch on github.

### Deleting a branch
Since we removed the branch from github we don't really need it locally because all that code is now in master. So return to command line and delete the branch. 

	```
	git branch -d branchA  # For a local branch
	```