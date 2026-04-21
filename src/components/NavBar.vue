<template>
  <header class="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-xl dark:border-stone-800 dark:bg-stone-950/90">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <router-link to="/" class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
          <ShoppingBag class="h-5 w-5" />
        </div>

        <div>
          <h1 class="text-xl font-black tracking-wide text-stone-900 dark:text-white">
            Sketch-co
          </h1>
          <p class="text-[11px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
            Global Fashion House
          </p>
        </div>
      </router-link>

      <nav class="hidden items-center gap-8 md:flex">
        <router-link
          to="/"
          class="text-sm font-medium text-stone-700 transition hover:text-rose-600 dark:text-stone-300 dark:hover:text-rose-400"
        >
          Home
        </router-link>

        <router-link
          to="/about"
          class="text-sm font-medium text-stone-700 transition hover:text-rose-600 dark:text-stone-300 dark:hover:text-rose-400"
        >
          About
        </router-link>
      </nav>

      <div class="flex items-center gap-3">
        <button
          class="flex items-center gap-2 rounded-xl border border-stone-300 px-4 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100 dark:border-stone-700 dark:text-white dark:hover:bg-stone-900"
          @click="$emit('toggle-theme')"
        >
          <SunMoon class="h-4 w-4" />
          {{ isDark ? 'Light' : 'Dark' }}
        </button>

        <button
          class="relative flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600 dark:bg-white dark:text-black dark:hover:bg-stone-200"
          @click="$emit('toggle-cart')"
        >
          <ShoppingCart class="h-4 w-4" />
          Cart
          <span class="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-black dark:bg-black dark:text-white">
            {{ totalItems }}
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ShoppingBag, ShoppingCart, SunMoon } from 'lucide-vue-next'
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