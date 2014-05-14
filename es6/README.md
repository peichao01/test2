参考文章：http://h3manth.com/new/blog/2013/es6-on-nodejs/

首先，下载安装node的Unstable版本，即不稳定版，开发版。
运行文件时，加上这一句：
node --use-strict $(node --v8-options | grep harm | awk '{print $1}' | xargs) jsFile.js
