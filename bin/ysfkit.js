#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const package = require('../package.json');
const fs = require('fs');
const cwd = process.cwd();

program
.version(package.version)
.description('七鱼代码自动化发布工具')
.option('-c, --config [value]', '加载配置文件')
.parse(process.argv);


// start config param
if(program.config){
	var stream = fs.readFileSync(path.join(cwd, program.config), 'utf-8'),
		options = {};
	try{
		var options = require(path.join(cwd, './package.json'));
	}catch(ex){}


	require('../src/ysfkit')(stream, options);
}else{
	console.log("请指定正确的参数");
}