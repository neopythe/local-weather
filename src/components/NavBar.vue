<template>
  <nav>
    <div class="wrapper">
      <h2>Local Weather</h2>
      <img src="/icons/02d.png" />
    </div>
  </nav>
</template>

<style scoped>
div.wrapper {
  @apply flex h-fit w-full justify-between gap-6 whitespace-nowrap;
}

h2 {
  @apply font-mustica text-4xl;
  @apply sm:text-5xl md:text-6xl lg:text-7xl;
}

img {
  @apply h-10 max-h-full;
  @apply sm:h-12 md:h-14 lg:h-16;
}

nav {
  @apply flex max-w-full flex-col items-start gap-6;
}
</style>
