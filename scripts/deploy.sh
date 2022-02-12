#!/bin/sh

set -o errexit

rm -rf out

remote_url=$(git remote get-url origin)

npx next build
npx next export

cd out

touch .nojekyll

git init .
git checkout -b gh-pages
git add .
git commit -m 'Update gh-pages'
git remote add origin "${remote_url}"
git push --force origin gh-pages

cd ..
