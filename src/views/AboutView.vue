<template>
  <div class="min-h-screen bg-gray-100">
    <NavBar @toggle-cart="isCartOpen = true" />

    <CartDrawer
      :is-open="isCartOpen"
      @close="isCartOpen = false"
    />

    <main class="mx-auto max-w-5xl px-6 py-16">
      <div class="rounded-2xl bg-white p-8 shadow">
        <h1 class="text-4xl font-bold">About Sketch-co</h1>
        <p class="mt-6 text-gray-700">
          Sketch-co is a modern shopping web application built using Vue 3,
          TypeScript, Vite, Tailwind CSS, and DummyJSON API data.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CartDrawer from '../components/CartDrawer.vue'
import NavBar from '../components/NavBar.vue'

const isCartOpen = ref<boolean>(false)
</script>