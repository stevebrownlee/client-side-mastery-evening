# Week 3 Day1 - Github Branching


## What is branching?
* Branching means you diverge from the main line of development and continue to do work without messing with that main line. 
* Each branch is an independent line of development.  
	* You should not need 2 branches to deliver a feature


## Branching Strategy
* A single branch can have many commits
* General Workflow
	* Write a bunch of code - make a bunch of commits
	* Make a pull request
	* Fix requested chagnes - make more commits
	* Get approval
	* Merge PR

![Single Branch](https://github.com/zoeames/NSS-evening-class-curriculum/blob/master/week03/Day1/single_branch.png)

This way your team can all have different branches of code going at the same time:

![Many Branches](https://github.com/zoeames/NSS-evening-class-curriculum/blob/master/week03/Day1/multi-branches.png)

## Practice Branching
* New Workflow

| # | Step                            | Code             |
|---|---------------------------------|------------------|
| 1 |  Make local folder              | ```touch branchDemo``` |
| 2 |  Go into that folder            | ```cd branchDemo```    |
| 3 |  Make a README                  | ```touch README.md```  |
| 4 |  Open folder in sublime         | ```subl .```  |
| 5 |  Add title to README            | # Github Branching Demo  |
| 6 |  Make new repository on Github  | -in chrome-  |
| 7 |  Initialize github repo         | ```git init```  |
| 8 |  Add Readme                     | ```git add README.md```    |
| 9 |  Commit readme                  | ```git commit -m "added readme"```    |
| 10 | Push readme to master          | ```git push origin master```   |
| 11 | Make a new branch              | ```git branch branch1```  |
| 12 | Checkout to that branch        | ```git checkout branch1```  |
| 13 | Make index file                | ```touch index.html```  |
| 15 | Add h1 to index                | ```<h1>Hello</h1>``` |
| 16 | Add index file                 | ```git add index.html```  |
| 17 | Commit index file              | ```git commit -m "added index file"```  |
| 18 | Push to branch                 | ```git push origin branch1```  |
| 19 | Make PR on github              | -in chrome-  |
| 20 | Get approvals                  | -in chrome-  |
| 21 | Hit Merge button               | -in chrome-  |
| 22 | Switch to master branch        | ```git checkout master```  |
| 23 | pull down merged code          | ```git pull origin master```  |


Then repeat steps 11-23 until you are done with your project.
