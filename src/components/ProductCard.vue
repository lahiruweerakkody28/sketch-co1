<template>
  <article
    class="overflow-hidden rounded-2xl bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="h-56 w-full object-cover"
    />

    <div class="p-5">
      <div class="mb-3 flex items-start justify-between gap-3">
        <h3 class="line-clamp-2 text-lg font-bold text-slate-800">
          {{ product.title }}
        </h3>
        <span class="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold capitalize text-cyan-700">
          {{ product.category }}
        </span>
      </div>

      <p class="mb-4 line-clamp-3 text-sm text-slate-600">
        {{ product.description }}
      </p>

      <div class="mb-4 flex items-center justify-between text-sm text-slate-500">
        <span>Brand: {{ product.brand }}</span>
        <span>⭐ {{ product.rating }}</span>
      </div>

      <div class="flex items-center justify-between">
        <span class="text-2xl font-bold text-slate-900">${{ product.price }}</span>
        <button
          class="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600"
        >
          View
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Product } from '../types/product'

defineProps<{
  product: Product
}>()
</script>