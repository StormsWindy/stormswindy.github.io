#!/bin/zsh
read -p 'Name of commit:' commitname
git add --all
git commit -m $commitname
git push -u origin main

