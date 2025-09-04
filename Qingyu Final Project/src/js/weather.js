// weather.js
const apiKey = 'b39232265a959b26322ee05c1e405399';

export async function fetchCurrentWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  
  if (!response.ok) {
    throw new Error(`Error fetching weather data: ${response.statusText}`);
  }

  const data = await response.json();
  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    description: data.weather[0].description,
  };
}
