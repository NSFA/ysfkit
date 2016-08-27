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
		super(config);
		this.init(config);
	}
	init(){

	}
}

module.exports = function(stream, options){
	new YSFKit(new Profile(stream, options));
}