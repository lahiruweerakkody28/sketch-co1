<template>
  <header class="sticky top-0 z-30 bg-white shadow">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <router-link to="/" class="text-2xl font-bold">
        Sketch-co
      </router-link>

      <div class="flex items-center gap-4">
        <router-link to="/" class="text-sm font-medium hover:text-blue-600">
          Home
        </router-link>

        <router-link to="/about" class="text-sm font-medium hover:text-blue-600">
          About
        </router-link>

        <button
          class="relative rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
          @click="$emit('toggle-cart')"
        >
          Cart
          <span
            class="ml-2 rounded-full bg-white px-2 py-0.5 text-xs font-bold text-black"
          >
            {{ totalItems }}
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCart } from '../composables/useCart'

defineEmits<{
  (e: 'toggle-cart'): void
}>()

const { totalItems } = useCart()
</script>