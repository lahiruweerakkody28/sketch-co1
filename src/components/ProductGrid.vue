<template>
  <section>
    <div class="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-400">
          Featured Collection
        </p>
        <h2 class="mt-2 text-4xl font-black text-stone-900 dark:text-white">
          International fashion, curated with style
        </h2>
      </div>

      <p class="text-sm text-stone-500 dark:text-stone-400">
        Showing {{ products.length }} item<span v-if="products.length !== 1">s</span>
      </p>
    </div>

    <div v-if="products.length > 0" class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>

    <div
      v-else
      class="rounded-[2rem] border border-dashed border-stone-300 bg-white p-12 text-center dark:border-stone-800 dark:bg-stone-900"
    >
      <h3 class="text-2xl font-black text-stone-900 dark:text-white">
        No matching items found
      </h3>
      <p class="mt-3 text-sm text-stone-500 dark:text-stone-400">
        Try another search or choose a different category.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from '../types/product'
import ProductCard from './ProductCard.vue'

defineProps<{
  products: Product[]
}>()
</script>