import { defineStore } from 'pinia';

import type { Weather } from '@/api/types';

import getWeather from '@/api/getWeather';

export interface WeatherState {
  weather: Weather | null;
  isLoading: boolean;
}

export const useWeatherStore = defineStore('weather', {
  state: (): WeatherState => ({
    weather: null,
    isLoading: true,
  }),
  actions: {
    async fetchWeather(city: string) {
      const weather = await getWeather(city);
      this.weather = weather ? weather : null;
      this.isLoading = false;
    },
  },
});
