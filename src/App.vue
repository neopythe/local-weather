<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useWeatherStore } from '@/stores/weather';

import ContentCard from '@/components/ContentCard.vue';

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
    <content-card>
      <div class="max-w-lg mx-auto">
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
      <p class="p-4 max-w-sm mx-auto text-xs">
        {{ weatherStore.weather }}
      </p>
    </content-card>
  </div>
</template>
