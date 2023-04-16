<template>
  <input type="text" :value="modelValue" @input="handleInput" />
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const handleInput = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
input {
  @apply h-12 w-full rounded p-4 font-semibold text-blue-600 focus:outline-none;
}
</style>
