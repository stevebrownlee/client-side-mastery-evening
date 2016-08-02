# Week 5 - Day 1

> **Agenda:** more advanced github - merge conflicts, give out JS quiz


## Intermediate Git usage
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

### Resolve Merge Conflicts
1.  Make a new branch called branchA.  Since main.js is unstaged it should get pulled over when you create this branch.  Inside main.js

	```
	var hello = function(){
		console.log("hello");
	}
	```
2. Add, commit, push main.js up to github branchA
3. Switch back to master and make a new branch called branchB.  Make a main.js file on this branch

	```
	var world = function(){
		console.log("world");
	}
	```
4. Add, commit, push main.js up to github branchB
5. On github make a PR for branchA to master
6.  Approve the PR, merge in to master, delete the branch on github

### Deleting a branch
Since we removed the branch from github we don't really need it locally because all that code is now in master. So return to command line and delete the branch. A git branch at this step should show 3 branches - master, branchA, branchB.

	```
	git branch -d branchA  # For a local branch
	```

1.  make a PR for branchB into master - should show a merge conflict. 
2.  On terminal switch to master and

	```
	git pull origin master
	```
3.  checkout to branchB


### Merging one branch into another
Pull master branch code (readme + what was on branchA) into branchB

	```
	git merge master
	```

Should see a conflict.  Fix the conflict in main.js:
	
	```
	var hello = function(){
		console.log("hello");
	}

	var world = function(){
		console.log("world");
	}
	```

1. add, commit, push changes to branchB
2. make a PR, merge, delete branch

Switch to master
1. in main.js add:

	```
		console.log(moo);
	```

2.  git pull origin master

### Stashing changes
Your terminal should complain that you have changes on remote that you don't have uncommitted changes and won't complete the pull. Well, you can stash your changes, pull down the remote changes, and then reapply your stashed code.

```
git pull origin master
# git complains that you have uncommitted changes
git stash
git pull origin master # no complaints!
git stash pop
```

To see all things you have stashed:
```
git stash list
```

### Getting File Differences
to see what changes have been made in a fill use git diff

```
git diff main.js
```

<hr/>
## END - Assign the javascript quiz in github classroom - have them clone down, add files, push to branch, open PR

#### REMINDER - you don't close a PR until an instructor give you a thumbs up.  Once you are done with the quiz add a line in the comments of the quiz that you are done so we know to look at it.