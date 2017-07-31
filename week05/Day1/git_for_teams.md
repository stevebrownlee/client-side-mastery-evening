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