#!/bin/bash

# Function to check if the directory is a Git repository
check_git_repo() {
    if [ ! -d ".git" ]; then
        echo "This is not a Git repository."
        exit 1
    fi
}

# Function to clone a repository
clone_repo() {
    echo "Enter the repository URL to clone:"
    read REPO_URL
    git clone $REPO_URL
}

# Function to check the status of the repository
check_status() {
    check_git_repo
    git status
}

# Function to pull the latest changes from the repository
pull_changes() {
    check_git_repo
    git pull
}

# Function to add changes to the repository
add_changes() {
    check_git_repo
    echo "Enter the file(s) you want to add (use . for all):"
    read FILES
    git add $FILES
}

# Function to commit changes
commit_changes() {
    check_git_repo
    echo "Enter a commit message:"
    read COMMIT_MSG
    git commit -m "$COMMIT_MSG"
}

# Function to push changes to the repository
push_changes() {
    check_git_repo
    git push
}

# Main script
echo "Choose an option:"
echo "1) Clone repository"
echo "2) Check status"
echo "3) Pull latest changes"
echo "4) Add files to staging"
echo "5) Commit changes"
echo "6) Push changes"
read OPTION

case $OPTION in
    1) clone_repo ;;
    2) check_status ;;
    3) pull_changes ;;
    4) add_changes ;;
    5) commit_changes ;;
    6) push_changes ;;
    *) echo "Invalid option"; exit 1 ;;
esac

