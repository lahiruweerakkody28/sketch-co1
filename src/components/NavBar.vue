<template>
  <header class="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-md">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <router-link to="/" class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900 text-lg font-black text-white">
          S
        </div>

        <div>
          <p class="text-lg font-extrabold tracking-wide text-neutral-900">Sketch-co</p>
          <p class="text-xs uppercase tracking-[0.2em] text-stone-500">Modern Fashion Store</p>
        </div>
      </router-link>

      <nav class="hidden items-center gap-8 md:flex">
        <router-link
          to="/"
          class="text-sm font-medium text-stone-700 transition hover:text-rose-600"
          active-class="text-rose-600"
        >
          Home
        </router-link>

        <router-link
          to="/about"
          class="text-sm font-medium text-stone-700 transition hover:text-rose-600"
          active-class="text-rose-600"
        >
          About
        </router-link>
      </nav>

      <div class="flex items-center gap-3">
        <router-link
          to="/"
          class="hidden rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-900 md:block"
        >
          New Season
        </router-link>

        <router-link
          to="/"
          class="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600"
        >
          Shop Now
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>