<template>
  <button
    :class="[
      'bg-blue-500',
      'hover:bg-blue-700',
      'text-white',
      'font-bold',
      'py-2',
      'px-4',
      'rounded',
      'focus:outline-none',
      'focus:shadow-outline',
      'transition',
      'duration-500',
      'ease-in-out',
      'transform',
      'hover:-translate-y-1',
      'hover:scale-110',
    ]"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: { type: String, required: true },
});
</script>
