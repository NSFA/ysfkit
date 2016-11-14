var loader = require('../src/loader');
var fs = require('fs')

loader(fs.readFileSync('./app/test.md'), {
	resourcePath: './unit/'
})