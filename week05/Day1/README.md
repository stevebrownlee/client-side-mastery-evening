# Week 5 - Day 1

> **Agenda:** more advanced github - merge conflicts, give out JS quiz


# Intermediate Git usage

## Merging one branch into another

```bash
git merge {branch}
```

## Unstage/revert file(s)

If you've added a file to the staging area, but change your mind, you can reset.

```bash
git add script.js
git status # This will show the file staged for commit
git reset HEAD script.js # Removes the file from staging area
```

If you made a series of changes to your working copy, but, for any reason, need to completely revert all your changes back to the most recent commit. 

```bash
git reset --hard
```

This is destructive, so use with care and be sure that you want to completely revert **all** your local changes.

## Deleting a branch

```bash
git branch -d version2  # For a local branch
git push origin :version2  # For a remote branch
```

## Stashing changes

Ever need to pull down someone else's changes from remote, but git complains that you have uncommitted changes and won't complete the pull? Well, you can stash your changes, pull down the remote changes, and then reapply your stashed code.

```bash
git pull origin version2
# git complains that you have uncommitted changes
git stash
git pull origin version2 # no complaints!
git stash pop
```