'use strict';
/**
 * ysfkit 主应用程序
 *
 * @author:   波比(｡･∀･)ﾉﾞ
 * @date:     2016-08-27  下午2:46
 */

const EventEmitter = require('events');
const Profile = require('./profile');
const path = require('path');


class YSFKit extends EventEmitter {
	constructor(config){
		this.init(config);
	}
	init(){

	}
}

module.exports = function(configPath){
	new YSFKit(new Profile(configPath));
}