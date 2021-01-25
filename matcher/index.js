'use strict ';
const patterns = require('../patterns');
const XRegExp = require('xregexp');

let matchPattern = (str, cb) => {
	let getResult = patterns.find ( item => {
		if( XRegExp.test(str, XRegExp( item.pattern, "i")))
		{
			return true;
		}
	});
	if(getResult)
	{
		return cb({
			intent : getResult.intent,
			entities : CreateEntities(str, getResult.pattern)})
	}
	else 
	{
		console.log("I didn't understand your request");
		return cb({});
	}
}

let CreateEntities = (str, pattern) => {
	return XRegExp.exec(str, XRegExp(pattern, "i"))
}

module.exports = matchPattern;