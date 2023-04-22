import axios from 'axios';
import throttle from 'lodash.throttle';

import type { Weather } from '@/api/types';

const getWeather = throttle(async (city: string, units: string = 'metric') => {
  const response = await axios
    .get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_APP_WEATHER_API_KEY
      }&units=${units}`
    )
    .catch((error) => {
      console.error(error);
    });
  return response?.data;
}, 2000);

export default getWeather;
