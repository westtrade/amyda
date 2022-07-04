#!/usr/bin/env sh

mkdir docs
yarn build-storybook -o docs
git add --all && git commit -m 'chore: Make update storybook'
git push

# rm -r docs