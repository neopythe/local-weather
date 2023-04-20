<template>
  <div class="background">
    <div class="wrapper">
      <div class="flex flex-col gap-6">
        <nav-bar />
        <div class="flex gap-6">
          <text-input
            autofocus
            v-model.lazy="city"
            placeholder="Search for a city"
            @keyup.enter="weatherStore.fetchWeather(city)"
          />
          <action-button text="Go!" @click="weatherStore.fetchWeather(city)" />
        </div>
      </div>
      <main>
        <section>
          <div
            v-if="weatherStore.isLoading"
            class="mx-auto my-auto flex justify-center"
          >
            <loading-animation />
          </div>
          <div v-else class="mx-auto">
            <content-card>
              <weather-stats />
            </content-card>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useWeatherStore } from '@/stores/weather';

import ActionButton from '@/components/Shared/ActionButton.vue';
import ContentCard from '@/components/Shared/ContentCard.vue';
import LoadingAnimation from '@/components/Shared/LoadingAnimation.vue';
import NavBar from '@/components/NavBar.vue';
import TextInput from '@/components/Shared/TextInput.vue';
import WeatherStats from '@/components/WeatherStats.vue';

const city = ref('');

const weatherStore = useWeatherStore();

onMounted(() => weatherStore.fetchWeather('Osaka'));
</script>

<style scoped>
div.background {
  @apply flex min-h-screen flex-col bg-blue-600 text-white;
}

div.wrapper {
  @apply mx-auto flex min-h-screen w-full select-none flex-col justify-evenly gap-6 p-6;
  @apply sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg;
}

main {
  @apply flex h-full justify-center;
}

section {
  @apply flex h-full w-full;
}

section div {
  @apply flex flex-wrap justify-between gap-6;
}
</style>
