import axios from 'axios';

const getWeather = async (city: string, units: string = 'metric') => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_APP_WEATHER_API_KEY
    }&units=${units}`
  );
  return data;
};

export default getWeather;
