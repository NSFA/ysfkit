'use strict';
/**
 * files 文件拷贝
 *
 * @author:   波比(｡･∀･)ﾉﾞ
 * @date:     2016-08-27  下午2:52
 */

const EventEmitter = require('events');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const cwdPath = process.cwd();

class Profile extends EventEmitter{
	constructor(stream, options){
		super();
		this.init(stream, options)
	}
	init(stream, options){
		let obj = this.parseFile(stream),
			template = obj.template,
			app = obj.app;

		this.renderEjs(template, app, options);

	}
	parseFile(stream){
		let tagExp = new RegExp("<template[^>]*>([\\s\\S]*?)<\\/template>[\\s\\S]*?<component[^>]*>([\\s\\S]*?)<\\/component>", "ig"),
			parseArray = tagExp.exec(stream),
			template = parseArray[1], // template string
			app = parseArray[2]; // script string


		// exec script in global scope, it's too crazy

		return {
			template : template,
			app : app
		}
	}
	renderEjs(template, app, options){
		let name = options.name || '七鱼基础组件',
			description = options.description || '七鱼基础组件',
			componentStyle = options.componentStyle;

		let compile = ejs.compile(fs.readFileSync(path.join(__dirname,'./template.ejs'), 'utf-8')),
			html = compile({
				template : template,
				app : app,
				name : name,
				description : description,
				componentStyle : componentStyle
			}),
			filename = path.join(cwdPath, './docs/index.html');



		// 自动解析到当前执行环境的docs目录下
		if(!fs.existsSync(path.join(cwdPath, './docs'))) fs.mkdir(path.join(cwdPath, './docs'));

		fs.writeFileSync(filename, html);

		console.log('文件生成完成...')

	}

}


module.exports = Profile;