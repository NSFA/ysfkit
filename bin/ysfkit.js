#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const package = require('../package.json');
const fs = require('fs');
const cwd = process.cwd();
const npmInstall = require('../src/npm.js');

program
.version(package.version)
.description('七鱼组件自动化发布工具')
.option('-c, --config [value]', '加载配置文件')
.option('-p, --path [value]', '组件文件位置')
.option('-n, --name [value]', '组件名称')
.option('-m, --markdown [value]', 'Markdown文件目录')
.option('-i, --install [value]', 'install node package')
.parse(process.argv);

// init config param
var options = {};

// start config
if(program.config){
	try{
		require('../src/ysfkit')(require(path.resolve(cwd, program.config)));
	}catch(err){
		console.error(err)
	}
}else if(program.path && program.name && program.markdown){
	require('../src/ysfkit')(Object.assign(options, {
		path : program.path,
		markdown : program.markdown,
		name : program.name,
	}))
}else if(program.install){
	if(typeof program.install == "boolean"){
		npmInstall();
	}else if (typeof program.install == "string"){
		npmInstall(program.install);
	}
}else{
	console.log("请指定正确的参数");
}