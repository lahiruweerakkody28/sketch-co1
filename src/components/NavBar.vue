<template>
  <header
    class="sticky top-0 z-50 border-b border-stone-200/80 bg-white/85 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-lg dark:shadow-black/20"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <router-link to="/" class="flex items-center gap-3">
        <div
          class="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-950 text-white shadow-md transition dark:bg-gradient-to-br dark:from-rose-500 dark:to-purple-600 dark:shadow-rose-500/20"
        >
          <ShoppingBag class="h-5 w-5" />
        </div>

        <div>
          <h1 class="text-xl font-black tracking-wide text-stone-900 dark:text-white">
            Sketch-co
          </h1>
          <p class="text-[11px] uppercase tracking-[0.25em] text-stone-500 dark:text-rose-200">
            Global Fashion House
          </p>
        </div>
      </router-link>

      <nav class="hidden items-center gap-8 md:flex">
        <router-link
          to="/"
          class="text-sm font-semibold text-stone-700 transition hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-300"
        >
          Home
        </router-link>

        <router-link
          to="/about"
          class="text-sm font-semibold text-stone-700 transition hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-300"
        >
          About
        </router-link>
      </nav>

      <div class="flex items-center gap-3">
        <button
          class="flex items-center gap-2 rounded-2xl border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-900 shadow-sm transition hover:bg-stone-100 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:shadow-lg dark:shadow-black/20 dark:hover:bg-slate-800"
          @click="$emit('toggle-theme')"
        >
          <Moon v-if="!isDark" class="h-4 w-4" />
          <Sun v-else class="h-4 w-4 text-yellow-300" />
          {{ isDark ? 'Light Mode' : 'Dark Mode' }}
        </button>

        <button
          class="relative flex items-center gap-2 rounded-2xl bg-stone-950 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-rose-600 dark:bg-gradient-to-r dark:from-rose-500 dark:to-purple-600 dark:shadow-lg dark:shadow-rose-500/25"
          @click="$emit('toggle-cart')"
        >
          <ShoppingCart class="h-4 w-4" />
          Cart
          <span
            class="rounded-full bg-white px-2 py-0.5 text-xs font-black text-stone-950 dark:bg-slate-950 dark:text-white"
          >
            {{ totalItems }}
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Moon, ShoppingBag, ShoppingCart, Sun } from 'lucide-vue-next'
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