<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useWeatherStore } from '@/stores/weather';

import ContentCard from '@/components/ContentCard.vue';

const searchTerm = ref('');

const weatherStore = useWeatherStore();

onMounted(() => weatherStore.fetchWeather('Osaka'));
</script>

<template>
  <div class="flex min-h-screen flex-col gap-4 bg-blue-700 text-white">
    <input
      class="m-4 mx-auto max-w-md rounded p-2 text-blue-700"
      type="text"
      v-model.lazy="searchTerm"
      placeholder="Search for a city"
      @keyup.enter="weatherStore.fetchWeather(searchTerm)"
    />
    <section class="mx-auto">
      <content-card>
        <div class="mx-auto flex w-full items-center justify-between gap-4">
          <div>
            <h2 class="text-lg">
              Weather in
              <span class="font-bold">{{ weatherStore.weather?.name }}</span
              >:
            </h2>
            <div class="flex items-center gap-4 p-2">
              <p class="text-3xl font-bold">
                {{ weatherStore.weather?.main.temp }}°C
              </p>
              <p class="text-sm font-light">
                [ {{ weatherStore.weather?.weather[0].description }} ]
              </p>
            </div>
          </div>
          <img :src="`icons/${weatherStore.weather?.weather[0].icon}.png`" />
        </div>
        <p class="mx-auto max-w-sm text-xs">
          {{ weatherStore.weather }}
        </p>
      </content-card>
    </section>
  </div>
</template>
