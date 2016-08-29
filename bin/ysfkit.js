#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const package = require('../package.json');
const fs = require('fs');
const cwd = process.cwd();

program
.version(package.version)
.description('七鱼组件代码自动化发布工具')
.option('-c, --config [value]', '加载配置文件')
.option('-t, --test [value]', '生成测试目录')
.parse(process.argv);

// init config param
var stream = "",
	options = {};

try{
	var options = require(path.join(cwd, './package.json'));
}catch(ex){}


// start config param
if(program.config){
	stream = fs.readFileSync(path.join(cwd, program.config), 'utf-8');
	require('../src/ysfkit')(stream, options, 'config');
}else if(program.test){
	stream = fs.readFileSync(path.join(cwd, program.test), 'utf-8');
	require('../src/ysfkit')(stream, options, 'test')
}else{
	console.log("请指定正确的参数");
}