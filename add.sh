#!/bin/zsh
echo "Commit name:"
read commitname
git add --all
git commit -m$commitname
git push -u origin main

# aaaa