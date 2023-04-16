<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useWeatherStore } from '@/stores/weather';

const searchTerm = ref('');

const weatherStore = useWeatherStore();

onMounted(() => weatherStore.fetchWeather('Osaka'));
</script>

<template>
  <div class="flex flex-col gap-4 bg-blue-700 min-h-screen text-white">
    <input
      class="m-4 p-2 rounded text-blue-700 max-w-md mx-auto"
      type="text"
      v-model.lazy="searchTerm"
      placeholder="Search for a city"
      @keyup.enter="weatherStore.fetchWeather(searchTerm)"
    />
    <div class="m-4 max-w-lg mx-auto">
      <h2 class="text-lg font-semibold">
        Weather in {{ weatherStore.weather?.name }}:
      </h2>
      <div class="p-2">
        <p>{{ weatherStore.weather?.main.temp }} degrees</p>
        <p class="font-light">
          {{ weatherStore.weather?.weather[0].description }}
        </p>
      </div>
    </div>
    <p class="m-4 px-8 max-w-lg mx-auto">{{ weatherStore.weather }}</p>
  </div>
</template>
