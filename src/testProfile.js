'use strict';
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const Profile = require('./profile');
const cwdPath = process.cwd();

class TestProfile extends Profile {
	constructor(stream, options){
		super(stream, options);
	}
	init(stream, options){
		let ret = this.parseFile(stream, options);
		this.renderEjs(ret, options);
	}
	parseFile(stream, options){
		let tagExp = new RegExp("<script[^>]*>([\\s\\S]*?)<\\/script>", "ig"),
			parseArray = tagExp.exec(stream),
			script = parseArray[1]; // script string


		// exec script in global scope, it's so crazy
		eval(script);
		let config  = global.TestConfig;

		return {
			template : config.template,
			components : config.components,
			filepath : config.filepath
		}
	}
	renderEjs(ret, options){
		let compile = ejs.compile(fs.readFileSync(path.join(__dirname,'./testTemplate.ejs'), 'utf-8')),
			html = compile(Object.assign({
				componentStyle:'',
				name : '',
				template : '',
				components : {},
				filepath:''
			}, ret, options)),
			filename = path.join(cwdPath, './docs/test.html');

		// 自动解析到当前执行环境的docs目录下
		if(!fs.existsSync(path.join(cwdPath, './docs'))) fs.mkdir(path.join(cwdPath, './docs'));

		fs.writeFileSync(filename, html);

		console.log('文件生成完成...');
	}
}

module.exports = TestProfile;