'use strict';
const fse = require('fs-extra');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events').EventEmitter



class File extends EventEmitter{
	constructor(options){
		super(options);
		this.options = options;
		this.init(options);
	}

	init(options){
		this.clean(options.path);
	}

	createFile (name, content){
		var file = path.resolve(this.options.path, './components/'+name+'.vue')
		fse.outputFileSync(file, content);
	}
	
	copy (source){
		fse.copySync(source, this.options.path)
	}

	clean(path){
		fse.emptyDirSync(path)
	}

	readFile(path){
		let ret =  fs.readFileSync(path) || new Buffer();

		return ret.toString();
	}

}



module.exports = function(options){

	if (!fs.existsSync(options.workspace)) {
		fs.mkdirSync(options.workspace)
	}

	let file = new File({
		path : options.workspace
	});
	
	return file;
}
