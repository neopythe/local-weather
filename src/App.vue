<script setup lang="ts">
import { onMounted } from 'vue';

import { useWeatherStore } from '@/stores/weather';

const weatherStore = useWeatherStore();

onMounted(() => weatherStore.fetchWeather('Osaka'));
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="m-4">
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
    <p class="m-4 px-8">{{ weatherStore.weather }}</p>
  </div>
</template>
