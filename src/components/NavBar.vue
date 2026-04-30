<template>
  <header
    class="sticky top-0 z-50 border-b border-stone-200/80 bg-white/85 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-lg dark:shadow-black/20"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      
      <!-- Logo -->
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

      <!-- Nav Links -->
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

      <!-- Right Section -->
      <div class="flex items-center gap-3">

        <!-- 🌙 PROFESSIONAL DARK MODE TOGGLE -->
        <button
          class="relative flex h-11 w-[90px] items-center rounded-full border border-stone-300 bg-stone-100 p-1 shadow-inner transition-all duration-300 dark:border-white/10 dark:bg-slate-900"
          @click="$emit('toggle-theme')"
        >
          <!-- Left Icon (Sun) -->
          <span
            class="absolute left-3 text-amber-500 transition duration-300"
            :class="isDark ? 'opacity-40' : 'opacity-100'"
          >
            <Sun class="h-4 w-4" />
          </span>

          <!-- Right Icon (Moon) -->
          <span
            class="absolute right-3 text-indigo-300 transition duration-300"
            :class="isDark ? 'opacity-100' : 'opacity-40'"
          >
            <MoonStar class="h-4 w-4" />
          </span>

          <!-- Sliding Circle -->
          <span
            class="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-stone-900 shadow-md transition-all duration-300 dark:translate-x-[42px] dark:bg-gradient-to-br dark:from-indigo-500 dark:to-purple-600 dark:text-white dark:shadow-purple-500/30"
          >
            <Sun v-if="!isDark" class="h-4 w-4" />
            <MoonStar v-else class="h-4 w-4" />
          </span>
        </button>

        <!-- 🛒 Cart Button -->
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
import { MoonStar, ShoppingBag, ShoppingCart, Sun } from 'lucide-vue-next'
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