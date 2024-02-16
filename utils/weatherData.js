const request = require("request");

const openWeatherMap = {
  BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
  SECRET_KEY: "c5d50213190bc02d0793107fec8217cb",
};

const weatherData = (address, callback) => {
  const url =
    openWeatherMap.BASE_URL +
    encodeURIComponent(address) +
    "&APPID=" +
    openWeatherMap.SECRET_KEY;
  console.log(url);
  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback(true, "Unable to fetch data, Please try again. " + error);
    } else if (response.statusCode !== 200) {
      callback(true, "Unable to fetch data. Status code: " + response.statusCode);
    } else {
      callback(false, body);
    }
  });
};

module.exports = weatherData;

