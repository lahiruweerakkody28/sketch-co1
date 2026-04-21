<template>
  <header class="sticky top-0 z-30 border-b border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-950">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <router-link to="/" class="text-2xl font-bold text-neutral-900 dark:text-white">
        Sketch-co
      </router-link>

      <div class="flex items-center gap-4">
        <router-link
          to="/"
          class="text-sm font-medium text-neutral-900 hover:text-blue-600 dark:text-white"
        >
          Home
        </router-link>

        <router-link
          to="/about"
          class="text-sm font-medium text-neutral-900 hover:text-blue-600 dark:text-white"
        >
          About
        </router-link>

        <button
          class="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-stone-100 dark:border-stone-600 dark:text-white dark:hover:bg-stone-800"
          @click="$emit('toggle-theme')"
        >
          {{ isDark ? 'Light' : 'Dark' }}
        </button>

        <button
          class="relative rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-black"
          @click="$emit('toggle-cart')"
        >
          Cart
          <span class="ml-2 rounded-full bg-white px-2 py-0.5 text-xs font-bold text-black dark:bg-black dark:text-white">
            {{ totalItems }}
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCart } from '../composables/useCart'

defineProps<{
  isDark: boolean
}>()

defineEmits<{
  (e: 'toggle-theme'): void
  (e: 'toggle-cart'): void
}>()

const { totalItems } = useCart()
</script>