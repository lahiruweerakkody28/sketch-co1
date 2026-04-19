<template>
  <section>
    <div class="mb-8 text-center">
      <h2 class="mb-2 text-3xl font-bold text-slate-800">Latest Products</h2>
      <p class="text-slate-600">
        Browse real product data fetched from the DummyJSON API.
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
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