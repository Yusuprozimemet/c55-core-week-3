let cityName1 = "Amsterdam";
let tempCelsius1 = 22;
let windSpeed1 = 15;

let cityName2 = "Berlin";
let tempCelsius2 = 15;
let windSpeed2 = 20;

let cityName3 = "Copenhagen";
let tempCelsius3 = -5;
let windSpeed3 = 25;

let cityName4 = "Dublin";
let tempCelsius4 = 8;
let windSpeed4 = 10;

let cityName5 = "Edinburgh";
let tempCelsius5 = 12;
let windSpeed5 = 18;


function temperatureConversions(tempCelsius) {
  let tempFahrenheit = (tempCelsius * 9 / 5) + 32;
  let tempKelvin = tempCelsius + 273.15;
  return { tempFahrenheit, tempKelvin };
}

function weatherReport(tempCelsius) {
if (tempCelsius < 0) {
  console.log("Status: Freezing");
} else if (tempCelsius >= 0 && tempCelsius < 10) {
  console.log("Status: Cold");
} else if (tempCelsius >= 10 && tempCelsius < 20) {
  console.log("Status: Mild");
} else if (tempCelsius >= 20 && tempCelsius < 30) {
  console.log("Status: Warm");
} else {
  console.log("Status: Hot");
}
}

function windChill (tempCelsius, windSpeed) {
  return 13.12 + 0.6215 * tempCelsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * tempCelsius * Math.pow(windSpeed, 0.16);
}

function displayWeatherReport(cityName, tempCelsius, windSpeed) {
  let { tempFahrenheit, tempKelvin } = temperatureConversions(tempCelsius);
  let windChillValue = windChill(tempCelsius, windSpeed);

  console.log(`Weather Report for ${cityName}`);
  console.log(`Temperature: ${tempCelsius}°C`);
  console.log(`Temperature: ${tempFahrenheit.toFixed(1)}°F`);
  console.log(`Temperature: ${tempKelvin.toFixed(2)}K`);
  
  weatherReport(tempCelsius);
  
  console.log(`Wind chill in ${cityName}: ${windChillValue.toFixed(2)}°C`);
  console.log("---");
}

displayWeatherReport(cityName1, tempCelsius1, windSpeed1);
displayWeatherReport(cityName2, tempCelsius2, windSpeed2);
displayWeatherReport(cityName3, tempCelsius3, windSpeed3);
displayWeatherReport(cityName4, tempCelsius4, windSpeed4);
displayWeatherReport(cityName5, tempCelsius5, windSpeed5);