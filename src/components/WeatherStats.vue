<template>
  <div v-if="weatherStore.weather" class="weather-stats">
    <section class="flex max-w-full items-start justify-between">
      <div class="flex flex-col items-start gap-2">
        <h2 class="text-lg">
          Weather in
          <span class="font-bold">{{ city }}</span
          >:
        </h2>
        <div class="items flex flex-col gap-2">
          <div class="flex whitespace-nowrap font-bold">
            <span class="text-4xl">{{ temperature }}</span>
            <span class="text-xl">°C</span>
          </div>
          <div class="flex items-center gap-2 whitespace-nowrap">
            <p>[</p>
            <span class="text-sm font-light">{{ description }}</span>
            <p>]</p>
          </div>
        </div>
      </div>
      <img :src="`/icons/${icon}.png`" class="h-20" />
    </section>
    <section class="flex min-w-fit max-w-full flex-wrap justify-between gap-12">
      <div class="flex items-center gap-2 justify-self-start">
        <p class="whitespace-nowrap text-sm">Feels like:</p>
        <div class="flex font-bold">
          <span class="text-xl">{{ feelsLike }}</span>
          <span class="font-semibold">°C</span>
        </div>
      </div>
      <div class="flex items-center gap-2 justify-self-end">
        <p class="text-sm">Humidity:</p>
        <div class="flex items-center gap-1">
          <span class="text-xl font-bold">{{ humidity }}</span>
          <span>%</span>
        </div>
      </div>
      <div class="flex items-center gap-2 justify-self-start">
        <p class="text-sm">Wind:</p>
        <div class="flex items-center gap-1">
          <span class="text-xl font-bold">{{ windSpeed }}</span>
          <span>km/h</span>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="error-message">
    <h2 class="text-xl font-semibold">Sorry, something went wrong!</h2>
    <p class="text-center">
      Please ensure you entered a valid city and try searching again
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useWeatherStore } from '@/stores/weather';

const weatherStore = useWeatherStore();

const city = computed(() => weatherStore.weather?.name);
const description = computed(
  () => weatherStore.weather?.weather[0].description
);
const feelsLike = computed(() =>
  Math.round(weatherStore.weather?.main.feels_like!)
);
const humidity = computed(() =>
  Math.round(weatherStore.weather?.main.humidity!)
);
const icon = computed(() => weatherStore.weather?.weather[0].icon);
const temperature = computed(() =>
  Math.round(weatherStore.weather?.main.temp!)
);
const windSpeed = computed(() => Math.round(weatherStore.weather?.wind.speed!));
</script>

<style scoped>
.error-message {
  @apply flex flex-col items-center;
}

.weather-stats {
  @apply flex min-w-fit flex-col gap-4;
}
</style>
