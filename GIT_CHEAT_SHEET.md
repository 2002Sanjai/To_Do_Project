# Your Personal Git Cheat Sheet

## This guide covers everything from starting a brand new project to managing branches and downloading updates.

## 1. Starting a Brand New Project (The "First Time" Setup)

If you have a folder with code and want to start tracking it with Git and push it to GitHub for the very first time, follow these steps in order:

```bash
# 1. Initialize the git repository inside your folder
git init
# 2. Add all your files to be tracked
git add .
# 3. Save a snapshot of these files (the first commit)
git commit -m "Initial commit"
# 4. Make sure your main branch is called 'main' (standard practice)
git branch -M main
# 5. Connect your local folder to the remote GitHub repository
git remote add origin https://github.com/YourUsername/YourRepoName.git
# 6. Push your code to GitHub for the first time
git push -u origin main
```

---

## 2. The Daily Workflow (What you do every day)

Once your project is set up, this is the 3-step process you will use every time you make changes to your code.

```bash
# 1. Stage your changes (tell Git to get ready to save what you edited)
git add .
# 2. Commit your changes (save the snapshot with a message)
git commit -m "Describe what you did, e.g., Added a login button"
# 3. Push the changes to GitHub
git push
```

---

## 3. Getting Updates (When working with others or multiple computers)

If someone else made changes on GitHub, or if you edited code on a different computer, you need to pull those changes down to your local machine.

```bash
# Download the latest changes from GitHub and merge them into your local files
git pull
```

---

## 4. Working with Branches

Branches allow you to work on new features without breaking the main code.
**Creating and Switching:**

```bash
# See all your local branches
git branch
# See ALL branches (including ones on GitHub)
git branch -a
# Create a new branch and switch to it immediately
git switch -c new-feature-name
# Switch to an existing branch
git switch branch-name
```

**Syncing Branches with GitHub:**

```bash
# Download the list of branches that exist on GitHub but aren't on your computer yet
git fetch --all
# Push a brand new branch to GitHub for the first time
git push -u origin new-feature-name
```

---

## 5. Checking Your Status & History

If you ever get confused about what state your files are in.

```bash
# Check which files have been modified, added, or deleted
git status
# View the history of your commits (press 'q' to exit the log view)
git log
```

---

## 6. Oops! How to Undo Things

Made a mistake? Git has your back.

```bash
# Discard all unsaved changes in your files (Be careful, this deletes uncommitted work!)
git restore .
# Unstage a file you accidentally ran `git add` on (but keeps your edits)
git restore --staged <filename>
# Change the message of your LAST commit (only if you haven't pushed yet)
git commit --amend -m "New correct message"
```
