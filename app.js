'use strict ';

const Readline = require('readline'); // for reading inputs
const rl = Readline.createInterface({ // for reading inputs
	input : process.stdin,
	output : process.stdout,
	terminal : false
})

const matcher = require('./matcher');
const weather = require('./weather');

rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
  matcher(reply, cb => {
		switch(cb.intent)
		{
			case 'Hello':
				console.log(`${cb.entities.greeting}` + " to you !");
				break;
			case 'How are you':
				console.log("I'm very good thank you");
				break;
			case 'get weather with date':
        weather(cb.entities.city, cb.intent, cb.entities.time);
				break;
      case 'get weather with city':
        weather(cb.entities.city, cb.intent);
        break;
      case 'get weather with double city':
        const city = `${cb.entities.city1}` + " " + `${cb.entities.city2}`;
        weather(city, cb.intent);
        break;
      case 'get time with city':
        weather(cb.entities.city, cb.intent);
        break;
      case 'get weather with prediction':
        weather(cb.entities.city, cb.intent, cb.entities.time, cb.entities.prediction);
        break;
      case 'Exit':
        console.log("Goodbye, have a nice day !");
        process.exit();
		}
  });
});