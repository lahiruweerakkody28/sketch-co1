<template>
  <section>
    <div class="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
          Featured Collection
        </p>
        <h2 class="mt-2 text-3xl font-black text-neutral-900">
          Fashion items curated for modern style
        </h2>
      </div>

      <p class="text-sm text-stone-500">
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
      class="rounded-3xl border border-dashed border-stone-300 bg-white p-12 text-center"
    >
      <h3 class="text-2xl font-bold text-neutral-900">No matching items found</h3>
      <p class="mt-3 text-sm text-stone-500">
        Try changing your search text or selecting another category.
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