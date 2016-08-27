'use strict';
/**
 * files 文件拷贝
 *
 * @author:   波比(｡･∀･)ﾉﾞ
 * @date:     2016-08-27  下午2:52
 */

const EventEmitter = require('events');
const fs = require('fs');
const cwdPath = process.cwd();
const srcPath = __filename;

class Profile extends EventEmitter{
	constructor(config){

	}
	init(){
		this.parseFile();
	}
	parseFile(stream){
		
	}
}


module.exports = Profile;