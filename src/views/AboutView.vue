<template>
  <div class="min-h-screen bg-stone-50">
    <NavBar />

    <main class="mx-auto max-w-5xl px-6 py-16">
      <div class="rounded-3xl bg-white p-8 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">About Sketch-co</p>
        <h1 class="mt-3 text-4xl font-black text-neutral-900">A modern clothing shop interface</h1>

        <p class="mt-6 text-base leading-7 text-stone-600">
          Sketch-co is designed as a modern fashion store built with Vue 3,
          TypeScript, Vite, and Tailwind CSS.
        </p>

        <p class="mt-4 text-base leading-7 text-stone-600">
          It uses DummyJSON product data and focuses on clothing and fashion-related
          categories such as shirts, tops, dresses, bags, shoes, and accessories.
        </p>

        <p class="mt-4 text-base leading-7 text-stone-600">
          The project emphasizes reusable components, strong typing, responsive design,
          search and filter functionality, and product detail routing.
        </p>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '../components/AppFooter.vue'
import NavBar from '../components/NavBar.vue'
</script>