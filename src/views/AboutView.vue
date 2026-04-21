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
      <div class="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
        <p class="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-400">
          About Sketch-co
        </p>

        <h1 class="mt-3 text-4xl font-black text-stone-900 dark:text-white">
          A premium international-style fashion shop
        </h1>

        <p class="mt-6 text-base leading-7 text-stone-600 dark:text-stone-300">
          Sketch-co is a modern fashion shopping application built with Vue 3,
          TypeScript, Vite, Tailwind CSS, and DummyJSON product data.
        </p>

        <p class="mt-4 text-base leading-7 text-stone-600 dark:text-stone-300">
          The application focuses on fashion-related categories such as shirts, tops,
          dresses, bags, shoes, watches, jewellery, and accessories.
        </p>

        <p class="mt-4 text-base leading-7 text-stone-600 dark:text-stone-300">
          It is designed with reusable components, responsive layout, cart support,
          dark mode, elegant branding, and a high-quality international shop UI.
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