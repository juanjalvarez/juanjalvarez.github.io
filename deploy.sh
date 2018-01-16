yarn run build
cd build
git init
git remote add origin https://github.com/juanjalvarez/juanjalvarez.github.io.git
git checkout -b master
git add .
git commit -m "build"
git push --set-upstream origin master -f
