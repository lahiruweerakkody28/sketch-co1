<template>
  <article class="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-stone-800 dark:bg-stone-900">
    <div class="relative overflow-hidden bg-stone-100 dark:bg-stone-950">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div class="absolute left-4 top-4 flex flex-wrap gap-2">
        <span class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-stone-900 shadow dark:bg-stone-900 dark:text-white">
          {{ formatCategory(product.category) }}
        </span>

        <span class="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-black">
          ★ {{ product.rating }}
        </span>
      </div>
    </div>

    <div class="p-5">
      <div class="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 class="line-clamp-2 text-lg font-black text-stone-900 dark:text-white">
            {{ product.title }}
          </h3>
          <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">
            {{ product.brand }}
          </p>
        </div>

        <div class="rounded-2xl bg-rose-50 px-3 py-2 text-right dark:bg-rose-500/10">
          <p class="text-xs uppercase tracking-[0.2em] text-rose-600 dark:text-rose-400">
            Price
          </p>
          <p class="text-lg font-black text-stone-900 dark:text-white">
            ${{ product.price }}
          </p>
        </div>
      </div>

      <p class="line-clamp-3 text-sm leading-6 text-stone-600 dark:text-stone-300">
        {{ product.description }}
      </p>

      <div class="mt-5 grid grid-cols-2 gap-3">
        <div class="rounded-2xl border border-stone-200 p-3 dark:border-stone-800">
          <p class="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
            Stock
          </p>
          <p class="mt-1 text-sm font-semibold text-stone-900 dark:text-white">
            {{ product.stock }} Available
          </p>
        </div>

        <div class="rounded-2xl border border-stone-200 p-3 dark:border-stone-800">
          <p class="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
            Brand
          </p>
          <p class="mt-1 text-sm font-semibold text-stone-900 dark:text-white">
            {{ product.brand }}
          </p>
        </div>
      </div>

      <div class="mt-5 flex gap-2">
        <button
          class="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-600 dark:bg-white dark:text-black dark:hover:bg-stone-200"
          @click="addToCart(product)"
        >
          <ShoppingCart class="h-4 w-4" />
          Add to Cart
        </button>

        <router-link
          :to="`/product/${product.id}`"
          class="flex items-center justify-center gap-2 rounded-2xl border border-stone-300 px-4 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-900 dark:border-stone-700 dark:text-white dark:hover:bg-stone-800"
        >
          <Eye class="h-4 w-4" />
          View
        </router-link>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Eye, ShoppingCart } from 'lucide-vue-next'
import { useCart } from '../composables/useCart'
import type { Product } from '../types/product'

defineProps<{
  product: Product
}>()

const { addToCart } = useCart()

const formatCategory = (value: string): string => {
  return value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>