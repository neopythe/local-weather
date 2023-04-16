<template>
  <div class="flex min-h-screen flex-col bg-blue-600 text-white">
    <nav class="flex w-full flex-col items-start gap-4 p-4 pb-0">
      <div class="flex h-10 w-full justify-between whitespace-nowrap">
        <h1 class="font-mustica text-4xl">Local Weather</h1>
        <img src="icons/02d.png" class="max-h-full" />
      </div>
      <input
        class="h-10 w-full rounded p-2 font-semibold text-blue-600"
        type="text"
        v-model.lazy="searchTerm"
        placeholder="Search for a city"
        @keyup.enter="weatherStore.fetchWeather(searchTerm)"
      />
    </nav>
    <main>
      <content-card v-if="!weatherStore.isLoading">
        <div class="flex flex-col gap-4">
          <section class="flex max-w-full items-start justify-between">
            <div class="flex flex-col items-start gap-2">
              <h2 class="text-md">
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
              :src="`icons/${weatherStore.weather?.weather[0].icon}.png`"
              class="h-20"
            />
          </section>
          <section class="grid max-w-full grid-cols-2 gap-2">
            <div class="flex items-center gap-2">
              <p class="whitespace-nowrap text-sm">Feels like:</p>
              <div class="flex font-bold">
                <span class="text-xl">{{
                  Math.round(weatherStore.weather?.main.feels_like!)
                }}</span
                ><span class="font-semibold">°C</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <p class="text-sm">Humidity:</p>
              <div class="flex items-center gap-1">
                <span class="text-xl font-bold">{{
                  Math.round(weatherStore.weather?.main.humidity!)
                }}</span
                ><span>%</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
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
      </content-card>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useWeatherStore } from '@/stores/weather';

import ContentCard from '@/components/ContentCard.vue';

const searchTerm = ref('');

const weatherStore = useWeatherStore();

onMounted(() => weatherStore.fetchWeather('Osaka'));
</script>
