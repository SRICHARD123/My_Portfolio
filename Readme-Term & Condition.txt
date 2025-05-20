Starting a repo

echo "# RDS" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin <insert github link>
git push -u origin main


Making Changes to the repo

git add .
git commit -m "<insert commit message>"
git push -u origin main