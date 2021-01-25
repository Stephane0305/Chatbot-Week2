"use strict";
const axios = require("axios");
const key = 'H8pJlCkO510rAjdiANKUOT0Y8xIbq6mV';

const getWeather = (location, intent, time, prediction) => {
	return new Promise(async(resolve, reject) => {
		try {
			const weatherLocation = await axios.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete",
			{
				params : {
					apikey: key,
					q: location,
					language : "en-US"
				}
			});
			const l = weatherLocation.data;
			const locationkey = l[0]["Key"];
			const weatherConditions = await axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationkey,
			{
				params : {
					apikey: key,
					language : "en-US",
					details : "false",
					metric : "true"
				}
			}).then((response) => {
				const temp1 = Math.round((response.data["DailyForecasts"][0].Temperature.Maximum.Value + response.data["DailyForecasts"][0].Temperature.Minimum.Value)/2);
				const temp2 = Math.round((response.data["DailyForecasts"][1].Temperature.Maximum.Value + response.data["DailyForecasts"][1].Temperature.Minimum.Value)/2);
				const temp3 = Math.round((response.data["DailyForecasts"][2].Temperature.Maximum.Value + response.data["DailyForecasts"][2].Temperature.Minimum.Value)/2);
				switch(intent)
  				{
  					case 'get weather with date':
  						if(time == "today")
  						{
  							if(location == "Paris" || location == "paris")
          					{
          						if(temp1 < 5)
          						{
          							console.log("it is very cold " + time + " in " + location + ", France. With " + temp1 + " degrees Celsius.");
          						}
          						else if(temp1 < 20)
          						{
          							console.log("it is a mild temperature " + time + " in " + location + ", France. With " + temp1 + " degrees Celsius.");
          						}
          						else
          						{
          							console.log("it is hot " + time + " in " + location + ", France. With " + temp1 + " degrees Celsius.");
          						}
          					}
          					else
          					{
          						if(temp1 < 5)
          						{
          							console.log("it is very cold " + time + " in " + location + ", England. With " + temp1 + " degrees Celsius.");
          						}
          						else if(temp1 < 20)
          						{
          							console.log("it is a mild temperature " + time + " in " + location + ", England. With " + temp1 + " degrees Celsius.");
          						}
          						else
          						{
          							console.log("it is hot " + time + " in " + location + ", England. With " + temp1 + " degrees Celsius.");
          						}
          					}	
  						}
  						else
  						{
  							if(location == "Paris" || location == "paris")
          					{
          						if(temp2 < 5)
          						{
          							console.log("it is very cold " + time + " in " + location + ", France. With " + temp2 + " degrees Celsius.");
          						}
          						else if(temp2 < 20)
          						{
          							console.log("it is a mild temperature " + time + " in " + location + ", France. With " + temp2 + " degrees Celsius.");
          						}
          						else
          						{
          							console.log("it is hot " + time + " in " + location + ", France. With " + temp2 + " degrees Celsius.");
          						}
          					}
          					else
          					{
          						if(temp2 < 5)
          						{
          							console.log("it is very cold " + time + " in " + location + ", England. With " + temp2 + " degrees Celsius.");
          						}
          						else if(temp2 < 20)
          						{
          							console.log("it is a mild temperature " + time + " in " + location + ", England. With " + temp2 + " degrees Celsius.");
          						}
          						else
          						{
          							console.log("it is hot " + time + " in " + location + ", England. With " + temp2 + " degrees Celsius.");
          						}
          					}	
  						}
  						break;
        			case 'get weather with city':
          				if(location == "Paris" || location == "paris")
          				{
          					if(temp1 < 5)
          					{
          						console.log("it is very cold in " + location + ", France. With " + temp1 + " degrees Celsius.");
          					}
          					else if(temp1 < 20)
          					{
          						console.log("it is a mild temperature in " + location + ", France. With " + temp1 + " degrees Celsius.");
          					}
          					else
          					{
          						console.log("it is hot in " + location + ", France. With " + temp1 + " degrees Celsius.");
          					}
          				}
          				else
          				{
          					if(temp1 < 5)
          					{
          						console.log("it is very cold in " + location + ", England. With " + temp1 + " degrees Celsius.");
          					}
          					else if(temp1 < 20)
          					{
          						console.log("it is a mild temperature in " + location + ", England. With " + temp1 + " degrees Celsius.");
          					}
          					else
          					{
          						console.log("it is hot in " + location + ", England. With " + temp1 + " degrees Celsius.");
          					}
          				}
          				break;
        			case 'get weather with double city':
        				if(temp1 < 5)
          				{
          					console.log("it is very cold in " + location + ", United-States. With " + temp1 + " degrees Celsius.");
          				}
          				else if(temp1 < 20)
          				{
          					console.log("it is a mild temperature in " + location + ", United-States. With " + temp1 + " degrees Celsius.");
          				}
          				else
        				{
          					console.log("it is hot in " + location + ", United-States. With " + temp1 + " degrees Celsius.");
          				}
          				break;
        			case 'get time with city':
          				console.log("the time in " + location + " is on your watch");
          				break;
        			case 'get weather with prediction':
        				if(time == "today")
        				{
        					if(response.data["DailyForecasts"][0]["Day"]["IconPhrase"] == "Showers")
        					{
        						if(prediction == "rainy")
        						{
        							console.log("it's " + prediction + " in " + location + " " + time);
        						}
        						else if(prediction == "sunny")
        						{
        							console.log("it's not " + prediction + " in " + location + " " + time);
        						}
        					}
        					else if(response.data["DailyForecasts"][0]["Day"]["IconPhrase"] == "Clear")
        					{
        						if(prediction == "rainy")
        						{
        							console.log("it's not " + prediction + " in " + location + " " + time);
        						}
        						else if(prediction == "sunny")
        						{
        							console.log("it's " + prediction + " in " + location + " " + time);
        						}
        					}
        					else if(prediction == "cold")
        					{
        						if(temp1 < 5)
        						{
        							console.log("it's " + prediction + " in " + location + " " + time);
        						}
        						else
        						{
        							console.log("it's not " + prediction + " in " + location + " " + time);
        						}
        					}
        					else
        					{
        						console.log("it's not " + prediction + " in " + location + " " + time);
        					}

        				}
        				else if(time == "tomorrow")
        				{
        					if(response.data["DailyForecasts"][1]["Day"]["IconPhrase"] == "Showers")
        					{
        						if(prediction == "rainy")
        						{
        							console.log("it's " + prediction + " in " + location + " " + time);
        						}
        						else if(prediction == "sunny")
        						{
        							console.log("it's not " + prediction + " in " + location + " " + time);
        						}
        					}
        					else if(response.data["DailyForecasts"][1]["Day"]["IconPhrase"] == "Clear")
        					{
        						if(prediction == "rainy")
        						{
        							console.log("it's not " + prediction + " in " + location + " " + time);
        						}
        						else if(prediction == "sunny")
        						{
        							console.log("it's " + prediction + " in " + location + " " + time);
        						}
        					}
        					else if(prediction == "cold")
        					{
        						if(temp2 < 5)
        						{
        							console.log("it's " + prediction + " in " + location + " " + time);
        						}
        						else
        						{
        							console.log("it's not " + prediction + " in " + location + " " + time);
        						}
        					}
        					else
        					{
        						console.log("it's not " + prediction + " in " + location + " " + time);
        					}
        				}
        				else
        				{
        					if(response.data["DailyForecasts"][2]["Day"]["IconPhrase"] == "Showers")
        					{
        						if(prediction == "rainy")
        						{
        							console.log("it's " + prediction + " in " + location + " " + time);
        						}
        						else if(prediction == "sunny")
        						{
        							console.log("it's not " + prediction + " in " + location + " " + time);
        						}
        					}
        					else if(response.data["DailyForecasts"][2]["Day"]["IconPhrase"] == "Clear")
        					{
        						if(prediction == "rainy")
        						{
        							console.log("it's not " + prediction + " in " + location + " " + time);
        						}
        						else if(prediction == "sunny")
        						{
        							console.log("it's " + prediction + " in " + location + " " + time);
        						}
        					}
        					else if(prediction == "cold")
        					{
        						if(temp3 < 5)
        						{
        							console.log("it's " + prediction + " in " + location + " " + time);
        						}
        						else
        						{
        							console.log("it's not " + prediction + " in " + location + " " + time);
        						}
        					}
        					else
        					{
        						console.log("it's not " + prediction + " in " + location + " " + time);
        					}
        				}
          				break;
  				}
  				console.log('What is your next question ?');
			});
 		}
 		catch(error){
 			reject(error);
 		}
 	});
}

module.exports = getWeather;