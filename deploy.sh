#!/usr/bin/env sh
###
 # @Author       : Pancake
 # @Date         : 2022-04-05 19:48:01
 # @LastEditTime : 2022-04-10 00:40:13
 # @LastEditors  : Pancake
 # @FilePath     : \Pancake-Q\deploy.sh
 # @Description  : 一键部署
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Pancake-Q/Pancake-Q.github.io.git main

cd -