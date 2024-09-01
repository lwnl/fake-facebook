#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建项目
npm run build

# 进入构建输出的目录
cd dist

# 初始化一个新的Git仓库并添加文件
git init
git add -A
git commit -m 'deploy'

# 推送到github仓库的gh-pages分支
git push -f git@github.com:<username>/<repository-name>.git master:gh-pages

cd -