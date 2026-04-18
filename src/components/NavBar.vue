<template>
  <header class="bg-slate-900 text-white shadow-md">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <router-link to="/" class="text-xl font-bold tracking-wide">
        Sketch-co
      </router-link>

      <nav class="flex items-center gap-6 text-sm font-medium">
        <router-link
          to="/"
          class="transition hover:text-cyan-300"
          active-class="text-cyan-300"
        >
          Home
        </router-link>

        <router-link
          to="/about"
          class="transition hover:text-cyan-300"
          active-class="text-cyan-300"
        >
          About
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>