const Profile = require('./profile');

class TestProfile extends Profile {
	constructor(stream, options){
		super();
	}
	init(stream, options){
		let tagExp = new RegExp("<script[^>]*>([\\s\\S]*?)<\\/script>", "ig"),
			parseArray = tagExp.exec(stream),
			script = parseArray[1]; // script string


		// exec script in global scope, it's so crazy
		eval(script);
		let config  = global.testConfig;

		return {
			template : config.template,
			components : config.components,
			filepath : config.filepath
		}
	}
}

module.exports = TestProfile;