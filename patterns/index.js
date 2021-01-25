const patternDict = [{
	pattern : '\\b(?<greeting>Hi|Hello|Hey)\\b',
	intent : 'Hello'
},
{
	pattern : '\\b(?<exit>goodbye|bye|exit)\\b',
	intent : 'Exit'
},
{
	pattern : '\\b(?<h>hru|how..re you|what..s up|how..re you going|how..re you doing)\\b',
	intent : 'How are you' 
},
{
	pattern : '\\b((?<prediction>Rainy|Sunny|Cold)\\sin\\s(?<city>[a-z]+[a-z]+?)+\\s(?<time>tomorrow|today|the day after tomorrow)$)\\b',
	intent : 'get weather with prediction'
},
{
	pattern : '\\b(Time\\sin\\s(?<city>[a-z]+[a-z]+?))',
	intent : 'get time with city'
},
{
	pattern : '\\b(Weather\\sin\\s(?<city1>[a-z]+[a-z]+?)+\\s(?<city2>[a-z]+[a-z]+?))',
	intent : 'get weather with double city'
},
{
	pattern : '\\b(Weather\\sin\\s(?<city>[a-z]+[a-z]+?))',
	intent : 'get weather with city'
},
{
	pattern : '\\b(Weather\\slike\\sin\\s(?<city>[a-z]+[a-z]+?)+\\s(?<time>tomorrow|today)$)\\b',
	intent : 'get weather with date'
}];

module.exports = patternDict;