<template>
  <div class="min-h-screen bg-stone-50 transition-colors duration-300 dark:bg-stone-950">
    <NavBar
      :is-dark="isDark"
      @toggle-theme="toggleTheme"
      @toggle-cart="isCartOpen = true"
    />

    <CartDrawer
      :is-open="isCartOpen"
      @close="isCartOpen = false"
    />

    <main class="mx-auto max-w-5xl px-6 py-16">
      <div class="rounded-3xl bg-white p-8 shadow-sm dark:bg-stone-900">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-400">About Sketch-co</p>
        <h1 class="mt-3 text-4xl font-black text-neutral-900 dark:text-white">A modern clothing shop interface</h1>

        <p class="mt-6 text-base leading-7 text-stone-600 dark:text-stone-300">
          Sketch-co is designed as a modern fashion store built with Vue 3,
          TypeScript, Vite, and Tailwind CSS.
        </p>

        <p class="mt-4 text-base leading-7 text-stone-600 dark:text-stone-300">
          It uses DummyJSON product data and focuses on clothing and fashion-related
          categories such as shirts, tops, dresses, bags, shoes, and accessories.
        </p>

        <p class="mt-4 text-base leading-7 text-stone-600 dark:text-stone-300">
          The project emphasizes reusable components, strong typing, responsive design,
          search and filter functionality, product detail routing, shopping cart persistence,
          and dark mode support.
        </p>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppFooter from '../components/AppFooter.vue'
import CartDrawer from '../components/CartDrawer.vue'
import NavBar from '../components/NavBar.vue'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const isCartOpen = ref<boolean>(false)
</script>