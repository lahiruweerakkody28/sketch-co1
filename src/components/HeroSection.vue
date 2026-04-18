<template>
  <section class="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
    <div class="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
      <h1 class="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
        Welcome to Sketch-co
      </h1>

      <p class="mx-auto mb-8 max-w-2xl text-base text-slate-200 md:text-lg">
        A modern Vue 3 SPA built with TypeScript and Tailwind CSS.
      </p>

      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <router-link
          to="/"
          class="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          Shop Now
        </router-link>

        <router-link
          to="/about"
          class="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
        >
          Learn More
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>