<template>
  <div v-if="weatherStore.weather" class="flex min-w-fit flex-col gap-4">
    <section class="flex max-w-full items-start justify-between">
      <div class="flex flex-col items-start gap-2">
        <h2 class="text-lg">
          Weather in
          <span class="font-bold">{{ weatherStore.weather?.name }}</span
          >:
        </h2>
        <div class="items flex flex-col gap-2">
          <div class="flex whitespace-nowrap font-bold">
            <span class="text-4xl">{{
              Math.round(weatherStore.weather?.main.temp!)
            }}</span
            ><span class="text-xl">°C</span>
          </div>
          <p>
            [
            <span class="text-sm font-light">{{
              weatherStore.weather?.weather[0].description
            }}</span>
            ]
          </p>
        </div>
      </div>
      <img
        :src="`/icons/${weatherStore.weather?.weather[0].icon}.png`"
        class="h-20"
      />
    </section>
    <section class="flex min-w-fit max-w-full flex-wrap justify-between gap-12">
      <div class="flex items-center gap-2 justify-self-start">
        <p class="whitespace-nowrap text-sm">Feels like:</p>
        <div class="flex font-bold">
          <span class="text-xl">{{
            Math.round(weatherStore.weather?.main.feels_like!)
          }}</span
          ><span class="font-semibold">°C</span>
        </div>
      </div>
      <div class="flex items-center gap-2 justify-self-end">
        <p class="text-sm">Humidity:</p>
        <div class="flex items-center gap-1">
          <span class="text-xl font-bold">{{
            Math.round(weatherStore.weather?.main.humidity!)
          }}</span
          ><span>%</span>
        </div>
      </div>
      <div class="flex items-center gap-2 justify-self-start">
        <p class="text-sm">Wind:</p>
        <div class="flex items-center gap-1">
          <span class="text-xl font-bold">{{
            Math.round(weatherStore.weather?.wind.speed! * 3.6)
          }}</span
          ><span>km/h</span>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="flex flex-col items-center">
    <h2 class="text-xl font-semibold">Sorry, something went wrong!</h2>
    <p>Please ensure you entered a valid city and try searching again</p>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/stores/weather';

const weatherStore = useWeatherStore();
</script>

<style scoped></style>
