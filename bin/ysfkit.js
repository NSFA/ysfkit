#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const package = require('../package.json');

program
.version(package.version)
.description('七鱼代码自动化发布工具')
.option('-c, --config [value]', '加载配置文件')
.parse(process.argv);


// start config param
if(program.config){
	require('../src/server')(program.config);
}else{
	console.log("请指定正确的参数");
}